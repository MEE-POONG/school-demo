import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const page: number = Number(req.query.page) || 1;
        const pageSize: number = Number(req.query.pageSize) || 10;

        const headPages = await prisma.headPage.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize,
        });

        const totalHeadPages = await prisma.headPage.count();
        const totalPages: number = Math.ceil(totalHeadPages / pageSize);

        res.status(200).json({ data: headPages, pagination: { page, pageSize, total: totalHeadPages, totalPages } });
      } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the HeadPages" });
      }
      break;
    case "POST":
      try {
        const newHeadPage = await prisma.headPage.create({
          data: req.body
        });

        res.status(201).json(newHeadPage);
      } catch (error) {
        res.status(500).json({ error: "An error occurred while creating the HeadPage" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
