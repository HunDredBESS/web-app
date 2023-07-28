"use client";
import React from "react";
import Image from "next/image";
import Numpy_img from "public/NLP/numpy_logo.png";
import Pandas_img from "public/NLP/pandas_logo.png";
import Matplotlib_img from "public/NLP/matplotlib_logo.png";
// import Seaborn_img from "public/seaborn_logo.png";
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
              Import Data / Libraries
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

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg ">
            ชุดข้อมูลที่จะนำมาเป็นตัวอย่างนี้เป็นชุดข้อมูลที่ได้จากโจทย์ Hackathon โครงการ Super AI ของทาง AIAT ครับ
            </div>
          </div>   

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">โดยผู้เรียนสามารถดาวน์โหลด Dataset ได้จากลิ้งค์นี้ : </div>
            <div className="h-auto text-lg ">
              <a
                href="https://www.kaggle.com/competitions/hackathon-online-nlu-intent-classification/data"
                className="text-blue-300 hover:text-blue-600"
                target="_blank"
              >
                https://www.kaggle.com/competitions/hackathon-online-nlu-intent-classification/data
              </a>
            </div>
          </div>

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            เมื่อมี dataset เรียบร้อยแล้วต่อไปก็จะเป็นขั้นตอนของการ import libraries ที่จำเป็นต้องใช้ โดยไลบรารีหลักๆที่ผมเลือกมาใช้สำหรับโจทย์ Text Classification โจทย์นี้มีดังต่อไปนี้
            </div>
          </div>  

          <div className="lg:gap-1 my-7 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Library and function
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">pandas</div>
            <div className="h-auto text-lg ">
            เป็นไลบรารีภาษา Python ที่ถูกสร้างขึ้นมาเพื่อการจัดการและวิเคราะห์ข้อมูลตารางอย่างง่ายดายและมีประสิทธิภาพสูง โดยใช้โครงสร้างข้อมูลที่เรียกว่า “DataFrame” เพื่อเก็บข้อมูลและปฏิบัติการทางตารางได้อย่างมีประสิทธิภาพ
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">matplotlib</div>
            <div className="h-auto text-lg ">
            เป็นไลบรารีที่ใช้สำหรับการแสดงผลข้อมูลในรูปแบบกราฟใน python เป็นไลบรารีที่มีความสามารถในการสร้างกราฟที่หลากหลายด้วยรูปแบบต่าง ๆ เช่น กราฟเส้น กราฟแท่ง กราฟแบบกระจาย ฮิสโตแกรม และอื่น ๆ โดยมีความยืดหยุ่นที่ให้สามารถปรับแต่งและกำหนดรายละเอียดต่าง ๆ ของกราฟได้ตามต้องการ เช่น labels titles colors และลักษณะอื่น ๆ
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed text-gray-200">
            <div className="h-auto text-xl">scikit-learn</div>
            <div className="h-auto text-lg ">
            เป็นไลบรารีที่ครอบคลุมและทันสมัยสำหรับ machine learning ใน python มีเครื่องมือที่หลากหลายสำหรับการเรียนรู้แบบ supervised และ unsupervised learning เช่น การสร้างโมเดลการทำนาย การจัดกลุ่ม การแบ่งกลุ่ม และการลดมิติข้อมูล(pca)
            </div>
          </div>
          <div className=" flex flex-row justify-center h-20">
            <Image src={Pandas_img} width={150} height={80} alt="pandas Logo" />
            <Image src={Matplotlib_img} width={180} height={80} alt="matplotlib Logo" />
            <Image src={Sklearn_img} width={150} height={80} alt="sklearn Logo" />


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
