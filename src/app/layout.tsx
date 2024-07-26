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
        <div className="flex flex-col h-full p-8 relative overflow-hidden">
          <div className="absolute top-[-40px] left-0 right-0 bottom-0 -z-10 w-full bg-brand-surface-normal">
            <Image src={BgImage} alt="bg" className="w-full opacity-[0.05]" />
          </div>
          <header>
            <TopNav />
          </header>
          <main className="flex-1">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
