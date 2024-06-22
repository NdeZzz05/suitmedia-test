"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <ParallaxProvider>{children}</ParallaxProvider>
        </div>
      </body>
    </html>
  );
}
