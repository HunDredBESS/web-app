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
          <div className="text-2xl items-center box-border text-white">
            Data Science
          </div>

          <ImportBox />
          <DataCollection />
          <DataCleaning/>
          
        </div>
      </div>
    </div>
  );
}
