import type { Metadata } from "next";
import React from 'react'
import "./globals.css";

export const metadata: Metadata = {
  title: "Create New Task",
  description: "Create New Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
