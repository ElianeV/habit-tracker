import prisma from "../../../db/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const habitId = req.query["habit"];

  if (!habitId || typeof habitId !== "string") {
    res.statusCode = 404;
    res.send(JSON.stringify({ message: "Not found" }));
    return;
  }

  const days = await prisma.day.findMany({
    where: {
      habitId: parseInt(habitId),
    },
  });
  return res.status(200).json(days);
};
