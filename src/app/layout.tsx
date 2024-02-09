import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const inter = Ubuntu_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artemol's Portfolio",
  description: "Artemol's Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <GoogleAnalytics gaId="G-C60QXFFJH4" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
