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

                const faculty = await prisma.faculty.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,

                    include: {
                        major : true,
                    },

                });

                const totalfaculty = await prisma.faculty.count();
                const totalPage: number = Math.ceil(totalfaculty / pageSize);
                res.status(200).json({ faculty });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the faculty" });
            }
            break;

        case 'POST':
            try {
                const newfaculty = await prisma.faculty.create({
                    data: req.body,
                });

                res.status(201).json(newfaculty);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the faculty" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}