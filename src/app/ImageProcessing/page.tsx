"use client";
import React from "react";
import ImportBox from "@/components/Img_Classification/import_lib/ImportBox";
import ImportBox2 from "@/components/Img_Classification/Plotbar/ImportBox2";
import ImportBox3 from "@/components/Img_Classification/Random/ImportBox3";
import ImportBox4 from "@/components/Img_Classification/Model/ImportBox4";
import ImportBox5 from "@/components/Img_Classification/Callbacks/ImportBox5";
import ImportBox6 from "@/components/Img_Classification/Splitdata/ImportBox6";
import ImportBox7 from "@/components/Img_Classification/Plotbartrain/ImportBox7";
import ImportBox8 from "@/components/Img_Classification/Plotbarval/ImportBox8";
import ImportBox9 from "@/components/Img_Classification/Trainimagegen/ImportBox9";
import ImportBox10 from "@/components/Img_Classification/Valimagegen/ImportBox10";
import ImportBox11 from "@/components/Img_Classification/Imagegenwork/ImportBox11";
import ImportBox12 from "@/components/Img_Classification/Trainmodel/ImportBox12";
import ImportBox13 from "@/components/Img_Classification/Plotfittrainval/ImportBox13";
import ImportBox14 from "@/components/Img_Classification/Testimagegen/ImportBox14";
import ImportBox15 from "@/components/Img_Classification/Predict/ImportBox15";
import ImportBox16 from "@/components/Img_Classification/Plotbartest/ImportBox16";
import ImportBox17 from "@/components/Img_Classification/Resultpredict/ImportBox17";
import ImportBox18 from "@/components/Img_Classification/CSV/ImportBox18";
//import DataCollection from "@/components2/DataCollection/Datacollection";
//import DataCleaning from "@/components2/DataCleaning/DataCleaning";
//import Dog_img from "public/dog1.jpg";

type Props = {};

export default function ImageProcessing({}: Props) {
  return (
    <div className="">
      {/* <nav className='h-10 text-2xl text-white fixed w-full z-10 shadow-xl bg-black'>Data Science</nav> */}
      <div className="">
        <div className="box-border h-fit w-auto p-2 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-solid">
          
          <div className="text-4xl items-center box-border text-white pt-6 px-6">
          ImageProcessing
          </div>

          <div className=" box w-full min-h-10 bg-gray-800 rounded-lg mt-3 mb-10 p-5 text-2xl">
          {/* <h1 className="text-gray-200" >Data Science</h1> */}
          <div className="leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            Image Processing คือ เทคโนโลยีดิจิตอลการประมวลผลภาพด้วยคอมพิวเตอร์เพื่อให้ได้ภาพที่ละเอียดคมชัดหรือข้อมูลที่อยู่ในภาพที่สามารถนำมาใช้งานในเรื่องอื่น ๆ ต่อได้ อีกทั้งยังเป็นเทคโนโลยีที่ยังสามารถนำไปประยุกต์ใช้ประโยชน์ได้อีกหลากหลายด้านในอนาคต ซึ่งจะมีประโยชน์ต่อคุณภาพชีวิตของผู้คนมากยิ่งขึ้น เพิ่มความสะดวกสบายให้กับเราได้มากขึ้น อย่างการนำไปใช้กับโดรน ถ่ายภาพและประมวลผลจากมุมสูง การนำไปใช้วิเคราะห์สภาพการจราจรหรือการขับขี่ที่ไม่ถูกต้อง ก็ยังสามารถทำได้ จึงนับว่าเป็นหนึ่งเทคโนโลยีที่น่าจับตา มีโอกาสที่จะก้าวหน้าไปอีกไกลแน่นอน

            </div>
          </div>
        </div>

          <div className="text-4xl items-center box-border text-white pt-6 px-6">
          Image Classification
          </div>

          <div className=" box w-full min-h-10 bg-gray-800 rounded-lg mt-3 mb-10 p-5 text-2xl">
          {/* <h1 className="text-gray-200" >Data Science</h1> */}
          <div className="leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            การจำแนกภาพ (Image classification) หมายถึงกระบวนการในการแยกแยะและระบุหมวดหมู่ของภาพด้วยวิธีการคอมพิวเตอร์ (computer vision) ซึ่งมีเป้าหมายเพื่อให้ระบบคอมพิวเตอร์สามารถรู้ว่าภาพใดอยู่ในกลุ่มหมวดหมู่ใด
            </div>

          </div>
        </div>
        
        <div className=" box w-full min-h-10 bg-gray-800 rounded-lg mt-3 mb-10 p-5 text-2xl">
          {/* <h1 className="text-gray-200" >Data Science</h1> */}
          <div className="leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            กระบวนการ image classification ใช้โมเดลการเรียนรู้เชิงลึก (deep learning models) เป็นหลัก โดยรับภาพเป็นข้อมูลนำเข้าและส่งผ่านโครงข่ายประสาทเทียม (neural network) เพื่อฝึกสอนและปรับปรุงโมเดลเพื่อให้มีความสามารถในการจำแนกหมวดหมู่ภาพได้ถูกต้องมากขึ้น โมเดลจะเรียนรู้จากชุดข้อมูลภาพที่มีป้ายกำกับ (labeled dataset) ซึ่งแต่ละภาพจะระบุหมวดหมู่ที่เกี่ยวข้อง เมื่อโมเดลเรียนรู้เสร็จสิ้นแล้ว จะสามารถนำมาใช้กับภาพใหม่ที่ไม่มีป้ายกำกับเพื่อทำนายหมวดหมู่ของภาพได้
            </div>

          </div>
        </div>

        <div className="lg:gap-1 my-3 leading-relaxed text-2xl font-medium  text-white">           
            <div className="h-auto text-lg ">
            Reference
            </div>
          </div>

          <div className="leading-relaxed text-gray-200">
            
            <div className="h-auto text-lg ">
            -    https://www.kaggle.com/datasets/ashishsaxena2209/animal-image-datasetdog-cat-and-panda

            </div>
            <div className="h-auto text-lg ">
            -    https://www.dailytech.in.th/image-processing/

            </div>
            <div className="h-auto text-lg ">
            -    https://www.sas.com/th_th/insights/analytics/computer-vision.html
            </div>
          </div>

        <div className="text-4xl items-center box-border text-white pt-6 px-6">
          Let's begin
          </div>

          {/* <div className="text-2xl items-center box-border text-white">
            Code
          </div> */}

        

          <ImportBox />
          <ImportBox2 />
          <ImportBox3 />
          <ImportBox4 />
          <ImportBox5 />
          <ImportBox6 />
          <ImportBox7 />
          <ImportBox8 />
          <ImportBox9 />
          <ImportBox10 />
          <ImportBox11 />
          <ImportBox12 />
          <ImportBox13 />
          <ImportBox14 />
          <ImportBox15 />
          <ImportBox16 />
          <ImportBox17 />
          <ImportBox18 />
        </div>
      </div>
    </div>
  );
}
