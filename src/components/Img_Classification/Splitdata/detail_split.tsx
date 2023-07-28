"use client";
import React from "react";
import Image from "next/image";
import Model_img from "public/model.jpg";


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
            6. การแบ่งชุดข้อมูล

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
            ขั้นตอนนี้จะเป็นการแบ่งชุดข้อออกเป็น 2 ส่วน ได้แก่ Training set และ Validation set โดยที่จะใช้คำสั่ง train_test_split ในการแบ่ง
            </div>

          </div>     

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Library and function
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl">train_test_split</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นฟังก์ชันที่ใช้ในการแบ่งชุดข้อมูลเป็นชุดข้อมูลฝึกสอน (training set) และชุดข้อมูลทดสอบ (test set) เพื่อใช้ในการประเมินประสิทธิภาพของโมเดลประสาทเทียม (neural network) หรือโมเดลเรียนรู้อื่น ๆ
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">test_size=0.20</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นการแบ่งข้อมูลทดสอบออกจากชุดข้อมูลในสัดส่วน 20%
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">random_state</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เพื่อให้การแบ่งชุดข้อมูลเป็นแบบสุ่มเหมือนกันทุกครั้งที่ทำการรันโค้ดนี้
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">reset_index(drop=True)</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นวิธีที่ใช้ในการรีเซ็ตดัชนีของแถวใน DataFrame เพื่อให้ดัชนีของแถวเริ่มต้นที่ 0 และลบดัชนีเดิมของแถวออก เมื่อใช้ drop=True ค่าดัชนีเดิมของแถวจะถูกลบออกและไม่ถูกเก็บไว้ในคอลัมน์ใด ๆ ใน DataFrame ใหม่ที่ได้รับการรีเซ็ต
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
