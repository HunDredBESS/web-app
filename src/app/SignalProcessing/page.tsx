import React from 'react'
import Image from "next/image";


import Datasetload from "./component-signal/2data/Read_dataset1"
import Datasetvit from "./component-signal/2datavit/Read_datasetvit"
import Datasetpre from "./component-signal/2datavitpre/Read_datavit"
import Save from "./component-signal/2save/Read_datasetnn"
import Spi from "./component-signal/2spi/Read_dataspi"
import Model from "./component-signal/2model/Read_datamodel"
import Pre from "./component-signal/2predi/Read_datasetmm"
import Sum from "./component-signal/2sumit/Read_datasetsumit"
import Signal_img from "public/signal/signal-01.png";

type Props = {}

export default function SignalProcessing({}: Props) {
  return (
    <div className="">
      {/* <nav className='h-10 text-2xl text-white fixed w-full z-10 shadow-xl bg-black'>Data Science</nav> */}
      <div className="">
        <div className="box-border h-fit w-auto p-2 bg-slate-800 border-solid">
          {/* <div className="box-border h-fit w-auto p-2 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-solid"> */}
          <div className="text-4xl items-center box-border text-white pt-6 px-6">
            Signal Processing
          </div>

          <div className=" box w-full min-h-10 bg-gray-800 shadow-sm shadow-gray-600 rounded-lg mt-3 mb-10 p-5 text-2xl">
            {/* <h1 className="text-gray-200" >Data Science</h1> */}
            <div className="leading-relaxed text-white">
              <div className="h-auto text-lg ">
                <p>
                Signal Processing คือ สาขาของปัญญาประดิษฐ์และการคอมพิวเตอร์ที่เน้นการประมวลผลและวิเคราะห์ที่เกี่ยวข้องกับการจัดการสัญญาณจากโดเมนเวลาไปยังความถี่และในทางกลับกัน การปรับสัญญาณให้เรียบ การแยกสัญญาณรบกวนออกจากสัญญาณ เช่น การกรอง การแยกข้อมูลจากสัญญาณ 
                </p>
                <br />
                <p>
                Signal Classification เป็นการจำเเนกสัญญาณสามารถระบุประเภทสัญญาณ สามารถนำไปประยุกต์ใช้ในทางการเเพทย์ได้
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
                  src={Signal_img}
                  width={400}
                  height={70}
                  alt="plot 101"
                  className="m-1"
                />
                                {/* <Image
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
                
                /> */}
              </div>
             
            </div>
            <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Reference
            </div>
          </div>

          <div className="leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            -    https://www.kaggle.com/competitions/uwb-pose-prediction/data
            </div>
            {/* <div className="h-auto text-lg ">
            -    https://www.dailytech.in.th/image-processing/

            </div>
            <div className="h-auto text-lg ">
            -    https://www.sas.com/th_th/insights/analytics/computer-vision.html
            </div> */}
          </div>
          </div>

          {/* <div className="text-2xl items-center box-border text-white">
            Code
          </div> */}

          {/* <ImportBox />
           */}
          <Datasetload/>
          <Datasetvit/>
          <Datasetpre/>
          <Save/>
          <Spi/>
          <Model/>
          <Pre/>
          <Sum/>
        
        </div>
      </div>
    </div>
  )
}