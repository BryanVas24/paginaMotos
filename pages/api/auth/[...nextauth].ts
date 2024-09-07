import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  // Configura el proveedor de Google
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  //  almacenar la sesión en JWT
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = Number(token.sub); // Asegura que el id sea un número

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id.toString(); // Convierte el ID a string porque JWT requiere un string
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
