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

                const newSlider = await prisma.newSlider.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalnewSlider = await prisma.newSlider.count();
                const totalPage: number = Math.ceil(totalnewSlider / pageSize);
                res.status(200).json({ newSlider });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the newSlider" });
            }
            break;

        case 'POST':
            try {
                const newnewSlider = await prisma.newSlider.create({
                    data: req.body,
                });

                res.status(201).json(newnewSlider);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the newSlider" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}