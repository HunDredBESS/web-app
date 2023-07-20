"use client";
import React from "react";
import Image from "next/image";
import Dataset_img from "public/datascience/titanic-train01.png";

type Props = {};

function detail_datacoll({}: Props) {
  return (
    <>
      <div className="space-y-4">
        <details
          className="group border-s-4 border-green-500 p-6 bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
              Data Collection
            </h2>

            <span className="shrink-0 rounded-full p-1.5  bg-gray-800 text-white sm:p-3">
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

          <p className="mt-4 leading-relaxed text-xl text-gray-200">
            เป็นขั้นตอนสำคัญใน data science
            นักวิทยาศาสตร์ข้อมูลรวบรวมข้อมูลจากแหล่งต่าง ๆ เช่น การสำรวจ,
            แบบสอบถาม, web scraping, APIs, ชุดข้อมูลสาธารณะ, เซ็นเซอร์,
            ฐานข้อมูล, และการทดลอง
            การสำรวจและแบบสอบถามใช้สำหรับข้อมูลความเห็นหรือข้อมูลเชิงบุคคล
            การสกัดข้อมูลจากเว็บไซต์ใช้ในการเก็บข้อมูลจากเว็บไซต์ APIs
            ใช้ในการเรียกใช้ข้อมูลจากแหล่งต่าง ๆ และยังมีการใช้ชุดข้อมูลสาธารณะ
            เซ็นเซอร์ ฐานข้อมูลและการทดลองเพื่อสะสมข้อมูลและวิเคราะห์
            การสะสมข้อมูลเป็นขั้นตอนสำคัญในการตรวจสอบและพัฒนาการแก้ไขปัญหาในวิทยาศาสตร์ข้อมูล
            {/* Data collection is a crucial step in the data science process. Data
            scientists gather relevant data from various sources such as
            surveys, questionnaires, web scraping, APIs, publicly available
            datasets, sensor data, existing databases, and experimental data.
            Surveys and questionnaires are useful for collecting subjective or
            opinion-based information */}
          </p>
          <br />
          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[200px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">ตัวอย่าง Titanic Dataset</div>
            <div className="h-auto text-xl ">
              <a
                href="https://www.kaggle.com/competitions/titanic/"
                className="text-blue-300 hover:text-blue-600"
                target="_blank"
              >
                https://www.kaggle.com/competitions/titanic/
              </a>
            </div>
          </div>
          <p className="mt-4 leading-relaxed text-xl text-gray-200">
            ผู้เรียนสามารถดาวน์โหลด dataset จาก kaggle แล้วมาลองเล่นกัน
          </p>
          <div className=" flex flex-row justify-center h-auto">
            <Image
              src={Dataset_img}
              width={800}
              height={80}
              alt="dataset img"
            />
          </div>
        </details>
      </div>
    </>
  );
}

export default detail_datacoll;
