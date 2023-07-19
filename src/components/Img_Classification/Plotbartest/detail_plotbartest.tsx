"use client";
import React from "react";
import Image from "next/image";
import Bartest_img from "public/Img_classification/bartest.jpg";


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
            16. สร้างกราฟแท่งเพื่อดูขนาดชุดข้อมูลชุด Test หลังการทำนาย

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

          <div className="leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            กราฟแท่งจะแสดงจำนวนของชุดข้อมูลของชุด Test หลังการทำนาย แบ่งตามคลาส โดยที่แกน x คือ คลาส และแกน y คือจำนวนรูปภาพ
            </div>

          </div>     

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Output
            </div>
          </div>        

          <div style={{ display: 'flex' }}>
          <Image src={Bartest_img} width={700} height={700} alt="AIAT Logo" />

          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Command
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">test_df['category'] = np.argmax(predict, axis=-1)</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            ทำการกำหนดคอลัมน์ "category" ใน DataFrame test_df โดยใช้ฟังก์ชัน np.argmax เพื่อหาค่า index ที่มีค่าสูงสุดในแต่ละแถวของตัวแปร predict ซึ่งเป็นผลลัพธ์จากการทำนาย การใช้ axis=-1 หมายถึงการคำนวณค่าสูงสุดในแต่ละแถว
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">label_map = dict((v,k) for k,v in train_generator.class_indices.items())</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            สร้างพจนานุกรม (dictionary) ที่ใช้สำหรับแปลงค่าหมวดหมู่ที่เป็นตัวเลขกลับเป็นค่าหมวดหมู่ที่เข้าใจง่ายขึ้น โดยใช้ค่าที่ได้จาก train_generator.class_indices ที่เป็นพจนานุกรมที่กำหนดค่าหมวดหมู่ให้กับแต่ละตัวอย่างในชุดข้อมูลการฝึก
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">test_df['category'] = test_df['category'].replace(label_map)</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            ใช้ฟังก์ชัน replace เพื่อแทนที่ค่าหมวดหมู่ในคอลัมน์ "category" ของ DataFrame test_df ด้วยค่าหมวดหมู่ที่ถูกแปลงกลับมาจาก label_map
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">test_df['category'].value_counts().plot.bar()</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            นับจำนวนข้อมูลในแต่ละหมวดหมู่ที่ปรากฏในคอลัมน์ "category" ของ DataFrame test_df แล้วทำการสร้างกราฟแท่ง (bar plot) เพื่อแสดงผลลัพธ์
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
