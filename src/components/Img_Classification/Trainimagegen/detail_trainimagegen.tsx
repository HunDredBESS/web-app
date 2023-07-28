"use client";
import React from "react";
import Image from "next/image";
import Barval_img from "public/barval.jpg";


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
            9. การปรับแต่งข้อมูลภาพของชุด Train

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

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            โค้ดนี้ใช้สำหรับการปรับแต่งข้อมูลภาพเพื่อการฝึกสอนโมเดลปัญญาประดิษฐ์ด้วย Keras ในการจัดการกับชุดข้อมูลรูปภาพที่ใช้สำหรับการฝึกสอนโมเดล โดยใช้ ImageDataGenerator จากไลบรารี keras.preprocessing.image เป็นเครื่องมือในการสร้างชุดข้อมูลภาพที่ถูกปรับแต่ง.
            </div>

          </div>     

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            เมื่อกำหนดค่า ImageDataGenerator เสร็จสิ้น จะสร้าง train_generator โดยใช้เมธอด flow_from_dataframe เพื่อสร้างชุดข้อมูลภาพจาก DataFrame ที่มีข้อมูลการฝึกสอน (train_df) โดยไดเร็กทอรี่ที่เก็บรูปภาพ ("D:/dogcatpanda/dogcatpanda/animals/datasets/train/") และระบุคอลัมน์ที่เกี่ยวข้องกับชื่อไฟล์ภาพ (x_col='namefile') และคอลัมน์ที่เกี่ยวข้องกับหมวดหมู่ (y_col='category') รวมถึงระบุขนาดภาพเป้าหมาย (target_size=IMAGE_SIZE) และโหมดการแบ่งกลุ่มข้อมูลเป็นหมวดหมู่ (class_mode='categorical') รวมถึงระบุขนาดแบตช์ (batch_size) ที่จะนำเข้าสู่โมเดลสอนในแต่ละครั้ง
            </div>

          </div>        

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Library and function
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl">ImageDataGenerator</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นคลาสใน Keras ที่ใช้สำหรับการเพิ่มความหลากหลายและปรับแต่งชุดข้อมูลภาพในการฝึกสอนโมเดลปัญญาประดิษฐ์ เพื่อเพิ่มประสิทธิภาพและประสิทธิผลของโมเดลที่ได้รับการฝึกสอน สามารถทำการสร้างชุดข้อมูลภาพที่ปรับแต่งได้โดยการใช้เทคนิคต่างๆ เช่นการหมุนภาพ, การปรับขนาดภาพ, การสลับภาพแนวนอนหรือแนวตั้ง, การเพิ่มเติมภาพเพิ่มเข้าไป เป็นต้น
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">rotation_range=15</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            กำหนดระดับการหมุนภาพในช่วง -15 ถึง +15 องศา
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">rescale=1./255</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            กำหนดการปรับขนาดค่าความสว่างของภาพให้อยู่ในช่วง 0-1
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">shear_range=0.1</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            กำหนดระดับการเอียงภาพในช่วง -0.1 ถึง +0.1
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">zoom_range=0.2</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            กำหนดระดับการซูมภาพในช่วง 0.8-1.2
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">horizontal_flip=True</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เปลี่ยนเส้นฉากในภาพเพื่อสร้างภาพที่พลิกแนวนอน
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">width_shift_range=0.1</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            กำหนดระดับการเลื่อนภาพในแนวนอนในช่วง -0.1 ถึง +0.1
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">height_shift_range=0.1</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            กำหนดระดับการเลื่อนภาพในแนวตั้งในช่วง -0.1 ถึง +0.1
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
