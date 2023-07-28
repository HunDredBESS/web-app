"use client";
import React from "react";
import Image from "next/image";
import Lowercase from "public/NLP/Lowercase.png";
import Punctuation from "public/NLP/Punctuation.png";

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

          <p className="mt-4 leading-relaxed text-lg text-gray-200">
           ขั้นตอนนี้ทำเพื่อเตรียมข้อมูลให้พร้อมสำหรับการวิเคราะห์และการสร้างโมเดล รวมถึงการจัดการกับข้อมูลที่หายไป โดยวิธีเบื้องต้นมีดังนี้ ลบหรือแทนค่าข้อมูลที่หายไป จัดการกับข้อมูลผิดปกติ จัดรูปแบบข้อมูลให้สม่ำเสมอ จัดการกับข้อมูลที่ซ้ำซ้อน จัดการกับข้อมูลที่ไม่สมดุลกัน 
          </p>


          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
           จากที่ผมได้พูดไปในขั้นตอนก่อนหน้า ว่าชุดข้อมูลที่เรามีนั้นถูกแบ่งมาให้อย่างเท่าๆกันไม่มีหมวดไหนมากหรือน้อยเกินไป รวมถึงข้อมูลเองก็มีจำนวนมากพอ ทำให้เราไม่ต้องจัดการอะไรกับชุดข้อมูลที่มีมากนัก แต่ถึงอย่างนั้นก็ยังมีขั้นตอนการ preprocess เล็กๆน้อยๆสำหรับ Text Classification ที่ผมจะมาแนะนำ วิธีนี้สามารถช่วยให้โมเดลของเราเรียนรู้ได้ง่ายขึ้น โดยวิธีที่ใช้มีอยู่สองอย่างหลักๆดังนี้  
            </div>
          </div>  

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
           1.ปรับตัวอักษรทั้งหมดให้เป็นพิมพ์เล็ก (convert to lower case) 
            </div>
          </div>  

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={Lowercase} width={500} height={500} alt="Read file" />
          </div>

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
           2.นำพวกเครื่องหมายวรรคตอนต่างๆออก (remove punctuation)   
            </div>
          </div>  

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={Punctuation} width={500} height={500} alt="Read file" />
          </div>

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
           หมายเหตุ : ถ้าหาก data ที่เรามีนั้น clean อยู่แล้ว เราสามารถข้ามขั้นตอนตรงส่วนนี้ไปได้เลยครับ    
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
