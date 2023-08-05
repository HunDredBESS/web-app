"use client";
import React from "react";
import Image from "next/image";

import Train_img from "public/datascience/train_knn.png";
import Acc_img from "public/datascience/accuracy_knn.png";

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
              Train ด้วย K-Nearest Neighbors Algorithm
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

          <p className="mt-4 mx-3 leading-relaxed text-xl text-gray-200">
            เป็นวิธีที่ใช้ในการจัดแบ่งคลาส โดยเทคนิคนี้จะตัดสินใจว่า
            คลาสใดที่จะแทนเงื่อนไขหรือกรณีใหม่ๆ ได้บ้าง
            โดยการตรวจสอบจำนวนบางจำนวน ในขั้นตอนวิธีการเพื่อนบ้านใกล้ที่สุด
            ของกรณีหรือเงื่อนไขที่เหมือนกันหรือใกล้เคียงกันมากที่สุด
            โดยจะหาผลรวม (Count Up) ของจำนวนเงื่อนไข หรือกรณีต่างๆ
            สำหรับแต่ละคลาส และกำหนดเงื่อนไขใหม่ๆ
            ให้คลาสที่เหมือนกันกับคลาสที่ใกล้เคียงกันมากที่สุด
          </p>
          <ul className="mt-4 mx-3 leading-relaxed text-xl text-gray-200">
            <li> - K- Nearest Neighbor เป็นอัลกอลิทึ่มที่ใช้ในการจัดกลุ่มข้อมูล (Classification) ซึ่งเป็นอัลกอลิทึ่มที่อยู่ในกลุ่มของ Supervised learning </li>
            {/* <li>
              {" "}
              - ดูความสัมพันธ์ของข้อมูลระหว่างแต่ละช่วงอายุกับอัตราการรอดชีวิต{" "}
            </li>
            <li>
              - เปลี่ยนรูปแบบข้อมูลจากช่วงอายุ ให้เป็น ตัวเลขแบบ categories
              เพื่อให้ง่ายต่อการใช้งาน
            </li> */}
          </ul>
          <br />
          <div className=" flex flex-col md:flex-row gap-5 justify-center h-auto mx-3 leading-relaxed text-xl text-gray-200">
            <Image src={Train_img} width={300} height={350} alt="dataset img" />
            <Image src={Acc_img} width={350} height={350} alt="dataset img" />
          </div>
        </details>
      </div>
    </>
  );
}
