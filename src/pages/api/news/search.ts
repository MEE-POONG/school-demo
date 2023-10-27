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
    position?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const query: RequestQuery = req.query as unknown as RequestQuery;
                const page: number = parseInt(query.page || '1', 10);
                const pageSize: number = parseInt(query.pageSize || '10', 10);
                let keyword: string = decodeURIComponent(query.keyword || '');

                const searchCriteria: Prisma.NewsWhereInput = {};

                if (keyword) {
                    searchCriteria.type = {
                        contains: keyword,
                        mode: 'insensitive'
                    };
                }

                const userAGs = await prisma.news.findMany({
                    where: searchCriteria,

                    skip: (page - 1) * pageSize,
                    take: pageSize,
                    orderBy: {
                        createdAt: 'desc',
                    }
                });

                const totalPartnersCount: number = await prisma.news.count({
                    where: searchCriteria,
                });

                const totalPages: number = Math.ceil(totalPartnersCount / pageSize);

                res.status(200).json({ success: true, data: userAGs, pagination: { total: totalPages, page: page, pageSize: pageSize } });
            } catch (error) {
                res.status(500).json({ success: false, message: "An error occurred while fetching the userAGs" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
