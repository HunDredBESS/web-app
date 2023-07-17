"use client";
import React from "react";
import Image from "next/image";
import Numpy_img from "public/numpy_logo.png";
import Pandas_img from "public/pandas_logo.png";
import Matplotlib_img from "public/matplotlib_logo.png";
import Seaborn_img from "public/seaborn_logo.png";
import Sklearn_img from "public/sk-learn_logo.png";

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
              {/* basic libraries for data science in Python */}
              libraries พื้นฐานในงาน data science
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

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl ">numpy</div>
            <div className="h-auto text-lg ">
              เป็นไลบรารีที่มีความสามารถในการคำนวณทางตัวเลขอย่างมีประสิทธิภาพและมีประสิทธิภาพสูง
              numpy
              ช่วยให้เราสามารถดำเนินการกับอาร์เรย์และเมทริกซ์ขนาดใหญ่ได้อย่างมีประสิทธิภาพ
              นอกจากนี้ยังมีฟังก์ชันทางคณิตศาสตร์หลากหลายให้ใช้งานกับอาร์เรย์เหล่านี้อีกด้วย
              เช่น multi-dimensional arrays matrices และอื่น ๆ
              {/* A powerful library for numerical computing in Python. It provides
              support for large, multi-dimensional arrays and matrices, along
              with a wide range of mathematical functions to operate on these
              arrays efficiently. */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">pandas</div>
            <div className="h-auto text-lg ">
              ไลบรารีที่ทีความสามารถในการจัดการและวิเคราะห์ข้อมูลในภาษา python
              ซึ่งโครงสร้างข้อมูลที่อยู่ในรูปแบบตารางซึ่งช่วยให้งานด้านวิเคราะห์ข้อมูลเป็นเรื่องง่ายและมีประสิทธิภาพมากยิ่งขึ้น
              <br />
              โดย DataFrame
              เป็นโครงสร้างข้อมูลแบบตารางที่ใช้เก็บข้อมูลและเรียกดูข้อมูลในรูปแบบแถวและคอลัมน์
              ซึ่งให้ความสะดวกในการจัดการข้อมูลที่มีโครงสร้างที่ซับซ้อน เช่น
              การเพิ่มหรือลบข้อมูล การเข้าถึงข้อมูลในส่วนต่าง ๆ
              การจัดระเบียบและกรองข้อมูล
              รวมถึงการทำคำนวณและการรวมข้อมูลที่มีประสิทธิภาพ pandas
              ยังมีฟังก์ชันที่หลากหลายให้ใช้งาน เช่น
              การจัดการข้อมูลที่หายไปหรือซ้ำซ้อน
              การทำงานกับข้อมูลที่มีรูปแบบที่ซับซ้อน เช่น การแปลงข้อมูล
              การจัดการเวลา การจัดกลุ่มข้อมูล และการทำคำนวณทางสถิติ
              ซึ่งช่วยให้ผู้ใช้สามารถนำเสนอข้อมูลในรูปแบบที่มีความหมายและนำไปสู่การตัดสินใจที่มีเหตุผลได้อย่างมีประสิทธิภาพ
              {/* A popular library for data manipulation and analysis. It provides
              data structures like DataFrame, which is a tabular data structure,
              and Series, which is a one-dimensional labeled array. pandas
              offers a wide range of functions for data cleaning,
              transformation, and analysis. */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">matplotlib</div>
            <div className="h-auto text-lg ">
              ไลบรารีที่ใช้สำหรับการแสดงผลข้อมูลในรูปแบบกราฟใน python
              เป็นไลบรารีที่มีความสามารถในการสร้างกราฟที่หลากหลายด้วยรูปแบบต่าง
              ๆ เช่น กราฟเส้น กราฟแท่ง กราฟแบบกระจาย ฮิสโตแกรม และอื่น ๆ
              โดยมีความยืดหยุ่นที่ให้สามารถปรับแต่งและกำหนดรายละเอียดต่าง ๆ
              ของกราฟได้ตามต้องการ เช่น labels titles colors colors
              และลักษณะอื่น ๆ
              {/* A widely used library for data visualization in Python. It
              provides a variety of plot types, including line plots, bar plots,
              scatter plots, histograms, and more. matplotlib allows
              customization of plots with labels, titles, colors, and styles. */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-xl">Seaborn</div>
            <div className="h-auto text-lg ">
              ไลบรารีการแสดงผลข้อมูลที่พัฒนาขึ้นบน matplotlib โดย Seaborn
              ให้ส่วนต่อส่วนระดับสูงสำหรับสร้างกราฟทางสถิติที่น่าสนใจและสวยงาม
              มันมีฟังก์ชันที่ใช้สำหรับการแสดงผลความสัมพันธ์ระหว่างตัวแปร
              การกระจายข้อมูล(distributions) และข้อมูลทางหมวดหมู่(categorical data) 
              
              {/* A data visualization library based on matplotlib. Seaborn provides
              a high-level interface for creating attractive and informative
              statistical graphics. It offers functions for visualizing
              relationships between variables, distributions, and categorical data. */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-1 my-3 mx-10 px-8 leading-relaxed text-gray-200">
            <div className="h-auto text-xl">scikit-learn</div>
            <div className="h-auto text-lg ">
              scikit-learn
              เป็นไลบรารีที่ครอบคลุมและทันสมัยสำหรับ machine learning ใน python
              มันให้เครื่องมือที่หลากหลายสำหรับการเรียนรู้แบบ supervised และ unsupervised learning
              เช่น การสร้างโมเดลการทำนาย การจัดกลุ่ม การแบ่งกลุ่ม
              และการลดมิติข้อมูล(pca) 
              
              {/* A comprehensive library for machine learning in Python. It offers
              a variety of supervised and unsupervised learning algorithms, such
              as regression, classification, clustering, and dimensionality
              reduction. scikit-learn also provides tools for model evaluation
              and selection. */}
            </div>
          </div>
          <div className=" flex flex-row justify-center h-20">
            <Image src={Numpy_img} width={90} height={80} alt="numpy Logo" />
            <Image src={Pandas_img} width={150} height={80} alt="pandas Logo" />
            <Image
              src={Matplotlib_img}
              width={180}
              height={80}
              alt="matplotlib Logo"
            />
            <Image
              src={Seaborn_img}
              width={90}
              height={80}
              alt="seaborn Logo"
            />
            <Image
              src={Sklearn_img}
              width={150}
              height={80}
              alt="sklearn Logo"
            />
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
