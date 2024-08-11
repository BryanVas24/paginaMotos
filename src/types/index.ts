import { User } from "@prisma/client";

export type UserRegisterForm = Omit<User, "id">;
