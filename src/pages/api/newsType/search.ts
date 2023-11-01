import type { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();

type Data = {
    success: boolean;
    message?: string;
    data?: any;
    pagination?: Pagination
};

type Pagination = {
    page: number;
    pageSize: number;
    total: number;
}

interface RequestQuery {
    page?: string;
    pageSize?: string;
    keyword?: string;
    newsTypeId?: string;
}
// ... [rest of the imports and type definitions]

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const query: RequestQuery = req.query as unknown as RequestQuery;
                const page: number = parseInt(query.page || '1', 10);
                const pageSize: number = parseInt(query.pageSize || '10', 10);
                const keyword: string = decodeURIComponent(query.keyword || '');

                const searchCriteria: Prisma.NewsWhereInput = {};

                if (keyword) {
                    searchCriteria.title = {
                        contains: keyword,
                        mode: 'insensitive'
                    };
                }

                // If you want to search by newsTypeId as well
                if (query.newsTypeId) {
                    searchCriteria.newsTypeId = query.newsTypeId;
                }

                const newsData = await prisma.news.findMany({
                    where: searchCriteria,
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                    orderBy: {
                        createdAt: 'desc',
                    },
                    include: {
                        NewsType: true  // Include the NewsType details with each News item
                    }
                });

                const totalPartnersCount: number = await prisma.news.count({
                    where: searchCriteria,
                });

                const totalPages: number = Math.ceil(totalPartnersCount / pageSize);

                res.status(200).json({ success: true, newsData, pagination: { total: totalPages, page: page, pageSize: pageSize } });
            } catch (error) {
                res.status(500).json({ success: false, message: "An error occurred while fetching the news" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
