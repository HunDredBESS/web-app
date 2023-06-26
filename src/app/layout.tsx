"use client";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Logo_img from "public/logo_aiat.png";
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Block Code",
  description: "platform to learn AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed w-full z-10 shadow-xl bg-opacity-80 ">
          {/* <nav className={`fixed w-full z-10 ${ isSticky ? 'bg-white border-gray-200 dark:bg-gray-900 shadow-lg' : 'bg-transparent'}`}> */}

          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
              <Image src={Logo_img} width={100} height={70} alt="AIAT Logo" />
              <span className="ml-10 self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
                Block Code
              </span>
            </Link>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {/* <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/about"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Test-page"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Test-feature
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Test-page1"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Test-feature1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Test-page2"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Test-feature2
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr />
        <div className="container mx-auto max-w-screen-2xl px-4 mt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
