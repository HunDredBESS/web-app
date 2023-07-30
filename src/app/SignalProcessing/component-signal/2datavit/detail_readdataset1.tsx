"use client";
import React from "react";
import Image from "next/image";

import Head from "public/signal/bar.png";
// import Tail from "public/signal/tail.png";

type Props = {};

export default function detail_dataclean({}: Props) {
  return (
    <>
      <div className="space-y-4">
        <details
          className="group border-s-4 border-green-500 p-6 bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
             กราฟเเท่งเพื่อดูขนาดของชุดข้อมูล
            </h2>

            <span className="shrink-0 rounded-full  p-1.5  bg-gray-800 text-white sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>
          
          <p className="mt-4 leading-relaxed text-lg text-gray-200">
            {/* การเขียนเว็บ
            <br /> */}
            กราฟเเท่งจะเเสดงจำนวนของชุดข้อมูลเเบ่งตามคลาส โดยที่เเกน x คือคลาส เเละเเกน y คือจำนวนของข้อมูล
          </p>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
              {/* basic libraries for data science in Python */}
              Libarary and funtion
            </h2>

            <span className="shrink-0 rounded-full  p-1.5  bg-gray-800 text-white sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">value_counts()</div>
            <div className="h-auto text-lg ">
            เพื่อนับจำนวนค่าที่ซ้ำกันในคอลัมน์ 'category'
             
              {/* A popular library for data manipulation and analysis. It provides
              data structures like DataFrame, which is a tabular data structure,
              and Series, which is a one-dimensional labeled array. pandas
              offers a wide range of functions for data cleaning,
              transformation, and analysis. */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">plot.bar()</div>
            <div className="h-auto text-lg ">
            สร้างกราฟแท่ง
            
              {/* A popular library for data manipulation and analysis. It provides
              data structures like DataFrame, which is a tabular data structure,
              and Series, which is a one-dimensional labeled array. pandas
              offers a wide range of functions for data cleaning,
              transformation, and analysis. */}
            </div>
          </div>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
               Output
            </h2>

            <span className="shrink-0 rounded-full  p-1.5  bg-gray-800 text-white sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>
          
          <p className="mt-4 leading-relaxed text-lg text-gray-200">
            {/* การเขียนเว็บ
            <br /> */}
            จากข้อมูลชุดนี้จะพบว่าข้อมูลชุดมีของ Imbalane ของชุดข้อมูลอยู่
          </p>
          <br />
          <div className=" flex flex-row  justify-center h-auto">
                <Image
                  src={Head}
                  width={400}
                  height={400}
                  alt="cat"
                />
{/*                 
                                <Image
                  src={Tail}
                  width={400}
                  height={400}
                  alt="cat1" */}
                {/* /> */}
              </div>

        </details>
        
      </div>
    </>
  );
}
