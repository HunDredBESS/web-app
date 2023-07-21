"use client";
import React from "react";
import Image from "next/image";

import Dataset_img from "public/datascience/AgeBand.png";
// import Drop_img from "public/datascience/drop-cols10.png";

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
              Split train data
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

          {/* <p className="mt-4 mx-3 leading-relaxed text-xl text-gray-200">
            สกัด feature จากข้อมูลอายุ เนื่องจากข้อมูลมี null จึงต้อง clean ก่อน
            เลือกใช้ค่า mean ของอายุมาเติมในคารางที่ว่าง
          </p>
          <ul className="mt-4 mx-3 leading-relaxed text-xl text-gray-200">
            <li> - แบ่งอายุของผู้โดยสารออกเป็น 5 ช่วงอายุ  </li>
            <li> - ดูความสัมพันธ์ของข้อมูลระหว่างแต่ละช่วงอายุกับอัตราการรอดชีวิต  </li>
            <li>
              - เปลี่ยนรูปแบบข้อมูลจากช่วงอายุ ให้เป็น ตัวเลขแบบ categories
              เพื่อให้ง่ายต่อการใช้งาน
            </li>
          </ul>
          <br />
          <div className=" flex flex-col gap-10 justify-center h-auto mx-3 leading-relaxed text-xl text-gray-200">
            <div className="s grid justify-items-left ">
              
              <Image
                src={Dataset_img}
                width={200}
                height={200}
                alt="dataset img"
                
              />
            </div>
            
          </div> */}
        </details>
      </div>
    </>
  );
}
