"use client"
import React, { useEffect, useState, useRef, useCallback  } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

import BoxNew from "@/components/BoxComponent/BoxNew";
// import CSVReader from "@/components/ReadCSV/CSVReader2";
import Detaildatacoll from "./detail_datacoll";
import datalib from './dataCollection.json'

type Props = {};

interface FormData {
  [key: number]: string;
}

export default function DataCollection({}: Props) {
  const [formData, setFormData] = useState<FormData>({});
  const [componentCodes, setComponentCodes] = useState<JSX.Element[]>([]);
  const [componentCounter, setComponentCounter] = useState(0);
  const [dataIn, setdataIn] = useState<JSX.Element[]>([]);

  const createComponent = () => {
    const id = Date.now();
    const code = (
      <DataCollectionChild
        deletechild={() => deletechild(id)}
        key={`component_importLib_${id}`}
        childToParent={(childdata: any) => childToParent(childdata, id)}
        id={id}
        namelib=""
        title=""
        elements={{
          code1: "",
          code2: "",
          code3: "",
          comment1:"",
          comment2: ""
        }}
      />
    );
    setComponentCodes((prevCodes) => [...prevCodes, code]);
    setComponentCounter(id);
  };

  const childToParent = (childdata: any, id: number) => {
    setdataIn(childdata);
    // console.log("User Value:", childdata.elements.code1);
    // console.log("ID:", id);
    if (childdata.name === "read csv") {
        if (childdata.input === ""){
            setFormData((prevData) => ({ ...prevData, [id]: `${childdata.elements.comment1}
                                                            \n${childdata.elements.code1} input path ${childdata.elements.code2}` }));
        } else {
            setFormData((prevData) => ({ ...prevData, [id]: `${childdata.elements.comment1}
                                                            \n${childdata.elements.code1}${childdata.input}${childdata.elements.code2}` }));
        }
    } else if (childdata.name === "API") {
        if (childdata.input === ""){
            setFormData((prevData) => ({ ...prevData, [id]: `${childdata.elements.comment1}\n${childdata.elements.code1}( 'https://api.example.com/data' )                                                           
                                                            \n${childdata.elements.comment2}\n${childdata.elements.code2}` }));
                                                            
        } else {
            setFormData((prevData) => ({ ...prevData, [id]: `${childdata.elements.comment1}\n${childdata.elements.code1}( '${childdata.input}' )                                                           
                                                            \n${childdata.elements.comment2}\n${childdata.elements.code2}` }));
        }
    } else if (childdata.name === "json to data frame") {
        if (childdata.input === ""){
            setFormData((prevData) => ({ ...prevData, [id]: `# Read the JSON data from a file
                                                            \nwith open('data.json', 'r') as json_file:
                                                            \n   data = json_file.read()
                                                            \n# Create a DataFrame from the JSON data
                                                            \ndf = pd.read_json(data)`}));
                                                            
        } else {
            setFormData((prevData) => ({ ...prevData, [id]: `# Read the JSON data from a file
                                                            \nwith open('${childdata.input}', 'r') as json_file:
                                                            \n   data = json_file.read()
                                                            \n# Create a DataFrame from the JSON data
                                                            \ndf = pd.read_json(data)`}));
        }
    } else {
            setFormData((prevData) => ({ ...prevData, [id]: childdata.elements.code1 }));
    }
    
  };

  const deletechild = (id: number) => {
    setComponentCodes((prevCodes) =>
      prevCodes.filter((code) => code.props.id !== id)
    );
    setFormData((prevData) => {
      const { [id]: deletedData, ...updatedData } = prevData;
      return updatedData;
    });
  };

  const formattedComponents: string = Object.values(formData).join("\n");

  const deleteEmptyLines = (input: string): string => {
    const lines = input.split("\n");
    const nonEmptyLines = lines.filter((line) => line.trim() !== "");
    return nonEmptyLines.join("\n");
  };

  const resultDeleteLine = deleteEmptyLines(formattedComponents);
  console.log('child to parent :', dataIn)
  console.log('from Data :', formData)

  return (
    <>
    <div className=" box-border h-fit w-auto mt-2 border-t-1 border-gray-500">
    <Detaildatacoll/>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 place-items-stretch mt-1 box-border h-fit w-auto p-2 items-start">
        <div className="relative h-auto min-w-[310px] w-full p-5 rounded-lg bg-gradient-to-r from-gray-800 to-gray-800 border-1 border-black">
          <h1 className="text-xl text-white">Data Conllection</h1>

          <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 grid-rows-none">
            {componentCodes.map((code) => (
              <div key={code.key}>{code}</div>
            ))}
          </div>

          <button
            onClick={createComponent}
            className="text-gray-500 text-gl rounded shadow-gray-600 hover:text-sky-600 mt-2 bg-transparent absolute right-5 top-0"
          >
            <CiCirclePlus className="text-4xl" />
          </button>
        </div>

        {/* <div className="col-start-4 col-end-5 box-border h-fit p-5 rounded-lg text-center text-xl"></div> */}

        <div className=" h-fit w-auto p-5 rounded-lg bg-gradient-to-r from-gray-800 to-gray-800 border-1 border-black">
          <BoxNew code={resultDeleteLine} />
        </div>
      </div>
      {/* <div className="block bg-red-500 w-full h-auto">
        <CSVReader />
      </div> */}
      </div>
    </>
  );
}

//-----------------------------------------------------------------------------------------------------------------------------------//

type PropsAdd = {
  id: number;
  namelib: string;
  title: string;
  elements: {
    code1: string;
    code2: string;
    code3: string;
    comment1: string;
    comment2: string;
  };
  childToParent: (childdata: any, id: number) => void;
  deletechild: (id: number) => void;
};

function DataCollectionChild({
  id,
  namelib,
  title,
  elements,
  childToParent,
  deletechild,
}: PropsAdd) {
  const [OptionLib, setOptionLib] = useState<string>("None");
  const inputRef = useRef<HTMLInputElement>(null);
  const [pathName, setPathName] = useState<string>("");

  const { dataCollection } = datalib;
  const getBynamelib = useCallback((name: string) => {
    return dataCollection.find((dataCollection: { name: string }) => dataCollection.name === name);
  }, [dataCollection]);

  const childToBox = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "Please choose option") {
      childToParent(getBynamelib(""), id);
      setOptionLib("");
    } else {
      setOptionLib(event.target.value);
      childToParent({ ...getBynamelib(event.target.value), input: pathName }, id);
    }
  };

  const options: string[] = ["read csv", "API", "json to data frame"];

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    childToParent({ ...getBynamelib(OptionLib), input: pathName }, id);
  }, [pathName,childToParent, getBynamelib, id, OptionLib]);

  return (
    <>
      <div className="flex flex-row md:flex-cols align-middle h-auto w-auto p-2 rounded-lg bg-white mt-1">
        <div className="w-fit h-fit  p-0 m-0 flex-none">Read data</div>
        <div className="w-fit h-full  p-0 m-0 flex-auto ">
          <select
            className="box-border h-auto w-auto p-1 rounded-md bg-white ml-5 items-center drop-shadow-lg text-md"
            onChange={childToBox}
            placeholder="Please choose option"
          >
            <option disabled selected>
              choose option
            </option>
            {options.map((option, index) => {
              return <option key={index}> {option} </option>;
            })}
          </select>
        </div>

        <div className="bg-red-500 p-0 m-0 w-auto h-fit flex-auto">
          <input
            type="text"
            placeholder="  input data"
            className="text-black bg-white border-gray-500 p-0 m-0 shadow-lg w-full"
            ref={inputRef}
            onChange={(e) => setPathName(e.target.value)}
          />
        </div>

        <div className="w-fit h-fit p-0 m-0 flex-none">
          <button
            onClick={() => deletechild(id)}
            className="p-0 m-0 w-fit h-fit bg-transparent"
          >
            <MdDeleteOutline className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
}
