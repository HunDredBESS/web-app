"use client";
import React from "react";
import Image from "next/image";

import Head from "public/signal/s.png";
// import Tail from "public/signal/tail.png";

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
             Model
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
          
          <p className="mt-4 leading-relaxed text-lg text-gray-200">
            {/* การเขียนเว็บ
            <br /> */}
           ขอนำเสนอตัวyolov8 ป็นเวอร์ชันล่าสุดของ YOLO โดย Ultralytics ในฐานะที่เป็นโมเดลที่ทันสมัยและล้ำสมัย (SOTA) YOLOv8 สร้างขึ้นจากความสำเร็จของเวอร์ชันก่อนหน้า โดยนำเสนอคุณสมบัติใหม่และการปรับปรุงเพื่อประสิทธิภาพ ความยืดหยุ่น และประสิทธิภาพที่เพิ่มขึ้น YOLOv8 รองรับงาน AI การมองเห็นอย่างเต็มรูปแบบ รวมถึงการตรวจจับการแบ่งส่วน การ ประมาณท่าทางการติดตามและการจำแนกประเภท ความเก่งกาจนี้ช่วยให้ผู้ใช้สามารถใช้ประโยชน์จากความสามารถของ YOLOv8 ในแอปพลิเคชันและโดเมนที่หลากหลาย
          </p>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
              {/* basic libraries for data science in Python */}
              Parameter
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

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">epochs</div>
            <div className="h-auto text-lg ">
            การหาจำนวนที่เหมาะสม เป็นเรื่องปกติที่จะตรวจสอบประสิทธิภาพของโมเดลในชุดข้อมูลการตรวจสอบความถูกต้อง (ข้อมูลที่ไม่ได้ใช้ระหว่างการฝึก) และหยุดการฝึกเมื่อประสิทธิภาพเริ่มลดลง นี้มักจะประสบความสำเร็จ
              {/* A popular library for data manipulation and analysis. It provides
              data structures like DataFrame, which is a tabular data structure,
              and Series, which is a one-dimensional labeled array. pandas
              offers a wide range of functions for data cleaning,
              transformation, and analysis. */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">imgsz</div>
            <div className="h-auto text-lg ">
            เมื่อประมวลผลภาพล่วงหน้าก่อนที่จะใส่ลงในแบบจำลอง
              {/* A popular library for data manipulation and analysis. It provides
              data structures like DataFrame, which is a tabular data structure,
              and Series, which is a one-dimensional labeled array. pandas
              offers a wide range of functions for data cleaning,
              transformation, and analysis. */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">optimizer</div>
            <div className="h-auto text-lg ">
            เครื่องมือเพิ่มประสิทธิภาพทั่วไปบางตัวที่ใช้ในการเรียนรู้เชิงลึก
              {/* A popular library for data manipulation and analysis. It provides
              data structures like DataFrame, which is a tabular data structure,
              and Series, which is a one-dimensional labeled array. pandas
              offers a wide range of functions for data cleaning,
              transformation, and analysis. */}
            </div>
            </div>
            <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">patience</div>
            <div className="h-auto text-lg ">
            หยุดการสอน หากประสิทธิภาพของโมเดลในชุดการตรวจสอบความถูกต้องไม่ดีขึ้น 
              {/* A popular library for data manipulation and analysis. It provides
              data structures like DataFrame, which is a tabular data structure,
              and Series, which is a one-dimensional labeled array. pandas
              offers a wide range of functions for data cleaning,
              transformation, and analysis. */}
            </div>
            </div>
            <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">cos_lr</div>
            <div className="h-auto text-lg ">
            อัตราการเรียนรู้ของโมเดล
              {/* A popular library for data manipulation and analysis. It provides
              data structures like DataFrame, which is a tabular data structure,
              and Series, which is a one-dimensional labeled array. pandas
              offers a wide range of functions for data cleaning,
              transformation, and analysis. */}
            </div>
            </div>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
               {/* Output */}
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
          
          <p className="mt-4 leading-relaxed text-lg text-gray-200">
            {/* การเขียนเว็บ
            <br /> */}
            {/* ข้อมูลที่preprocessเเล้วเเปลงเป็นรูปภาพในเเต่ละคลาส */}
          </p>
          <br />
          <div className=" flex flex-row  justify-center h-auto">
                {/* <Image
                  src={Head}
                  width={600}
                  height={600}
                  alt="cat"
                /> */}
{/*                 
                                <Image
                  src={Tail}
                  width={400}
                  height={400}
                  alt="cat1" */}
                {/* /> */}
              </div>

        </details>
        
      </div>
    </>
  );
}
