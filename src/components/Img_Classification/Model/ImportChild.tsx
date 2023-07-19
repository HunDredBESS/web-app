"use client";
import React, { useState, useRef, useEffect, FormEvent } from "react";
// import codeLib, { codeType } from './codeLib';
import datalib from "./model.json";
import { MdDeleteOutline } from "react-icons/md";


type Props = {
  id:number
  key:string
  namelib: string
  title: string
  elements: {
          code1: string
          code2: string
          code3: string
        }
  childToParent: any;
  deletechild: (key: string) => void;

};

function ImportChild({id, key, childToParent, deletechild }: Props) {
  const [OptionLib, setOptionLib] = useState<string>("None");
  
  // const [iduni, iduniSet] = useState<string>("");

  const { importlib } = datalib;
  const getBynamelib = (namelib: string) => {
    return importlib.find((importlib) => importlib.namelib === namelib);
  };

  // when optionLib changed ,find detail text code
  useEffect(() => {
    childToParent(getBynamelib(OptionLib));
  }, [OptionLib]);

  // check choose option
  const childToBox = (event: { target: { value:string} }) => {
    if (event.target.value === "Please choose option") {
      setOptionLib("");
    }
    setOptionLib(event.target.value);
  };


  const options: string[] = [
    "Model"
  ];
  // const options: string[] = [
  //   "pandas",
  //   "numpy",
  //   "matplotlib",
  //   "tensorflow",
  //   "seaborn",
  //   "pytorch",
  //   "requests",
  //   "sklearn.preprocessing"
  // ];

  return (
    <>
      <div className="flex flex-row md:flex-cols align-middle h-auto w-auto p-2 rounded-lg bg-white mt-1">
        <div className="w-auto h-fit  p-0 m-0 flex-none">Import code</div>
        <div className="w-fit h-full  p-0 m-0 flex-auto ">
          <select
            className="box-border h-auto w-auto p-1 rounded-md bg-white ml-1 items-center drop-shadow-lg text-md"
            onChange={childToBox}
            placeholder="Please choose option"
          >
            <option disabled selected >
              choose option
              
            </option>
            {options.map((option, index) => {
              return <option key={index}> {option} </option>;
            })}
          </select>
        </div>
        <div className="w-fit h-fit p-0 m-0 flex-none">
          <button
            // onClick={handleClearFile}
            // onClick={() => deleteElement(index)}
            onClick={() => deletechild(key)}
            // onClick={deletechild(key)}
            className="p-0 m-0 w-fit h-fit bg-transparent"
          >
            <MdDeleteOutline className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ImportChild;
