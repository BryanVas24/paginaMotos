"use server";

import { prisma } from "@/src/libs/prisma";
import { UserSchema } from "@/src/schemas";
import { hashPassword } from "@/src/libs/PasswordsHandler";

export async function createUser(data: unknown) {
  try {
    //Validando los datos con el esquema de usuario
    const result = UserSchema.safeParse(data);
    //Si ocurre algun error
    if (!result.success) {
      return {
        errors: result.error.issues,
      };
    }
    // Verificar si el correo electrónico ya está registrado
    const existingUser = await prisma.user.findUnique({
      where: { email: result.data.email },
    });

    if (existingUser) {
      return {
        errors: [{ message: "El correo electrónico ya está en uso." }],
      };
    }
    //Aca se hashea el password
    const userData = {
      ...result.data,
      password: await hashPassword(result.data.password),
    };

    await prisma.user.create({
      data: userData,
    });

    return {
      success: true,
    };
  } catch (error) {
    // Manejo del error
    console.error("Error al crear usuario:", error);
    return {
      errors: [
        { message: "Ocurrió un error inesperado. Inténtalo nuevamente." },
      ],
    };
  }
}
