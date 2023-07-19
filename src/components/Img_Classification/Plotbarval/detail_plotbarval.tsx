"use client";
import React from "react";
import Image from "next/image";
import Barval_img from "public/Img_classification/barval.jpg";


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
            8. สร้างกราฟแท่งเพื่อดูขนาดชุดข้อมูลชุด validate

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
            กราฟแท่งจะแสดงจำนวนของชุดข้อมูลแบ่งตามคลาส โดยที่แกน x คือ คลาส และแกน y คือจำนวนรูปภาพ
            </div>

          </div>   

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            total_train = train_df.shape[0]: ตัวแปร total_train จะเก็บจำนวนตัวอย่างในชุดข้อมูลการฝึกสอน train_df โดย train_df.shape[0] จะคืนค่าเป็นจำนวนแถวใน DataFrame train_df ซึ่งในที่นี้จะเป็นจำนวนตัวอย่างทั้งหมดในชุดข้อมูลการฝึกสอน
            </div>

          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            total_validate = validate_df.shape[0]: ตัวแปร total_validate จะเก็บจำนวนตัวอย่างในชุดข้อมูลการตรวจสอบ validate_df โดย validate_df.shape[0] จะคืนค่าเป็นจำนวนแถวใน DataFrame validate_df ซึ่งในที่นี้จะเป็นจำนวนตัวอย่างทั้งหมดในชุดข้อมูลการตรวจสอบ
            </div>

          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            batch_size=15: ตัวแปร batch_size กำหนดขนาดของแบตช์ (batch) ที่จะนำเข้าสู่โมเดลในแต่ละครั้งในกระบวนการฝึกสอน ในที่นี้ถูกกำหนดค่าเป็น 15 ซึ่งหมายถึงโมเดลจะรับข้อมูลเข้ามา 15 ตัวอย่างในแต่ละครั้งในกระบวนการฝึกสอน
            </div>

          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Output
            </div>
          </div>        

          <div style={{ display: 'flex' }}>
          <Image src={Barval_img} width={700} height={700} alt="AIAT Logo" />

          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Library and function
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">value_counts()</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เพื่อนับจำนวนค่าที่ซ้ำกันในคอลัมน์ 'category'
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">plot.bar()</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            สร้างกราฟแท่ง
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
