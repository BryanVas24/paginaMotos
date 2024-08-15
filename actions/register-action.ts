"use server";
import bcrypt from "bcrypt";
import { prisma } from "@/src/libs/prisma";
import { UserSchema } from "@/src/schemas";

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
    //Aca se hashea el password
    const userData = {
      ...result.data,
      password: await bcrypt.hash(result.data.password, 10),
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
