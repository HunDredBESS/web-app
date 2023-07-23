"use client";
import React from "react";
import Image from "next/image";

import Test_img from "public/datascience/preprocess_test01.png";
// import Acc_img from "public/datascience/accuracy_dt.png";

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
            Preprocess ข้อมูลชุด test
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

          <p className="mt-4 mx-3 leading-relaxed text-xl text-gray-200">
            ทำการ Preprocess ข้อมูลชุด test ให้เหมือนกันกับ ข้อมูลชุดที่นำมา train เพื่อที่จะได้ผลรับที่ถูกต้องเมื่อ prediction
          </p>
          <ul className="mt-4 mx-3 leading-relaxed text-xl text-gray-200">
            {/* <li> - แบ่งอายุของผู้โดยสารออกเป็น 5 ช่วงอายุ  </li> */}
            {/* <li> - ดูความสัมพันธ์ของข้อมูลระหว่างแต่ละช่วงอายุกับอัตราการรอดชีวิต  </li>
            <li>
              - เปลี่ยนรูปแบบข้อมูลจากช่วงอายุ ให้เป็น ตัวเลขแบบ categories
              เพื่อให้ง่ายต่อการใช้งาน
            </li> */}
          </ul>
          <br />
          <div className=" flex flex-row gap-5 justify-center h-auto mx-3 leading-relaxed text-xl text-gray-200">
            
              
              <Image
                src={Test_img}
                width={400}
                height={200}
                alt="dataset img"
              />
              {/* <Image
                src={Acc_img}
                width={320}
                height={200}
                alt="dataset img"
              /> */}           
          </div>
        </details>
      </div>
    </>
  );
}
