"use client";
import React from "react";
import Image from "next/image";
import Imggen_img from "public/Img_classification/imagegenwork.jpg";


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
            11. ตัวอย่างการทำงานของ ImageDataGenerator

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
            หลังจากสร้างชุดข้อมูลภาพตัวอย่างแล้ว โค้ดทำการแสดงภาพตัวอย่าง โดยใช้ matplotlib เพื่อแสดงภาพในรูปแบบตาราง ขนาดของรูปภาพตัวอย่างจะเป็น 5x3 และจะแสดงทั้งหมด 15 ภาพ
            </div>

          </div> 

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            สำหรับแต่ละภาพในการวนลูป โค้ดจะใช้ example_generator เพื่อดึงภาพและป้ายกำกับจากชุดข้อมูล โดยใช้ลูป for X_batch, Y_batch in example_generator: เพื่อเข้าถึงชุดข้อมูลทีละกลุ่มแบทช์ จากนั้นโค้ดจะเลือกภาพแรกจากกลุ่มแบทช์ (X_batch[0]) และใช้ plt.imshow เพื่อแสดงภาพที่ได้ เมื่อวนลูปเสร็จสิ้น โค้ดจะแสดงภาพตัวอย่างทั้งหมดในเลเยอร์เดียวกัน โดยมีขนาดรวมของเลเยอร์ที่แสดงอยู่ที่ 12x12 เมตริก
            </div>

          </div>    

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Output
            </div>
          </div>        

          <div style={{ display: 'flex' }}>
          <Image src={Imggen_img} width={700} height={700} alt="AIAT Logo" />

          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Library and function
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">plt.tight_layout()</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            ปรับห่างระยะห่างระหว่างภาพให้เหมาะสมกับการแสดงผล
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">plt.show()</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            แสดงภาพทั้งหมดในหน้าต่างกราฟิก
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
