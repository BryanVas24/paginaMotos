//Esto se hace porque el session provider debe envolver la aplicación pero funciona en el cliente, asi que para no hacer todo cliente pues lo separe
"use client";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
