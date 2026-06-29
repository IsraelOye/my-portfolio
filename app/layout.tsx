import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Israel Oyedele - Frontend Developer",
  description: "Portfolio of Israel Oyedele, a frontend developer specializing in React and Next.js. Explore my projects, skills, and ways to get in touch.",
  verification: {
    google: "hRrKlfIkkvPiaic0SryGHyEuTYVV8HPn6sLbMu5ZNCo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "dark", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
