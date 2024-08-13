import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/src/libs/prisma";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, password, phone } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone,
        },
      });

      res
        .status(201)
        .json({ message: "Usuario registrado correctamente", user: newUser });
    } catch (error) {
      res.status(500).json({ error: "Error al registrar el usuario" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
