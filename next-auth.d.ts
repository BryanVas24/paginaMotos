//Este archivo es para que ts reconozca

import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
    } & DefaultSession["user"];
  }
}
