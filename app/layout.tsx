import type { Metadata } from "next";

import "./globals.css";
import NavBar from "@/components/ui/NavBar";

export const metadata: Metadata = {
  title: "Motos",
  description: "App dockerizada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-alice-blue">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
