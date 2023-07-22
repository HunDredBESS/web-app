"use client";
import React from "react";
import Image from "next/image";
import Resultimg_img from "public/resultpredict.jpg";
import SubmitDf from "public/NLP/SubmitDf.png";
import SubmitCSV from "public/NLP/SubmitCSV.png";


type Props = {};

function detail_import({}: Props) {
  return (
    <>
      <div className="space-y-4">
        <details
          className="group border-s-4 border-green-500 p-6 bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
            Save to CSV

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
 
          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            ก่อนอื่นเราก็ต้องสร้าง dataframe ของ submission file ขึ้นมาก่อน (โดยปกติโจทย์ hackathon ของทางโครงการจะมีไฟล์ sample submission มาให้อยู่แล้ว ให้ใช้ไฟล์นั้น) 
            </div>
          </div>    

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={SubmitDf} width={600} height={600} alt="Read file" />
          </div>

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            จากนั้นก็ให้ใช้คำสั่งตามรูปภาพข้างล่างนี้เพื่อนำค่าที่เรา pridict ไว้ มาใส่ใน column ที่ต้องการและเซฟออกมาเป็นไฟล์ .csv 
            </div>
          </div> 

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={SubmitCSV} width={600} height={600} alt="Read file" />
          </div>   

        </details>

        {/* <details className="group border-s-4 border-green-500 bg-gray-50 p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 dark:bg-gray-800 dark:text-white sm:p-3">
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

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details> */}
      </div>
    </>
  );
}

export default detail_import;
