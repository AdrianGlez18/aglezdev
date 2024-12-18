"use client"

import { RecoilRoot } from 'recoil'
import localFont from "next/font/local";
import "@/styles/globals.css";
import SfxContainer from "@/components/shared/layout/SfxContainer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


/* export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RecoilRoot>
    <html lang="en" data-theme="fall">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary overflow-x-hidden`}
      >
        <SfxContainer>{children}</SfxContainer>
      </body>
    </html>
    </RecoilRoot>
  );
}
