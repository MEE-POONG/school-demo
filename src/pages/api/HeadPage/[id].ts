import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const id = req.query.id as string;

        const data = await prisma.headPage.findUnique({
          where: { id }
        });

        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching the HeadPage data" });
      }
      break;

    case "PUT":
      try {
        const id = req.query.id as string;

        const data = await prisma.headPage.update({
          where: { id },
          data: req.body
        });

        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: "An error occurred while updating the HeadPage data" });
      }
      break;

    case "DELETE":
      try {
        const id = req.query.id as string;

        const data = await prisma.headPage.delete({
          where: { id }
        });

        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: "An error occurred while deleting the HeadPage data" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
