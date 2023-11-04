import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

type Data = {
    success: boolean;
    message?: string;
    data?: any;
    pagination?: Pagination;
};

type Pagination = {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
};

interface RequestQuery {
    page?: string;
    pageSize?: string;
    keyword?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const query: RequestQuery = req.query as unknown as RequestQuery;
                const page: number = parseInt(query.page || '1', 10);
                const pageSize: number = parseInt(query.pageSize || '10', 10);
                const newsTypeId: string | undefined = query.keyword;

                const whereCriteria: Prisma.NewsWhereInput = {};

                if (newsTypeId) {
                    whereCriteria.newsTypeId = newsTypeId;
                }

                const newsItems = await prisma.news.findMany({
                    where: whereCriteria,
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                    orderBy: {
                        createdAt: 'desc'
                    }
                });

                const totalNewsCount: number = await prisma.news.count({
                    where: whereCriteria,
                });

                const totalPages: number = Math.ceil(totalNewsCount / pageSize);

                res.status(200).json({
                    success: true,
                    data: newsItems,
                    pagination: {
                        total: totalNewsCount,
                        totalPages: totalPages,
                        page: page,
                        pageSize: pageSize
                    }
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({ success: false, message: "An error occurred while fetching the news items" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
