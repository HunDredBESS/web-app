"use client";
import React from "react";
import Image from "next/image";

import DataViz_barplot from "public/datascience/DataViz_barplot.png";
import DataViz_histplot from "public/datascience/DataViz_histplot.png";
import DataViz_catplot from "public/datascience/DataViz_catplot.png";
import DataViz_violinplot from "public/datascience/DataViz_violinplot.png";

type Props = {};

export default function detail_DataVizBar({}: Props) {
  return (
    <>
      <div className="space-y-4">
        <details
          className="group border-s-4 border-green-500 p-6 bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
              กราฟสำหรับดูจำนวนความถี่หรือการกระจายตัวของข้อมูล 
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

          <br />
          <div className=" flex flex-row gap-10 justify-center h-auto mx-3 leading-relaxed text-xl text-gray-200">
            <div className="justify-center">
              <p className="text-center mb-1">Pic1 : Barplot</p>
              <Image
                src={DataViz_barplot}
                width={300}
                height={200}
                alt="DataViz_barplot"
                // className="item-center "
              /> 
            </div> 
            <div className=" justify-center">
            <p className="text-center mb-1">Pic2 : Histogram</p>
              <Image
                src={DataViz_histplot}
                width={300}
                height={200}
                alt="DataViz_histplot"
              />
            </div>
          </div>
          <div className=" flex flex-row gap-10 justify-center h-auto mx-3 leading-relaxed text-xl text-gray-200">
            <div className="justify-center">
              <p className="text-center mb-1">Pic3 : Catplot</p>
              <Image
                src={DataViz_catplot}
                width={300}
                height={200}
                alt="DataViz_catplot"
                // className="item-center "
              /> 
            </div> 
            <div className=" justify-center">
            <p className="text-center mb-1">Pic4 : Violinplot</p>
              <Image
                src={DataViz_violinplot}
                width={300}
                height={200}
                alt="DataViz_violinplot"
              />
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
