"use client";
import React from "react";
import Image from "next/image";

import Describe_img from "public/datascience/describe-data01.png";
import Info_img from "public/datascience/info-data01.png";

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
              Data Cleaning and Preprocessing
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
            Data cleaning and preprocessing
            เพื่อเตรียมข้อมูลให้พร้อมสำหรับการวิเคราะห์และการสร้างโมเดล
            วิธีการหลัก ๆ รวมถึงการจัดการกับข้อมูลที่หายไป
            โดยการลบหรือแทนค่าข้อมูลที่หายไป การจัดการกับข้อมูลผิดปกติ
            (outliers) การจัดรูปแบบข้อมูลเพื่อให้เป็นสม่ำเสมอ
            การจัดการกับข้อมูลที่ซ้ำซ้อน การจัดการกับข้อมูลที่ไม่สมดุลกัน
            และการลดขนาดข้อมูล
            {/* Data cleaning and preprocessing are important steps in data science
            to prepare the data for analysis and modeling. Key techniques
            include handling missing values by removing or imputing them,
            addressing outliers, formatting data for consistency, handling
            duplicates, scaling features for uniformity, encoding categorical
            variables for numerical analysis, handling imbalanced data, and
            reducing dimensionality. The objective is to ensure the data is
            clean, consistent, and suitable for analysis and modeling tasks. */}
          </p>
          <ul className="mt-4 mx-3 leading-relaxed text-xl text-gray-200">
            <li> - เช็คว่าข้อมูลมีค่าว่าง หรือ null </li>
            <li> - ดูลักษณะของข้อมูล</li>
          </ul>
          
          <div className=" flex flex-row gap-10 justify-center h-auto mx-3 leading-relaxed text-xl text-gray-200">
            <div className="justify-center ">
              <p className="text-center mb-1">Info</p>
              <Image
                src={Info_img}
                width={280}
                height={280}
                alt="dataset img"
              />
            </div>
            <div className="justify-center">
            <p className="text-center mb-1">describe</p>
              <Image
                src={Describe_img}
                width={500}
                height={200}
                alt="dataset img"
              />
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
