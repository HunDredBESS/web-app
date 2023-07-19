"use client";
import React from "react";
import Image from "next/image";
import Plotfittrainval_img from "public/Img_classification/plotfittrainval.jpg";


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
            13. กราฟแสดงผลของค่าสูญเสีย (loss) และความแม่นยำ (accuracy)หลังจากการเทรนโมเดล

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


          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Output
            </div>
          </div>        

          <div style={{ display: 'flex' }}>
          <Image src={Plotfittrainval_img} width={700} height={700} alt="AIAT Logo" />

          </div>

          <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Library and function
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">numpy</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            หรือ Numerical Python เป็นโมดูลสำหรับการคำนวณทางตัวเลขและการจัดการกับข้อมูลที่เกี่ยวข้องกับเมทริกซ์และอาเรย์ (arrays) ใน Python
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 12))</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            สร้างหน้าต่างกราฟแบบแผนภูมิเป็นรูปแบบแกนตั้ง 2 แถว และแกนนอน 1 คอลัมน์ โดยกำหนดขนาดของรูปแบบเป็น 12x12 หน่วย
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">train_generator</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เป็นตัวเตรียมข้อมูลสำหรับการฝึกโมเดล ที่ใช้ในการสร้างชุดตัวอย่างสำหรับการฝึกสอน
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">ax1.plot(history.history['loss'], color='b', label='Training loss')</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            วาดเส้นกราฟของค่าสูญเสียในข้อมูลฝึกสอน (training loss) โดยใช้ข้อมูลจาก history.history['loss'] โดยสีเส้นเป็นสีน้ำเงิน (blue) และใส่ชื่อตัวกราฟเป็น "Training loss".
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">ax1.plot(history.history['val_loss'], color='r', label='validation loss')</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            วาดเส้นกราฟของค่าสูญเสียในข้อมูลทดสอบ (validation loss) โดยใช้ข้อมูลจาก history.history['val_loss'] โดยสีเส้นเป็นสีแดง (red) และใส่ชื่อตัวกราฟเป็น "Validation loss".
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">ax1.set_xticks(np.arange(0, epochs, 10))</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            กำหนดแกน x ของกราฟให้แสดงตัวเลขบนแกน x ที่เป็นเลขจำนวนเต็มตั้งแต่ 0 ถึงจำนวนรอบการฝึก (epochs) โดยเพิ่มทีละ 10
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">ax1.set_yticks(np.arange(0, 1, 0.1))</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            กำหนดแกน y ของกราฟให้แสดงตัวเลขบนแกน y ที่เป็นเลขทศนิยมตั้งแต่ 0 ถึง 1 โดยเพิ่มทีละ 0.1.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">ax2.plot(history.history['acc'], color='b', label='Training accuracy')</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            วาดเส้นกราฟของความแม่นยำในข้อมูลฝึกสอน (training accuracy) โดยใช้ข้อมูลจาก history.history['acc'] โดยสีเส้นเป็นสีน้ำเงิน (blue) และใส่ชื่อตัวกราฟเป็น "Training accuracy".
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">ax2.plot(history.history['acc'], color='b', label='Training accuracy')</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            วาดเส้นกราฟของความแม่นยำในข้อมูลฝึกสอน (training accuracy) โดยใช้ข้อมูลจาก history.history['acc'] โดยสีเส้นเป็นสีน้ำเงิน (blue) และใส่ชื่อตัวกราฟเป็น "Training accuracy".
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">ax2.plot(history.history['val_acc'], color='r',label='Validation accuracy')</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            วาดเส้นกราฟของความแม่นยำในข้อมูลทดสอบ (validation accuracy) โดยใช้ข้อมูลจาก history.history['val_acc'] โดยสีเส้นเป็นสีแดง (red) และใส่ชื่อตัวกราฟเป็น "Validation accuracy".
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">ax2.set_xticks(np.arange(0, epochs, 10))</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            กำหนดแกน x ของกราฟให้แสดงตัวเลขบนแกน x ที่เป็นเลขจำนวนเต็มตั้งแต่ 0 ถึงจำนวนรอบการฝึก (epochs) โดยเพิ่มทีละ 10.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">legend = plt.legend(loc='best', shadow=True)</div>
            <div className="h-auto text-lg lg:gap-1 mx-10">
            เพิ่มสัญลักษณ์คำอธิบาย (legend) ของกราฟโดยกำหนดให้ปรากฏในตำแหน่งที่เหมาะสม (best) และมีเงา.
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
