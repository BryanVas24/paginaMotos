import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/ui/Footer";

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
        <Footer />
        <ToastContainer
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          autoClose={3000}
        />
      </body>
    </html>
  );
}
