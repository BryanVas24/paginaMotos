import { User } from "@prisma/client";

export type UserRegisterForm = Omit<User, "id">;

export type HomeCardsinfo = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
};
