import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Footer, TopNav } from "@/layout";
import Image from "next/image";
import BgImage from "~/bg.png";

const Robot = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valorians Legend",
  description: "Valorians Legend Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Robot.className} h-screen font-normal bg-brand-surface-normal`}
      >
        <div className="relative flex flex-col h-full">
          <div className="absolute inset-0 -z-10 w-full h-full bg-[url('/bg.png')] opacity-[0.05] bg-repeat-y bg-cover bg-center "></div>

          <header className="fixed top-6 left-6 right-8 z-20">
            <TopNav />
          </header>

          <main className="flex-1 mt-16 mb-16 overflow-y-auto overflow-x-hidden p-4 md:p-8">
            {children}
          </main>

          <footer className="fixed bottom-6 left-4 right-4 z-20">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
