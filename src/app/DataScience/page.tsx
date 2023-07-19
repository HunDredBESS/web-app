"use client";
import React from "react";
import ImportBox from "@/components/Data_Science/import_lib/Import";
import DataCollection from "@/components/Data_Science/DataCollection/Datacollection";
import DataCleaning from "@/components/Data_Science/DataCleaning/DataCleaning";
import Image from "next/image";

import Plot_img from "public/datascience/plot101.png";
import Corr_img from "public/datascience/corr101.png";
import Table_img from "public/datascience/table.png";

type Props = {};

export default function DataScience({}: Props) {
  return (
    <div className="">
      {/* <nav className='h-10 text-2xl text-white fixed w-full z-10 shadow-xl bg-black'>Data Science</nav> */}
      <div className="">
        <div className="box-border h-fit w-auto p-2 bg-slate-800 border-solid">
          {/* <div className="box-border h-fit w-auto p-2 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-solid"> */}
          <div className="text-4xl items-center box-border text-white pt-6 px-6">
            Data Science
          </div>

          <div className=" box w-full min-h-10 bg-gray-800 shadow-sm shadow-gray-600 rounded-lg mt-3 mb-10 p-5 text-2xl">
            {/* <h1 className="text-gray-200" >Data Science</h1> */}
            <div className="leading-relaxed text-white">
              <div className="h-auto text-lg ">
                <p>
                  Data Science
                  คือการศึกษาข้อมูลดิบที่ครอบคลุมด้วยการวิเคราะห์ข้อมูล
                  การขุดข้อมูลที่ผ่านการจัดระบบมาแล้ว ซึ่งจุดประสงค์หลัก Data
                  products ก็คือการตอบคำถามที่เกิดขึ้น
                  โดยที่ไม่ได้คำนึงถึงคำตอบที่เฉพาะเจาะจง
                  แต่จะมองไปที่ภาพรวมและหาจุดบกพร่องที่ควรได้รับการคำนึงถึงจากแหล่งข้อมูลที่สำรวจมาจากที่ต่าง
                  ๆ และพยายามค้นหาวิธีที่ดีที่สุดในการสรุปหาผลลัพธ์ของการทำ Data
                  Science [1]
                </p>
                <br />
                <p>
                  Data Science เป็นแนวคิดที่รวบรวมความคิด เช่น การสำรวจข้อมูล
                  การเรียนรู้ของเครื่องจักร
                  และกลยุทธ์ที่เกี่ยวข้องเพื่อเข้าใจและวิเคราะห์ปรากฏการณ์จริงด้วยข้อมูล
                  มันเป็นการขยายศาสตร์การวิเคราะห์ข้อมูลเชิงลึกเช่นการทำขุดข้อมูล
                  สถิติ และการวิเคราะห์ทำนาย Data Science
                  เป็นสาขาที่ใหญ่มากที่ใช้เทคนิคและแนวความคิดจากสาขาอื่น ๆ เช่น
                  วิทยาสารสนเทศ สถิติ คณิตศาสตร์ และวิทยาการคอมพิวเตอร์
                  บางเทคนิคที่ใช้ในวิทยาการข้อมูลรวมถึงการเรียนรู้ของเครื่องจักร
                  การแสดงผลข้อมูล การรู้จำลักษณะ การแปรผันความน่าจะเป็นของข้อมูล
                  วิศวกรรมข้อมูล การประมวลผลสัญญาณ ฯลฯ [2]
                </p>
                <br />

                {/* A comprehensive library for machine learning in Python. It
                offers a variety of supervised and unsupervised learning
                algorithms, such as regression, classification, clustering, and
                dimensionality reduction. scikit-learn also provides tools for
                model evaluation and selection. */}
              </div>
              <div className=" flex flex-row  justify-center h-50">
                <Image
                  src={Plot_img}
                  width={400}
                  height={70}
                  alt="plot 101"
                  className="m-1"
                />
                                <Image
                  src={Corr_img}
                  width={400}
                  height={70}
                  alt="plot corr"
                  className="m-1"

                />
                                <Image
                  src={Table_img}
                  width={400}
                  height={70}
                  alt="table"
                  className="m-1"
                />
              </div>
            </div>
          </div>

          {/* <div className="text-2xl items-center box-border text-white">
            Code
          </div> */}

          <ImportBox />
          <DataCollection />
          <DataCleaning />
        </div>
      </div>
    </div>
  );
}
