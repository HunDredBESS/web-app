"use client";
import React from "react";
import Image from "next/image";
import Dog_img from "public/Img_classification/dog1.jpg";
import Cat_img from "public/Img_classification/cat.jpg";
import Panda_img from "public/Img_classification/panda.jpg";
import Dfhead_img from "public/Img_classification/dfhead.jpg";
import Dftale_img from "public/Img_classification/dftale.jpg";

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
            1. คำอธิบายและการติดป้ายกำกับของชุดข้อมูล

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
            ผู้เรียนสามารถดาวน์โหลด Dataset ได้จากลิ้งค์นี้ : https://drive.google.com/file/d/14bbfMiyD9FFGxysXzddrl9hTJwPCt_KY/view?usp=sharing
            </div>

          </div>     

          <div className=" lg:gap-1 my-3 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            เมื่อดาวน์โหลด Dataset มาแล้ว ให้ทำการแตกไฟล์ ไฟล์รูปของชุดข้อมูลชุดนี้อยู่ที่ : \dogcatpanda\dogcatpanda\animals\datasets
            </div>
          </div>     

          <div className=" lg:gap-1 my-3 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            ภายในโฟลเดอร์ dataset จะประกอบไปด้วยโฟลเดอร์ย่อย 2 โฟลเดอร์คือ train และ test ซึ่งภายในโฟลเดอร์ train จะมีรูปภาพ 480 รูป แบ่งเป็น สุนัข, แมว, และหมีแพนด้า อย่างละ 160 รูป และภายในโฟลเดอร์ test จะมีรูปภาพ 120 รูป แบ่งเป็น สุนัข, แมว, และหมีแพนด้า อย่างละ 40 รูป
            </div>
          </div>

          <div style={{ display: 'flex' }}>
          <Image src={Dog_img} width={400} height={400} alt="AIAT Logo" />
          <Image src={Cat_img} width={400} height={400} alt="AIAT Logo" />
          <Image src={Panda_img} width={400} height={400} alt="AIAT Logo" />
          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Library and function
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">pandas</div>
            <div className="h-auto text-lg ">
            เป็นไลบรารีภาษา Python ที่ถูกสร้างขึ้นมาเพื่อการจัดการและวิเคราะห์ข้อมูลตาราง (tabular data) อย่างง่ายดายและมีประสิทธิภาพสูง โดยใช้โครงสร้างข้อมูลที่เรียกว่า “DataFrame” เพื่อเก็บข้อมูลและปฏิบัติการทางตารางได้อย่างมีประสิทธิภาพ  ปัจจุบัน pandas เป็น open source ให้ทุกคนสามารถใช้ได้แบบฟรี ๆ
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">os</div>
            <div className="h-auto text-lg ">
            os เป็น library ที่เก็บรวมรวบชุดคำสั่งต่างๆ ที่ใช้ทำงานกับ OS ในเครื่องของเรา ที่มีคำสั่งพื้นฐานในการจัดการกับไฟล์หรือโฟลเดอร์ที่เราต้องการได้ ไม่ว่าจะย้าย บันทึก เปลี่ยนชื่อ หรือลบไฟล์หรือโฟลเดอร์ที่ต้องการ
            </div>
          </div>


          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">.listdir()</div>
            <div className="h-auto text-lg ">
            คำสั่ง .listdir() จะสร้าง list ของชื่อไฟล์ใน directory ที่กำหนด ออกมาเป็น list ของ string โดยเราสามารถกำหนด directory ที่สนใจได้โดยการระบุเป็น string ระหว่าง () หากไม่ระบุจะเข้าไปดูในโฟลเดอร์ปัจจุบัน
            </div>
          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Output
            </div>
          </div>

          <div className=" lg:gap-1 my-3 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            สามารถพิมพ์คำสั่ง df.head() เพื่อแสดงข้อมูลส่วนบน และคำสั่ง df.tale() เพื่อแสดงข้อมูลส่วนล่าง ดังรูปด้านล่าง
            </div>
          </div>

          <div style={{ display: 'flex' }}>
          <Image src={Dfhead_img} width={400} height={400} alt="AIAT Logo" />
          <Image src={Dftale_img} width={400} height={400} alt="AIAT Logo" />
          
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
