"use client";
import React from "react";
import ImportBox from "@/components/import_lib/ImportBox";
import DataCollection from "@/components/DataCollection/Datacollection";
import DataCleaning from "@/components/DataCleaning/DataCleaning";

type Props = {};

export default function DataScience({}: Props) {
  return (
    <div className="">
      {/* <nav className='h-10 text-2xl text-white fixed w-full z-10 shadow-xl bg-black'>Data Science</nav> */}
      <div className="">

        <div className="box-border h-fit w-auto p-2 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-solid">
          <div className="text-4xl items-center box-border text-white pt-6 px-6">
            Data Science
          </div>

          <div className=" box w-full min-h-10 bg-gray-800 rounded-lg mt-3 mb-10 p-5 text-2xl">
          {/* <h1 className="text-gray-200" >Data Science</h1> */}
          <div className="leading-relaxed text-gray-200">
            <div className="h-auto text-lg ">
              A comprehensive library for machine learning in Python. It offers
              a variety of supervised and unsupervised learning algorithms, such
              as regression, classification, clustering, and dimensionality
              reduction. scikit-learn also provides tools for model evaluation
              and selection.
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
