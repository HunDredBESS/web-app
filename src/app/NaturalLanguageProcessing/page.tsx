"use client";
import React from "react";
import ImportBox from "@/components/NLP/import_lib/ImportBox";
import DataCollection from "@/components/NLP/DataCollection/Datacollection";
import ImportBox2 from "@/components/NLP/EDA/ImportBox2";
import ImportBox4 from "@/components/NLP/DataCleaning/ImportBox4";
import ImportBox3 from "@/components/NLP/Model/ImportBox3";
import ImportBox5 from "@/components/NLP/Prediction/ImportBox5";
import SaveCSV from "@/components/NLP/CSV/ImportBox6";
import Image from "next/image";
import Pipeline from "public/NLP/pipeline.png";

type Props = {}

export default function NLP({}: Props) {

  return (
    <div className="">
      {/* <nav className='h-10 text-2xl text-white fixed w-full z-10 shadow-xl bg-black'>Data Science</nav> */}
      <div className="">

        <div className="box-border h-fit w-auto p-2 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-solid">
          <div className="text-4xl items-center box-border text-white pt-6 px-6">
           Natural Language Processing
          </div>

          <div className=" box w-full min-h-10 bg-gray-800 rounded-lg mt-3 mb-10 p-5 text-2xl">
          {/* <h1 className="text-gray-200" >Data Science</h1> */}
          <div className="leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            NLP (Natural Language Processing) 
            คือ สาขาของปัญญาประดิษฐ์และการคอมพิวเตอร์ที่เน้นการประมวลผลและวิเคราะห์ภาษาธรรมชาติของมนุษย์ 
            ซึ่งมีจุดมุ่งหมายให้คอมพิวเตอร์สามารถเข้าใจและตอบสนองต่อภาษามนุษย์ได้ ดังนั้น NLP ให้ความสำคัญในการวิเคราะห์ 
            แยกแยะ และใช้ข้อมูลที่อยู่ในข้อความให้เป็นประโยชน์แก่ผู้ใช้งานหรือการปฏิบัติงานในรูปแบบที่เป็นประโยชน์ต่อมนุษย์
            </div>
          </div>
        </div>
        <div className=" box w-full min-h-10 bg-gray-800 rounded-lg mt-3 mb-10 p-5 text-2xl">
          {/* <h1 className="text-gray-200" >Data Science</h1> */}
          <div className="leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            ตัวอย่างของงานใน NLP ได้แก่
            </div>
          </div> 

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-7 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg">Text Classification</div>
            <div className="h-auto text-lg ">
            คือการจำแนกประเภทหรือกลุ่มข้อความตามหมวดหมู่ที่กำหนด เช่น การจำแนกประโยคว่าเป็นข่าว สปอร์ต หรือความบันเทิง
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-7 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg ">Named Entity Recognition</div>
            <div className="h-auto text-lg ">
            คือการระบุและสกัดอักษรที่มีชื่อตัวบุคคล องค์กร สถานที่ หรือวันที่ จากข้อความ
            </div>
          </div>


          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-7 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg">Sentiment Analysis</div>
            <div className="h-auto text-lg ">
            คือการวิคราะห์ความหมาย การกำหนดความรู้สึกหรือความคิดเห็นที่แสดงอยู่ในข้อความว่าเป็นบวก เชิงเสียหาย หรือเป็นกลาง
            </div>
         </div>

         <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-7 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg">Machine Translation</div>
            <div className="h-auto text-lg ">
            คือการแปลข้อความจากภาษาหนึ่งเป็นอีกภาษาหนึ่ง ตัวอย่างเช่น Google Translate
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-7 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg">Question Answering</div>
            <div className="h-auto text-lg ">
            คือการสร้างระบบที่สามารถเข้าใจและตอบคำถามที่ถามด้วยภาษาธรรมชาติได้
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-7 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg">Text Summarization</div>
            <div className="h-auto text-lg ">
            คือการสร้างข้อความสรุปที่กระชับของเอกสารที่ยาวๆ โดยสรุปรวมข้อมูลที่สำคัญที่สุด
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-7 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg">Chatbots and Virtual Assistants</div>
            <div className="h-auto text-lg ">
            คือการการพัฒนาตัวแทนที่สามารถสนทนากับผู้ใช้ด้วยภาษาธรรมชาติและให้ข้อมูลหรือดำเนินการตามคำขอ
            </div>
          </div>
        </div>

        <div className="box-border h-fit w-auto p-2 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-solid">
          <div className="text-3xl items-center box-border text-white pt-6 px-6">
           Text Classification
          </div>
        </div>

        <div className=" box w-full min-h-10 bg-gray-800 rounded-lg mt-3 mb-10 p-5 text-2xl">
          {/* <h1 className="text-gray-200" >Data Science</h1> */}
          <div className="leading-relaxed text-gray-200">
            <div className="h-auto text-2xl font-medium">
            Pipeline
            </div>
          </div>

          <div className="lg:gap-1 my-7 flex flex-row ">
          <Image src={Pipeline} width={900} height={900} alt="Read file" />
          </div>
        </div>

          {/* <div className="text-2xl items-center box-border text-white">
            Code
          </div> */}

          <ImportBox />
          <ImportBox2 />
          <ImportBox4 />
          <ImportBox3 />
          <ImportBox5 />
          <SaveCSV />

        <div className="lg:gap-7 my-7 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-xl font-medium">
            Reference
            </div>
          </div>

          <div className="leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            -    https://www.kaggle.com/competitions/hackathon-online-nlu-intent-classification/data

            </div>
            <div className="h-auto text-lg ">
            -    https://www.kaggle.com/code/heeraldedhia/text-classification-nlp

            </div>
            <div className="h-auto text-lg ">
            -    https://nonthakon.medium.com/machine-learning-ด้วย-python-การจำแนกประเภทด้วย-logistic-regression-ใน-scikit-learn-e78b8aa04517
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}