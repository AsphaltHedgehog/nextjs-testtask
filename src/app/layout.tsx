import React from "react";
import "./globals.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// font
import { Plus_Jakarta_Sans } from 'next/font/google'
const font = Plus_Jakarta_Sans({subsets: ['latin']})

// components
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastContainer />
        <Header/>
        {children}
      </body>
    </html>
  );
}
