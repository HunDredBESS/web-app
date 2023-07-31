"use client";
import React from "react";
import Image from "next/image";

import DataViz_heatmap from "public/datascience/DataViz_heatmap.png";
import DataViz_pairplot from "public/datascience/DataViz_pairplot.png";

type Props = {};

export default function detail_dataclean({}: Props) {
  return (
    <>
      <div className="space-y-4">
        <details
          className="group border-s-4 border-green-500 p-6 bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-2xl font-medium  text-white">
              กราฟสำหรับดูความสัมพันธ์ระหว่างข้อมูลหรือแนวโน้มของข้อมูล
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

          </p>
          <ul className="mt-4 mx-3 leading-relaxed text-xl text-gray-200">
            <li>   </li>
            <li>   </li>
            <li>

            </li>
          </ul>
          <br />
          <div className=" flex flex-col gap-10 justify-center h-auto mx-3 leading-relaxed text-xl text-gray-200">
            <div className="grid justify-items-center">
              <p className="text-center mb-1">Pic5 : Heatmap</p>
              <Image
                src={DataViz_heatmap}
                width={400}
                height={300}
                alt="DataViz_heatmap"
                // className="item-center "
              />
            </div>
            <div className=" grid justify-items-center">
            <p className="text-center mb-1">Pic6 : Pairplot</p>
              <Image
                src={DataViz_pairplot}
                width={600}
                height={600}
                alt="DataViz_pairplot"
              />
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
