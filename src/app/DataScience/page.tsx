"use client";
import React from "react";

import ImportBox from "@/components/Data_Science/1import_lib/Import";
import DataCollection from "@/components/Data_Science/2DataCollection/Datacollection";
import DataCleaning from "@/components/Data_Science/3DataCleaning/DataCleaning";
import Drop_cols from "@/components/Data_Science/4Drop_data/Drop-data";

import Feature_Sex from "@/components/Data_Science/5EDA/Features_Sex/Feature_Sex";
import Feature_Age from "@/components/Data_Science/5EDA/Features_Age/Feature_Age";
import Feature_Family from "@/components/Data_Science/5EDA/Features_Family/Feature_Family";
import Feature_Alone from "@/components/Data_Science/5EDA/Features_Alone/Feature_Alone";
import Feature_Embarked from "@/components/Data_Science/5EDA/Features_Embarked/Feature_Embarked";
import Feature_Fare from "@/components/Data_Science/5EDA/Features_Fare/Feature_Fare";
import Feature_Pclass from "@/components/Data_Science/5EDA/Features_Pclass/Feature_Pclass";

import Train_Split from "@/components/Data_Science/6Train_split/Feature_Split";

import Train_KNeighbors from "@/components/Data_Science/7Train_KNeighbors/Train_KNeighbors";
import Train_DT from "@/components/Data_Science/8Train_DT/Train_DT";

import Clean_test from "@/components/Data_Science/9Pe_testdata/Clean_datatest";
import Prediction from "@/components/Data_Science/10prediction/Prediction";
import SaveCSV from "@/components/Data_Science/11SaveCSV/Save_csv";

import DataViz from "@/components/Data_Science/12DataViz/DataViz/DataViz";
import DataVizBar from "@/components/Data_Science/12DataViz/DataViz_Bar/DataViz_Bar";
import DataVizScatter from "@/components/Data_Science/12DataViz/DataViz_Scatter/DataViz_Scatter";

import Image from "next/image";

import Plot_img from "public/datascience/main_plot.png";
import Corr_img from "public/datascience/corr_titanic.png";
import Table_img from "public/datascience/table.png";

type Props = {};

export default function DataScience({}: Props) {
  return (
    <div className="mb-[100px]">
      {/* <nav className='h-10 text-2xl text-white fixed w-full z-10 shadow-xl bg-black'>Data Science</nav> */}
      <div className="">
        <div className="box-border h-fit w-auto p-2 bg-slate-800 border-solid mb-10 pb-10">
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
                  width={300}
                  height={70}
                  alt="plot 101"
                  className="m-1"
                />
                <Image
                  src={Corr_img}
                  width={300}
                  height={70}
                  alt="plot corr"
                  className="m-1"
                />
                {/* <Image
                  src={Table_img}
                  width={400}
                  height={70}
                  alt="table"
                  className="m-1"
                /> */}
              </div>
            </div>
          </div>

          {/* <div className="text-2xl items-center box-border text-white">
            Code
          </div> */}

          <ImportBox />
          <DataCollection />
          <DataCleaning />
          <Drop_cols />

          <Feature_Sex />
          <Feature_Age />
          <Feature_Family />
          <Feature_Alone />
          <Feature_Embarked />
          <Feature_Fare />
          <Feature_Pclass />

          <Train_Split />

          <Train_KNeighbors />
          <Train_DT />

          <Clean_test />
          <Prediction />
          <SaveCSV />

          <DataViz />
          <DataVizBar />
          <DataVizScatter />
          
        </div>
      </div>
    </div>
  );
}
