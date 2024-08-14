import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "../components/common/sidebar";
import Navbar from "../components/common/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "McClellands",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen flex">
          <Sidebar />
          <div className="w-full flex flex-col pt-[27px] px-[80px] gap-y-[34px]">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
