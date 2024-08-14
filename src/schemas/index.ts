import z from "zod";
export const UserSchema = z.object({
  name: z.string().min(1, "Tu nombre es obligatorio"),
  email: z.string().email(),
  phone: z
    .string()
    .min(8, "El numero teléfonico debe poseer 8 caracteres minimo")
    .max(8, "El numero teléfonico debe poseer 8 caracteres máximo"),
  password: z.string(),
});
