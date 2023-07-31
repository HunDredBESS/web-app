"use client";
import React from "react";
import Image from "next/image";

type Props = {};

export default function detail_DataViz({}: Props) {
  return (
    <>
      <div className="space-y-4">
        <details
          className="group border-s-4 border-green-500 p-6 bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
              Data Visualization
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

          <p className="mt-4 mx-3 leading-relaxed text-xl text-gray-200">
            Data Visualization เป็นการนำข้อมูลมาแสดงในรูปแบบของภาพกราฟิก แผนภูมิ กราฟ ไดอะแกรม หรืออื่นๆ เพื่อให้เห็นและ
            เข้าใจลักษณะแนวโน้มและความสัมพันธ์ของข้อมูลได้ง่ายขึ้น ชัดเจนขึ้น ซึ่ง Data Visualization จะช่วยให้การศึกษาและวิเคราะห์
            ทำได้ง่ายขึ้นจากการเห็นภาพรวมของข้อมูลทั้งหมด สามารถสั่งให้หรือแสดงเน้นข้อมูลบางส่วนที่สนใจ แยกสีแยกกลุ่มได้ ทำให้เข้าใจถึง
            แนวโน้ม การเปรียบเทียลข้อแตกต่างและความสัมพันธ์ของข้อมูลได้ง่าย
            <br />
            <br />
            การทำ Data Visualization ต้องพิจารณาถึงวัตถุประสงค์ว่าต้องการค้นหาหรือต้องการดูข้อมูลสรุปอะไร เพื่อเลือกชนิดกราฟได้เหมาะสม
            เช่น หากต้องการดูจำนวนความถี่ ควรใช้กราฟแท่ง หรือ Histogram หากต้องการดูการกระจาย ดูความสัมพันธ์หรือแนวโน้มของข้อมูล
            ควรใช้กราฟ Scatter นอกจากยังต้องคำนึงถึงชนิดข้อมูลที่นำมาแสดงว่าเป็นชนิดต่อเนื่องหรือไม่ต่อเนื่อง
            <br />
            <br />
            ไลบรารี (Library) สำหรับการพล็อตกราฟ
            <br />
            การนำข้อมูลมาแสดงในรูปแบบกราฟิก เช่น ไดอะแกรม กราฟ สามารถทำได้หลายวิธี ซึงการนำเสนอในนี้จะใช้ไลบรารี Matplotlib และ 
            Seaborn เป็นหลัก เนื่องจากสามารถการสร้างกราฟได้หลากหลายและเป็นที่นิยมใช้กันแพร่หลาย
            <br />
            <br />
            ชุดข้อมูลไททานิค (Titanic Dataset)
            <br />
            เป็นชุดข้อมูลที่ได้รับความนิยมมากในการเรียนรู้ทำความเข้าใจ Machine Learning ซึ่งเป็นข้อมูลของผู้โดยสารทั้งหมดบนเรือ RMS Titanic
            ที่อัปปาง โดยชุดข้อมูลนี้จะใช้ทำนายว่าผู้โดยสารรอดหรือไม่รอดชีวิต
          </p>
          <ul className="mt-4 mx-3 leading-relaxed text-xl text-gray-200">
            ข้อมูลประกอบด้วย
            <li>PassengerId : หมายเลขผู้โดยสาร </li>
            <li>Survived : การรอดชีวิตของผู้โดยสาร 0=ไม่รอดชีวิต, 1=รอดชีวิต </li>
            <li>Pclass : ระดับผู้โดยสาร มี 3 ระดับ 1, 2, 3 </li>
            <li>Name : ชื่อผู้โดยสาร </li>
            <li>Sex : เพศ Male, Female</li>
            <li>Age : อายุ </li>
            <li>SibSp : No. of siblings/spouses จำนวนพี่น้อง/คู่สมรส</li>
            <li>Parch : No. of Parents/children จำนวนพ่อแม่/ลูก</li>
            <li>Ticket : เลขตั๋วเดินทาง</li>
            <li>Fare : ค่าโดยสาร</li>
            <li>Cabin : หมายเลขห้องโดยสารในเรือ</li>
            <li>Embarked : ท่าเรือ มี 3 ท่าเรือ C = Cherbourg, Q = Queenstown, S=Southampton</li>
          </ul>
          
          <div className=" flex flex-col gap-10 justify-center h-auto mx-3 leading-relaxed text-xl text-gray-200">
            <div className="s grid justify-items-left ">
              {/* <p className="text-center mb-1">Info</p> */}
              {/*
              <Image
                src={Dataset_img}
                width={200}
                height={200}
                alt="dataset img"
                // className="item-center "
              /> */}
            </div> 
            {/* <div className=" grid justify-items-center">
            <p className="text-center mb-1">drop data</p>
              <Image
                src={Drop_img}
                width={400}
                height={200}
                alt="dataset img"
              />
            </div> */}
          </div>
        </details>
      </div>
    </>
  );
}
