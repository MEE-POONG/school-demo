import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

interface Pagination {
  type?: string;
  page?: number;
  pageSize?: number;
  totalPages?: number;
}

interface RequestQuery {
  page?: string;
  pageSize?: string;
  keyword?: string;
}

interface ApiResponse {
  success: boolean;
  data: any;
  paginationInfo: Pagination[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const query: RequestQuery = req.query as unknown as RequestQuery;
        const pageSize: number = parseInt(query.pageSize || "10", 10);
        const type: string | undefined = query.keyword;

        let paginationInfo: Pagination[] = [];
        let newsData: any[] = [];

        if (type) {
          const page: number = parseInt(query.page || "1", 10);
          const totalCount = await prisma.news.count({
            where: { type: type }
          });
          const totalPages = Math.ceil(totalCount / pageSize);

          const newsForType = await prisma.news.findMany({
            where: { type: type },
            skip: (page - 1) * pageSize,
            take: pageSize
          });

          paginationInfo.push({
            type: type,
            page: page,
            pageSize: pageSize,
            totalPages: totalPages
          });

          newsData = newsForType;
        } else {
          const uniqueNewsTypes = await prisma.news.groupBy({
            by: ["type"],
            _count: {
              type: true
            }
          });

          for (const typeGroup of uniqueNewsTypes) {
            if (typeGroup.type === null) continue;

            const totalCount = typeGroup._count.type || 0;
            const totalPages = Math.ceil(totalCount / pageSize);

            const newsForType = await prisma.news.findMany({
              where: { type: typeGroup.type },
              take: pageSize
            });

            if (newsForType.length > 0) {
              newsData.push(...newsForType);
              paginationInfo.push({
                type: typeGroup.type,
                page: 1,
                pageSize: pageSize,
                totalPages: totalPages
              });
            }
          }
        }

        res.status(200).json({
          success: true,
          data: newsData,
          paginationInfo
        });
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
