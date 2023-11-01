import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type Pagination = {
    page: number;
    pageSize: number;
    total: number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const newsType = await prisma.newsType.findMany({
                });

                res.status(200).json({ newsType });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the newsSchool" });
            }
            break;
        case 'POST':
            try {
                const newNews = await prisma.newsType.create({
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