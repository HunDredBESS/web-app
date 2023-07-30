"use client";
import React from "react";
import Image from "next/image";

import Head from "public/signal/s.png";
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
            Predict
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
            ก่อนอื่นเราก็ต้องสร้าง dataframe ของชุดเทสขึ้นมาก่อนจากนั้นก็ทำการ preprocess/cleaning ข้อมูลชุดเทส (เนื่องจากเรา preprocess ชุดข้อมูลก่อนเทรน เพราะฉะนั้นโมเดลที่เราเทรนเรียนรู้จากข้อมูลที่ clean แล้ว ดังนั้นการจะนำโมเดลที่เราเทรนมาใช้ เพื่อให้ได้ประสิทธิภาพดีสุด ข้อมูลชุดเทสก็ควรจะเป็นข้อมูลรูปแบบเดียวกับที่ใช้เทรน เราเลยต้องทำการ preprocess ข้อมูลชุดเทสด้วย โดยจะใช้วิธีการเดียวกันกับที่ทำตอน preprocess ข้อมูลชุดเทรน
          </p>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
              {/* basic libraries for data science in Python */}
              {/* Libarary and funtion */}
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

          
          
         
          
          <br />
          <div className=" flex flex-row  justify-center h-auto">
                {/* <Image
                  src={Head}
                  width={600}
                  height={600}
                  alt="cat" */}
                {/* /> */}
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
