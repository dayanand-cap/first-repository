import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { FaUserLarge, FaCodepen } from 'react-icons/fa6';

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="custom-header" style={{ display: 'flex' }}>
        <div style={{ flexBasis: '150px' }}>
          <FaCodepen className="large-icon" />
          <h3>Grow With Markets</h3>
        </div>
        <div style={{ flexGrow: 1, border: '1px solid #aaa' }}>
          <div className="navigation">
            <Link className="navigation-item" href="/">Home</Link>
            <Link className="navigation-item" href="/first">Model Portfolio</Link>
            <Link className="navigation-item" href="/second/sapient">YouTube Videos</Link>
          </div>
        </div>
        <div style={{ flexBasis: '100px' }}>
          <FaUserLarge className="small-icon" />
        </div>
      </div>
      
        {children}
      </body>
    </html>
  );
}
