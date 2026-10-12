import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rwa2tokens — Full-Stack Web3 Tokenization Partner",
  description:
    "RWA2Tokens is the full-stack Web3 tokenization partner. Blockchain development, DeFi protocols, RWA tokenization, NFT platforms, and digital securities. Nine specialist practice areas. One seamless partner.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <AnimateOnScroll />
      </body>
    </html>
  );
}
