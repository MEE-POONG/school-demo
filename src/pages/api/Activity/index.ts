import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const page: number = Number(req.query.page) || 1;
                const pageSize: number = Number(req.query.pageSize) || 10;

                const activity = await prisma.activity.findMany({
                    // skip: (page - 1) * pageSize,
                    // take: pageSize,
                });

                const totalactivity = await prisma.activity.count();
                const totalPage: number = Math.ceil(totalactivity / pageSize);
                res.status(200).json({ activity });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the activity" });
            }
            break;

        case 'POST':
            try {
                const newactivity = await prisma.activity.create({
                    data: req.body,
                });

                res.status(201).json(newactivity);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the activity" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}