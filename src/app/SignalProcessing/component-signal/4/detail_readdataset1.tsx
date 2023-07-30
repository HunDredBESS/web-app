"use client";
import React from "react";
import Image from "next/image";

import Cat_img from "public/signal/cat.jpg";
import Cat1_img from "public/signal/cat1.jpg";

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
              2 Read DATASET
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

          <p className="mt-4 leading-relaxed text-lg text-gray-200">
            การเขียนเว็บ
            <br />
            Data cleaning and preprocessing are important steps in data science
            to prepare the data for analysis and modeling. Key techniques
            include handling missing values by removing or imputing them,
            addressing outliers, formatting data for consistency, handling
            duplicates, scaling features for uniformity, encoding categorical
            variables for numerical analysis, handling imbalanced data, and
            reducing dimensionality. The objective is to ensure the data is
            clean, consistent, and suitable for analysis and modeling tasks.
          </p>
          <br />
          <div className=" flex flex-row  justify-center h-auto">
                <Image
                  src={Cat_img}
                  width={300}
                  height={300}
                  alt="cat"
                />
                                <Image
                  src={Cat1_img}
                  width={300}
                  height={300}
                  alt="cat1"
                />
              </div>

        </details>
        
      </div>
    </>
  );
}
