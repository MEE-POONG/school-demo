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

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    try {
        const page: number = parseInt(req.query.page as string) || 1;
        const pageSize: number = parseInt(req.query.pageSize as string) || 10;

        // Adjust the logic below according to your database and what you are trying to fetch
        const news = await prisma.news.findMany({
            skip: (page - 1) * pageSize,
            take: pageSize,
            // You can include relations if needed
            // include: { comments: true },
        });

        // Here you can also count total news items to manage pagination on the client-side
        const totalNewsCount = await prisma.news.count();
        const totalPages: number = Math.ceil(totalNewsCount / pageSize);
        res.status(200).json({
            data: news,
            total: totalPages,
            page,
            pageSize,
        });
    } catch (error) {
        // Make sure to handle errors properly
        res.status(500).json({ error: "Error fetching news" });
    }
}