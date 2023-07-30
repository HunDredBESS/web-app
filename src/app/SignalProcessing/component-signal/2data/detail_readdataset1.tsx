"use client";
import React from "react";
import Image from "next/image";

import Head from "public/signal/head.png";
import Tail from "public/signal/tail.png";

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
               DATASET
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
            Dataset ของ Signal จะเป็นนามสกุล .npy (ไฟล์ NPY เป็นไฟล์อาร์เรย์ NumPy ที่สร้างโดยชุดซอฟต์แวร์ Python ที่ติดตั้งไลบรารี NumPy ไว้ มันมีอาร์เรย์ที่บันทึกในรูปแบบไฟล์ NumPy (NPY) ไฟล์ NPY เก็บข้อมูลทั้งหมดที่จำเป็นในการสร้างอาร์เรย์ใหม่บนคอมพิวเตอร์เครื่องใดก็ได้ซึ่งรวมถึงข้อมูลชนิดและรูปร่าง)
            โดยในงานClassification signal ของหนูจะเเปลง Data ที่อยู่ในรูปเเบบอาร์เรย์เป็นรูปภาพเพื่อง่ายต่อการให้โมเดลเรียนรู้
          </p>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
              {/* basic libraries for data science in Python */}
              Libarary and funtion
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

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">pandas</div>
            <div className="h-auto text-lg ">
              ไลบรารีที่ทีความสามารถในการจัดการและวิเคราะห์ข้อมูลในภาษา python
              ซึ่งโครงสร้างข้อมูลที่อยู่ในรูปแบบตารางซึ่งช่วยให้งานด้านวิเคราะห์ข้อมูลเป็นเรื่องง่ายและมีประสิทธิภาพมากยิ่งขึ้น
              <br />
              โดย DataFrame
              เป็นโครงสร้างข้อมูลแบบตารางที่ใช้เก็บข้อมูลและเรียกดูข้อมูลในรูปแบบแถวและคอลัมน์
              ซึ่งให้ความสะดวกในการจัดการข้อมูลที่มีโครงสร้างที่ซับซ้อน เช่น
              การเพิ่มหรือลบข้อมูล การเข้าถึงข้อมูลในส่วนต่าง ๆ
              การจัดระเบียบและกรองข้อมูล
              รวมถึงการทำคำนวณและการรวมข้อมูลที่มีประสิทธิภาพ pandas
              ยังมีฟังก์ชันที่หลากหลายให้ใช้งาน เช่น
              การจัดการข้อมูลที่หายไปหรือซ้ำซ้อน
              การทำงานกับข้อมูลที่มีรูปแบบที่ซับซ้อน เช่น การแปลงข้อมูล
              การจัดการเวลา การจัดกลุ่มข้อมูล และการทำคำนวณทางสถิติ
              ซึ่งช่วยให้ผู้ใช้สามารถนำเสนอข้อมูลในรูปแบบที่มีความหมายและนำไปสู่การตัดสินใจที่มีเหตุผลได้อย่างมีประสิทธิภาพ
              {/* A popular library for data manipulation and analysis. It provides
              data structures like DataFrame, which is a tabular data structure,
              and Series, which is a one-dimensional labeled array. pandas
              offers a wide range of functions for data cleaning,
              transformation, and analysis. */}
            </div>
          </div>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
               Output
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
            สามารถพิมพ์คำสั่ง df.head() เพื่อแสดงข้อมูลส่วนบน และคำสั่ง df.tale() เพื่อแสดงข้อมูลส่วนล่าง ดังรูปด้านล่าง
          </p>
          <br />
          <div className=" flex flex-row  justify-center h-auto">
                <Image
                  src={Head}
                  width={400}
                  height={400}
                  alt="cat"
                />
                
                                <Image
                  src={Tail}
                  width={400}
                  height={400}
                  alt="cat1"
                />
              </div>

        </details>
        
      </div>
    </>
  );
}
