import React from "react";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

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
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="JobFinder is a platform for job search, subscription to job updates, and account creation." />
        <meta name="keywords" content="job search, job updates, create account, career, employment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${font.className} min-h-screen bg-gray-100`} >
        <ToastContainer />
        <Header/>
        {children}
      </body>
    </html>
  );
}
