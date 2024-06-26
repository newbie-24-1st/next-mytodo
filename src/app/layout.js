import { Inter, Noto_Sans_KR } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansKr = Noto_Sans_KR({ subsets: ["latin"], variable: "--font-kr" });

export const metadata = {
  title: "My Todo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable, notoSansKr.variable)}>
      <body>{children}</body>
    </html>
  );
}
