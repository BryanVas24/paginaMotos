// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/src/libs/prisma";
import { unhashPassword } from "@/src/libs/PasswordsHandler";
import jwt from "jsonwebtoken";

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { email, password } = req.body;

  try {
    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const isValidPassword = await unhashPassword(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor " });
  }
}
