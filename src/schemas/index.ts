import z from "zod";

export const UserSchema = z.object({
  name: z.string().min(1, "Su nombre es obligatorio"),
  email: z.string().email("Email no valido"),
  phone: z
    .string()
    .min(8, "El numero teléfonico debe poseer 8 caracteres minimo")
    .max(8, "El numero teléfonico debe poseer 8 caracteres máximo"),
  password: z.string().min(5, "Password muy corta"),
});
