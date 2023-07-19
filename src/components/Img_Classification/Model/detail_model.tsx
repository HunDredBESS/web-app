"use client";
import React from "react";
import Image from "next/image";
import Model_img from "public/Img_classification/model.jpg";


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
            4. การเรียกใช้โมเดลแบบ Transfer learning

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
            Transfer learning คือกระบวนการที่ใช้โมเดลการเรียนรู้เชิงลึก (deep learning) ที่ถูกฝึกสอนมาก่อนแล้ว ใช้ในงานการเรียนรู้หรืองานที่แตกต่างกัน โดยโมเดลที่ถูกฝึกสอนมาก่อนนั้นมักจะเป็นโมเดลที่ฝึกสอนด้วยข้อมูลใหญ่และซับซ้อน เช่น เครือข่ายประสาทคอนโวลูชัน (Convolutional Neural Network) ที่ถูกฝึกสอนด้วยภาพทั่วไป
            </div>

          </div>     

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            โมเดล Transfer learning ที่ใช้ในตัวอย่างนี้คือ DenseNet201 ที่ถูกเทรนบน weights 'Imagenet'
            </div>
          </div> 

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            การสร้างและปรับแต่งโมเดล DenseNet201 มีขั้นตอนดังนี้
            </div>
          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            1.   เริ่มต้นด้วยการนำเข้าไลบรารีที่จำเป็นสำหรับการสร้างและฝึกสอนโมเดล เช่น keras.models, keras.layers, keras.applications.densenet, และ tensorflow เพื่อใช้งานฟังก์ชันและคลาสที่เกี่ยวข้องกับการสร้างและการจัดการโมเดลประสาทเทียม
            </div>
          </div> 

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            2.   กำหนดค่าตัวแปรที่ใช้ในโค้ด เช่นจำนวนชั้นของคลาส (number_of_class), ขนาดภาพ (IMAGE_WIDTH, IMAGE_HEIGHT), จำนวนช่องสีของภาพ (IMAGE_CHANNELS)
            </div>
          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            3.   โมเดล DenseNet201 ที่ถูกนำเข้ามาจาก keras.applications.densenet.DenseNet201 มีการกำหนดพารามิเตอร์ในการสร้างโมเดลเชิงลึก เช่น รูปร่างของข้อมูลนำเข้า (input_shape) โดยที่ไม่รวมชั้นสุดท้ายของโมเดล (include_top=False) และน้ำหนักที่ถูกเรียนรู้ก่อนหน้านี้ (weights='imagenet')
            </div>
          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            4.   สร้างโมเดลสำหรับการจัดการโมเดลประสาทเทียม:
โมเดลที่จัดการ (model) เป็น Sequential model ที่ประกอบด้วยลำดับของเลเยอร์ เริ่มต้นด้วยโมเดล DenseNet201 base model ที่ได้สร้างไว้ และต่อด้วยเลเยอร์ GlobalAveragePooling2D เพื่อเปลี่ยนข้อมูลจากรูปร่างที่เป็นเชิงพื้นฐานเป็นรูปร่างที่เป็นเวกเตอร์ จากนั้นเพิ่มเลเยอร์ Dense ที่มีหน่วยความจำ 64, ฟังก์ชัน activation เป็น relu, เลเยอร์ BatchNormalization เพื่อปรับปรุงประสิทธิภาพของโมเดล และเลเยอร์ Dropout เพื่อลดการเกิดการเรียนรู้เกินไป โดยกระบวนการเดียวกันถูกทำซ้ำเพื่อเพิ่มความซับซ้อนของโมเดล สุดท้ายเพิ่มเลเยอร์ Dense ที่มีหน่วยความจำ 32, ฟังก์ชัน activation เป็น relu, เลเยอร์ BatchNormalization, เลเยอร์ Dropout, และเลเยอร์ Dense สุดท้ายที่มีฟังก์ชัน activation เป็น softmax เพื่อให้ผลลัพธ์ของโมเดลเป็นค่าความน่าจะเป็นของแต่ละคลาส
            </div>
          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            5.   กำหนด optimizer, loss function, และ metrics:
ในส่วนนี้กำหนด optimizer เป็น Adam optimizer และ learning rate เท่ากับ 0.0001, และกำหนด loss function เป็น categorical_crossentropy (ใช้สำหรับงานที่มีหลายคลาส) และกำหนด metrics เพื่อวัดประสิทธิภาพของโมเดล เช่น accuracy, precision, และ recall
            </div>
          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-gray-200">           
            <div className="h-auto text-lg ">
            6.   สรุปสถานะของโมเดล:
ใช้ฟังก์ชัน model.summary() เพื่อแสดงสรุปสถานะของโมเดลที่สร้างขึ้น ซึ่งรวมถึงข้อมูลเชิงสถิติเกี่ยวกับจำนวนพารามิเตอร์และชั้นของโมเดล
            </div>
          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Output
            </div>
          </div>        

          <div style={{ display: 'flex' }}>
          <Image src={Model_img} width={700} height={700} alt="AIAT Logo" />

          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Library and function
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">from keras.models import Sequential</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นการนำเข้าคลาส Sequential จากไลบรารี Keras เพื่อใช้ในการสร้างโมเดลประสาทเทียมแบบลำดับ (Sequential Neural Network) ในโปรแกรม Python
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">GlobalAveragePooling2D()</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นเลเยอร์ที่ใช้ในโครงสร้างของโมเดลประสาทเทียม (neural network) เพื่อเปลี่ยนข้อมูลจากรูปร่างที่เป็นเชิงพื้นฐาน (spatial) เป็นรูปร่างที่เป็นเวกเตอร์ (vector) โดยหาค่าเฉลี่ยของข้อมูลในแต่ละช่อง (channel) ของภาพ และส่งออกเป็นเวกเตอร์เดียวกันสำหรับทุกช่องข้อมูล
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">Dense()</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นเลเยอร์ที่ใช้ในการสร้างเลเยอร์ที่เชื่อมต่อแบบเต็ม (fully connected layer) ในโมเดลประสาทเทียม ซึ่งเป็นเลเยอร์ที่ทุกๆ โหนดในเลเยอร์ก่อนหน้านี้จะเชื่อมต่อกับโหนดทุกๆ โหนด
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">BatchNormalization()</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นเลเยอร์ที่ใช้ในโครงสร้างของโมเดลประสาทเทียม (neural network) เพื่อปรับปรุงประสิทธิภาพและการเทรนโมเดล โดยการปรับปรุงการกระจายค่าข้อมูลในแต่ละชั้นของโมเดล เพื่อให้ค่าเฉลี่ยของข้อมูลในแต่ละชั้นมีค่าใกล้เคียงกันและค่าส่วนเบี่ยงเบนมาตรฐานเป็นไปในทิศทางเดียวกัน
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">Dropout()</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นเลเยอร์ที่ใช้ในโครงสร้างของโมเดลประสาทเทียม (neural network) เพื่อลดการเกิดการเรียนรู้เกินไป (overfitting) ในกระบวนการเทรนโมเดล โดยการประยุกต์ใช้การสุ่มลบบางความสัมพันธ์ระหว่างโหนดในเลเยอร์ที่เลือก ซึ่งจะช่วยในการป้องกันและลดการเรียนรู้ที่ผิดปกติที่อาจเกิดขึ้นในข้อมูลการฝึกสอน
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
