"use client";
import React from "react";
import Image from "next/image";
import Numpy_img from "public/numpy_logo.png";
import Readfile_img from "public/NLP/read_file.png";
import Countintent_img from "public/NLP/Count_intent.png";
import Piechart_img from "public/NLP/Pie_chart.png";
import Sklearn_img from "public/NLP/sk-learn_logo.png";


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
              EDA (Exploratory Data Analysis)
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
            EDA คือกระบวนการตรวจสอบและสำรวจข้อมูลเบื้องต้น เป็นการวิเคราะห์ข้อมูลที่จำเป็นก่อนการนำข้อมูลไปใช้หรือนำไปวิเคราะห์เชิงลึก โดยประโยชน์ของการทำ EDA จะช่วยทำให้เราเข้าใจพื้นฐานเกี่ยวกับข้อมูลชุดนั้นและเป็นการตรวจความผิดพลาดของชุดข้อมูลได้อีกด้วย 
            </div>
          </div>   

          <div className="lg:gap-7 my-5 mx-0 px-8 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            ในที่นี้เราจะเริ่มจากการอ่านไฟล์ข้อมูลเพื่อดูภาพรวมข้อมูล โดยใช้คำสั่ง pd.read_json('ชื่อไฟล์') 
            </div>
          </div>  

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={Readfile_img} width={800} height={800} alt="Read file" />
          </div>

          <div className="lg:gap-1 my-5 mx-0 px-8 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            จากนั้น check ข้อมูลใน column - intent เพื่อเช็คว่าประเภทแยกย่อยของตัว intent แต่ละอันมีข้อมูลเท่าไร โดยใช้คำสั่ง .value_counts('ชื่อ column')
            </div>
          </div>  

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={Countintent_img} width={800} height={800} alt="Count intent" />
          </div>

          <div className="lg:gap-1 my-5 mx-0 px-8 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            จากนั้น plot ออกมาเป็น pie chart เพื่อให้เห็นภาพรวมข้อมูลในหมวด intent ได้ชัดเจนขึ้นเพื่อดูว่าจะจัดการยังไงต่อไป ทั้งนี้ตรงส่วนนี้สามารถ plot เป็น bar chart ได้เช่นกัน
            </div>
          </div>  

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={Piechart_img} width={800} height={800} alt="Pie chart" />
          </div>

          <div className="lg:gap-1 my-5 mx-0 px-8 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            จากข้อมูลชุดนี้จะเห็นได้ว่าข้อมูลถูกแบ่งมาให้อย่างเท่าๆกันไม่มีหมวดไหนมากหรือน้อยเกินไป รวมถึงข้อมูลเองก็มีจำนวนมากพอ ทำให้เราไม่ต้องจัดการอะไรกับชุดข้อมูลที่มีมากนัก 
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