"use client";
import React from "react";
import Image from "next/image";
import Barval_img from "public/barval.jpg";


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
            15. การทำนายข้อมูลภาพชุด Test

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

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            ทำนายภาพจากข้อมูลชุด Test โดยใช้โมเดลที่เทรนไว้มาทำนาย
            </div>

          </div>      

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Library and function
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl">predict</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นตัวแปรที่เก็บผลลัพธ์ที่ได้จากการทำนายของโมเดล
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl">predict_generator</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นวิธีใน Keras ที่ใช้ในการทำนายผลลัพธ์จากชุดข้อมูลที่กำหนด
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl">steps=np.ceil(nb_samples/batch_size)</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            กำหนดจำนวนครั้งที่ต้องทำนายผลลัพธ์ โดยคำนวณจากจำนวนตัวอย่างที่ต้องทำนาย (nb_samples) และขนาดแบตช์ (batch_size) โดยใช้ np.ceil เพื่อปัดขึ้นให้เป็นจำนวนเต็ม (เนื่องจากต้องการให้ทำนายครบทุกตัวอย่างในชุดข้อมูลทดสอบ)
            </div>
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
