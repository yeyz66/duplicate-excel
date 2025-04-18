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
  title: "How to Remove Duplicates in Excel - Easy & Fast Duplicate Removal Tool",
  description: "Learn how to delete duplicates in Excel quickly with our free online tool. Simple step-by-step guide to remove Excel duplicates and clean your data instantly.",
  keywords: ["how to remove duplicates in excel", "how to delete duplicates in excel", "excel duplicates", "remove excel duplicates", "excel duplicate removal", "clean excel data"],
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
