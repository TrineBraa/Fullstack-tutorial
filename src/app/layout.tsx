import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Trine Brandser",
  description: "Triner prøver å lage noe nytt med bruk av node, prisma og tailwind!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {cn("bg-background min-h-screen font-sans antialiased", 
        inter.variable
        )}
        >

        {children}</body>
    </html>
  );
}
