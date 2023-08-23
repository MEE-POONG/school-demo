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

                const newSliderSchool = await prisma.newSliderSchool.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalnewSliderSchool = await prisma.newSliderSchool.count();
                const totalPage: number = Math.ceil(totalnewSliderSchool / pageSize);
                res.status(200).json({ newSliderSchool });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the newSliderSchool" });
            }
            break;

        case 'POST':
            try {
                const newnewSliderSchool = await prisma.newSliderSchool.create({
                    data: req.body,
                });

                res.status(201).json(newnewSliderSchool);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the newSliderSchool" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}