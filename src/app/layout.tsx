import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

// 注册 jersey10 字体
const jersey10Font = localFont({
  src: [
    {
      path: "../../public/fonts/jersey10-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/jersey10-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/jersey10-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-jersey10",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Raptor Web",
  description: "Raptor Web Application",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(jersey10Font.variable)}>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>{children}</body>
    </html>
  );
}
