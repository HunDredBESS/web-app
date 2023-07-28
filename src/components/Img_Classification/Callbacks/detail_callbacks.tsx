"use client";
import React from "react";
import Image from "next/image";
//import Model_img from "public/model.jpg";


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
            5. Callbacks

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
            Callbacks เป็นองค์ประกอบที่ใช้ในการตรวจสอบและควบคุมกระบวนการเทรนและการทดสอบของโมเดลประสาทเทียม (neural network) ในกระบวนการฝึกสอน หรือทำนายข้อมูล
            </div>

          </div>     

         

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Library and function
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl">EarlyStopping</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็น Callback ที่ใช้ในกระบวนการฝึกสอนโมเดลประสาทเทียม (neural network) เพื่อหยุดการฝึกสอนเมื่อไม่มีการปรับปรุงอีกต่อไป โดยตรวจสอบค่าสถานะที่กำหนดในระหว่างการฝึกสอน เช่นค่าสูญเสีย (loss) หรือค่าความแม่นยำ (accuracy) และหยุดการฝึกสอนเมื่อค่าสถานะไม่เกิดการเปลี่ยนแปลงตามที่กำหนดในระยะเวลาที่กำหนดไว้ล่วงหน้า (patience) ซึ่งช่วยลดการเกิดการเรียนรู้เกินไป (overfitting) และช่วยประหยัดเวลาในการฝึกสอนโมเดล
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">ReduceLROnPlateau</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็น Callback ที่ใช้ในกระบวนการฝึกสอนโมเดลประสาทเทียม (neural network) เพื่อลดอัตราการเรียนรู้ (learning rate) เมื่อค่าสถานะที่กำหนดไม่เกิดการปรับปรุง เช่นลด learning rate เมื่อค่าสูญเสียไม่ลดลงหรือค่าความแม่นยำไม่เพิ่มขึ้น
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">monitor='val_accuracy'</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นค่าที่ใช้ตรวจสอบความเปลี่ยนแปลงในค่าความแม่นยำในชุดข้อมูลทดสอบ (validation set) ในการฝึกสอนโมเดล ในที่นี้จะตรวจสอบค่าความแม่นยำในชุดทดสอบเพื่อตัดสินใจว่าจะลดอัตราการเรียนรู้หรือไม่
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">patience=2</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นจำนวนรอบการฝึกสอนที่ถ้าไม่มีการปรับปรุงในค่าความแม่นยำในชุดทดสอบตามเงื่อนไขที่กำหนด (monitor) จะทำการลดอัตราการเรียนรู้
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">verbose=1</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นการกำหนดระดับการแสดงผลเกี่ยวกับการลดอัตราการเรียนรู้ ในที่นี้เลือกให้แสดงผลข้อความบางส่วน
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">factor=0.5</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นตัวคูณที่ใช้ในการลด learning rate โดยการคูณอัตราการเรียนรู้ที่กำหนดในตอนแรกด้วยตัวคูณนี้
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:gap-1 my-3 mx-10 px-8 text-gray-200">
            <div className="h-auto text-xl ">min_lr=0.00001</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นอัตราการเรียนรู้ที่ต่ำสุดที่จะใช้ หากอัตราการเรียนรู้ลดลงแล้วแต่ยังไม่ได้ถึงอัตราการเรียนรู้ต่ำสุดที่กำหนด
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
