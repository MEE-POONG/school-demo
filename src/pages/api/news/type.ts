import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

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
    total: number
}
interface RequestQuery {
    page?: string;
    pageSize?: string;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':

            const newsTypes = await prisma.news.findMany({
                select: {
                    type: true
                },
                distinct: ['type']
            });
            const distinctNewsTypes = newsTypes.map(nt => nt.type);

            res.status(200).json({ success: true, distinctNewsTypes });
            break;
        case 'POST':
            try {
                const newNews = await prisma.news.create({
                    data: req.body,
                });

                res.status(201).json(newNews);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the newsSchool" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}