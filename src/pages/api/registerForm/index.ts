import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

interface NewRegisterForm {
    Idpersonal: string;
    Birth: string;
    Prefix: string;
    Sex: string;
    Nation: string;
    NameTh: string;
    LastnameTh: string;
    NameEng: string;
    LastnameEng: string;
    Email: string;
    Phone: string;
    Img: string;
    oldSchool: string;
    Degree: string;
    Gpa: string;
    Program: string;
    Faculty: string;
    Major: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            // Handle GET request to fetch data
            const registerFormData = await prisma.registerForm.findMany();

            res.status(200).json({ success: true, data: registerFormData });
        } catch (error) {
            console.error('GET request error:', error);
            res.status(500).json({ success: false, error: "An error occurred while fetching the data" });
        }
    } else if (req.method === 'POST') {
        try {
            const data: NewRegisterForm = req.body;

            if (!data) {
                res.status(400).json({ success: false, error: "Request body is missing data." });
                return;
            }

            // Insert data into the database using Prisma
            await prisma.registerForm.create({
                data:{
                    Idpersonal: data.Idpersonal,
                    Birth: data.Birth,
                    Nation: data.Nation,
                    Sex: data.Sex,
                    LastnameTh: data.LastnameTh,
                    NameEng: data.NameEng,
                    LastnameEng: data.LastnameEng,
                    Phone: data.Phone,
                    Email: data.Email,
                    Img: data.Img,
                    oldSchool: data.oldSchool,
                    Degree: data.Degree,
                    Gpa: data.Gpa,
                    Major: data.Major,
                }
            });

            res.status(201).json({ success: true });
        } catch (error) {
            console.error('POST request error:', error);
            res.status(500).json({ success: false, error: "An error occurred while creating the data" });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
