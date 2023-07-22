"use client";
import React from "react";
import Image from "next/image";
import ACCreport from "public/NLP/ACCreport.png";


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
            Model

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

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">
            <div className="h-auto text-xl font-medium">
            Vectorizer + Tfidf + LogisticRegression 
            </div>
          </div>   

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            จริงๆต้องขอพูดก่อนเลยว่าวิธีการทำ text classification นั้นไม่ได้มีแค่วิธีนี้ครับ อีกวิธีนึงที่เป็นที่นิยมคือการใช้ transformers แต่สำหรับบทเรียนครั้งนี้ผมจะยังไม่ขอพูดถึงวิธีนั้น เหตุผลที่ผมเลือกนำวิธีนี้มาใช้ส่วนตัวคิดว่าวิธีนี้ทำความเข้าใจได้ง่ายกว่า และกินทรัพยากรเครื่องน้อยกว่า ไม่ต้องใช้ gpu เทรนแบบ transformers ใช้เวลาเทรนไม่นานและให้ผลลัพธ์ออกมาค่อนข้างดีถ้ามีข้อมูลมากพอ แถมไลบรารีที่ใช้ก็ไม่หลายตัวด้วย
            </div>
          </div>      

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            มาเจาะไปที่แต่ละตัวกันครับ ว่าสามตัวหลักที่ผมใช้แต่ละตัวนั้นทำหน้าที่อะไรบ้าง ผมจะขออธิบายแบบคร่าวๆ หากท่านไหนสนใจเพิ่มเติมก็สามารถไปหาบทความอ่านเพิ่มได้โดยนำชื่อแต่ละตัวไปเสิร์ชได้เลยครับ 
            </div>
          </div>      

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-7 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg font-medium">Vectorizer</div>
            <div className="h-auto text-lg ">
            เป็นขั้นตอนในกระบวนการแปลงข้อความเป็นเวกเตอร์ เพื่อที่เครื่องคอมพิวเตอร์จะได้สามารถเข้าใจและประมวลผลได้ง่ายขึ้นครับ โดยในที่นี้เราใช้ CountVectorizer เพื่อนับจำนวนคำในข้อความและแปลงเป็นเวกเตอร์ตามจำนวนคำในแต่ละตำแหน่ง ตัวอย่างเช่น ถ้ามีคำว่า "cat" ปรากฏในข้อความ 2 ครั้ง และคำว่า "dog" ปรากฏในข้อความ 1 ครั้ง จะได้เวกเตอร์ [2, 1] ที่แทนจำนวนครั้งของ "cat" และ "dog" ตามลำดับ
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-7 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg font-medium">Tfidf</div>
            <div className="h-auto text-lg ">
            เป็นขั้นตอนในการคำนวณน้ำหนักของคำในข้อความ โดยคำนวณจาก Term Frequency (ความถี่ของคำในข้อความ) และ Inverse Document Frequency (ความถี่ที่คำปรากฏในเอกสารทั้งหมด) เพื่อให้คำที่เป็นสำคัญมีน้ำหนักสูง และคำที่พบบ่อยทั่วไปมีน้ำหนักต่ำลงครับ เป็นวิธีที่ช่วยลดความสำคัญของคำที่มีความซ้ำซ้อนในเอกสารหรือชุดข้อมูลที่เรามีนั่นเอง
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 lg:grid-cols-[120px_1fr] lg:gap-7 my-7 mx-10 px-8 leading-relaxed  text-gray-200">
            <div className="h-auto text-lg font-medium">Logistic Regression</div>
            <div className="h-auto text-lg ">
            เป็นโมเดลการเรียนรู้เที่ใช้ในการจำแนกข้อมูลเป็นกลุ่มหรือคลาสต่างๆ ซึ่งในที่นี้คลาสใน Text Classification คือหมวดหมู่หรือกลุ่มของข้อความตามที่กำหนดไว้ โดยการทำงานของ Logistic Regression นั้นคือการหาค่าของพารามิเตอร์ที่เหมาะสมเพื่อที่จะแยกแยะและจำแนกข้อความในกลุ่มต่างๆครับ
            </div>
          </div>

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            สำหรับคนที่สงสัยว่าการทำ Regression มันเอาไว้ประมาณค่านี่นา อย่างค่า x เท่านี้จะได้ค่า y เท่าไรไม่ใช่หรอ แล้วเราจะเอามันมาจำแนกประเภทข้อมูลได้ยังไง? สามารถอ่านเพิ่มเติมได้จากบทความตามลิงค์นี้เลยครับ :  </div>
            <div className="h-auto text-lg ">
              <a
                href="https://nonthakon.medium.com/machine-learning-ด้วย-python-การจำแนกประเภทด้วย-logistic-regression-ใน-scikit-learn-e78b8aa04517"
                className="text-blue-300 hover:text-blue-600"
                target="_blank"
              >
                https://nonthakon.medium.com/machine-learning-ด้วย-python-การจำแนกประเภทด้วย-logistic-regression-ใน-scikit-learn-e78b8aa04517
              </a>
            </div>
          </div>

          <div className="lg:gap-7 my-7 mx-0 px-8 leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
            เมื่อเทรนเสร็จเรียบร้อยเราสามารถประเมินโมเดลของเราโดย print accuracy และ report ออกมาดูได้ครับ (โค้ดตรงส่วนนี้สามารถกดตรง evaluate the model ใน code block ด้านล่างเพื่อดูตัวอย่างโค้ดได้เลยครับ)
            </div>
          </div>   

          <div className="lg:gap-1 my-7 mx-10 px-8 flex flex-row">
          <Image src={ACCreport} width={600} height={600} alt="Read file" />
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
