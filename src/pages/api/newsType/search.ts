import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

type NewsWithNewsType = Prisma.NewsGetPayload<{
    include: { NewsType: true };
}>;

type Data = {
    success: boolean;
    message?: string;
    data?: NewsWithNewsType[]; // Specify the expected data type
    pagination?: Pagination;
};

type Pagination = {
    page: number;
    pageSize: number;
    total: number;
};

interface RequestQuery {
    page?: string;
    pageSize?: string;
    keyword?: string;
}

// ...

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
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
                    searchCriteria.OR = [
                        {
                            NewsType: {
                                OR: [
                                    {
                                        nameTH: {
                                            contains: keyword,
                                            mode: 'insensitive',
                                        },
                                    },
                                    {
                                        nameEN: {
                                            contains: keyword,
                                            mode: 'insensitive',
                                        },
                                    },
                                ],
                            },
                        },
                    ];
                }

                const newsData = await prisma.news.findMany({
                    where: searchCriteria,
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                    orderBy: {
                        createdAt: 'desc',
                    },
                    include: {
                        NewsType: true, // Includes the NewsType in the result set
                    },
                });

                const totalNewsCount: number = await prisma.news.count({
                    where: searchCriteria,
                });

                const totalPages: number = Math.ceil(totalNewsCount / pageSize);

                res.status(200).json({
                    success: true,
                    data: newsData,
                    pagination: {
                        total: totalPages,
                        page: page,
                        pageSize: pageSize,
                    },
                });
            } catch (error) {
                res.status(500).json({ success: false, message: "An error occurred while fetching the news" });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
