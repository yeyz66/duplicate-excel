import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Prevent Font Awesome from adding its CSS since we did it in a different way
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Excel去重专家 - 高效处理Excel数据",
  description: "上传Excel文件，一键去除重复数据行，提高数据处理效率",
  keywords: ["Excel", "去重", "数据清洗", "excel工具", "重复行删除"],
  icons: {
    icon: '/favicon1.svg',
    apple: '/favicon1.svg',
    shortcut: '/favicon1.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon1.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon1.svg" />
        <link rel="shortcut icon" href="/favicon1.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
