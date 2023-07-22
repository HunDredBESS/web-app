"use client";
import React from "react";
import Image from "next/image";
import Barval_img from "public/NLP/barval.jpg";
import Dftest from "public//NLP/Df-test.png";
import Pretest from "public/NLP/Preprocess-test.png";
import Prediction from "public/NLP/Prediction.png";

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
            Prediction

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
            ก่อนอื่นเราก็ต้องสร้าง dataframe ของชุดเทสขึ้นมาก่อน
            </div>
          </div>      

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={Dftest} width={900} height={900} alt="Read file" />
          </div>

          <div className="lg:gap-7 my-5 mx-0 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg ">
            จากนั้นก็ทำการ preprocess/cleaning ข้อมูลชุดเทส (เนื่องจากเรา preprocess ชุดข้อมูลก่อนเทรน เพราะฉะนั้นโมเดลที่เราเทรนเรียนรู้จากข้อมูลที่ clean แล้ว ดังนั้นการจะนำโมเดลที่เราเทรนมาใช้ เพื่อให้ได้ประสิทธิภาพดีสุด ข้อมูลชุดเทสก็ควรจะเป็นข้อมูลรูปแบบเดียวกับที่ใช้เทรน เราเลยต้องทำการ preprocess ข้อมูลชุดเทสด้วย โดยจะใช้วิธีการเดียวกันกับที่ทำตอน preprocess ข้อมูลชุดเทรน) 
            </div>
          </div>   

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={Pretest} width={900} height={900} alt="Read file" />
          </div>

          <div className="lg:gap-7 my-5 mx-0 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg ">
            เมื่อทำ 2 ขั้นตอนข้างต้นครบแล้ว ต่อไปก็เป็นส่วนของการ prediction โดยเราสามารถนำตัว dataframe ของชุดเทสไปใส่ในตัวโมเดลที่เราเทรนมาได้เลย โดยใช้คำสั่ง โมเดล.predict(dataframe ชุดเทส['ชื่อ column ที่จะ predict']) 
            </div>
          </div>   

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={Prediction} width={900} height={900} alt="Read file" />
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
