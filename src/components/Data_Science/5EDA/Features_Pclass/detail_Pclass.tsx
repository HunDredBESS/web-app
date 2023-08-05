"use client";
import React from "react";
import Image from "next/image";

import Alone_img from "public/datascience/feature_Pclass.png";
import Train_img from "public/datascience/feature_train01.png";

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
              เลือก feature --Pclass--
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
            {/* ดูความสัมพันธ์ของจำนวน พ่อ แม่ ลูก กับอัตรการรอดชีวิต */}
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
            <li> - ดูความสัมพันธ์ของ ticket class กับอัตรการรอดชีวิต </li>
          </ul>
          <br />
          {/* <div className="bg-yellow-200 flex grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-1 lg:mx-10 px-2 lg:px-8 leading-relaxed text-gray-200 justify-center">
            <div className="bg-blue-200 h-6 w-6"></div>
            <div className="bg-blue-400 h-6 w-6"></div>
          </div> */}
          <div
            className=" 
          flex flex-col sm:flex-row justify-center gap-3 h-fit "
          >
            {/* <p className="text-center mb-1">Info</p> */}
            <Image
              src={Alone_img}
              alt="dataset img"
              className="m-1 w-[120px] sm:w-auto h-auto sm:h-[100px] lg:h-[150px]"
              sizes="100vw"
              // style={{
              //   width: "auto",
              //   height: "100%",
              // }}
            />
            <Image
              src={Train_img}
              alt="dataset img"
              className="m-1 w-auto h-[70px] sm:h-[100px] lg:h-[180px]"
              sizes="100vw"
              style={{
                width: "auto",
                height: "100%",
              }}
            />
          </div>
        </details>
      </div>
    </>
  );
}
