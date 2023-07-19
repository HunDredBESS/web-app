"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

import BoxNew from "../BoxComponent/BoxNew";
import Detaildataclean from "./detail_dataclean";

import Image from "next/image";
import Numpy_img from "public/numpy_logo.png";

type Props = {};

interface FormData {
  [key: number]: string;
}

export default function DataCleaning({}: Props) {
  const [formData, setFormData] = useState<FormData>({});
  const [componentCodes, setComponentCodes] = useState<JSX.Element[]>([]);
  const [componentCounter, setComponentCounter] = useState(0);
  const [dataIn, setdataIn] = useState<JSX.Element[]>([]);

  const createComponent = () => {
    const id = Date.now();
    const code = (
      <DataCleaningChild
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
          comment1: "",
          comment2: "",
        }}
      />
    );
    setComponentCodes((prevCodes) => [...prevCodes, code]);
    setComponentCounter(id);
  };

  const childToParent = (childdata: any, id: number) => {
    setdataIn(childdata);
    const inputValue1 = childdata.input1 || "";
    const inputValue2 = childdata.input2 || "";
    const inputValue3 = childdata.input3 || "";
    const inputValue4 = childdata.input4 || "";

    if (childdata.option1 === "Missing Values") {
      if (childdata.option2 === "Drop rows") {
        setFormData((prevData) => ({
          ...prevData,
          [id]: `# Drop rows with missing values
                                                            \ndata.dropna(inplace=True)`,
        }));
      } else if (childdata.option2 === "Fill specific value") {
        setFormData((prevData) => ({
          ...prevData,
          [id]: `# Fill missing values with a specific value
                                                            \ndata['${
                                                              inputValue1 === ""
                                                                ? "column1"
                                                                : inputValue1
                                                            }'].fillna(value, inplace=True)}`,
        }));
      } else if (childdata.option2 === "Fill mean or median") {
        setFormData((prevData) => ({
          ...prevData,
          [id]: `# Fill missing values with the mean or median
                                                        \ndata['${
                                                          inputValue1 === ""
                                                            ? "column1"
                                                            : inputValue1
                                                        }'].fillna(data['${
            inputValue1 === "" ? "column1" : inputValue1
          }'].mean(), inplace=True)
                                                        \ndata['${
                                                          inputValue2 === ""
                                                            ? "column2"
                                                            : inputValue2
                                                        }'].fillna(data['${
            inputValue2 === "" ? "column2" : inputValue2
          }'].median(), inplace=True)`,
        }));
      } else {
        setFormData((prevData) => ({ ...prevData, [id]: "" }));
      }
    } else if (childdata.option1 === "Data Normalization") {
      if (childdata.option2 === "Min-Max scaling") {
        setFormData((prevData) => ({
          ...prevData,
          [id]: `# Min-Max scaling
                                                          \nscaler = MinMaxScaler()
                                                          \nscaled_data = scaler.fit_transform(data)`,
        }));
      } else if (childdata.option2 === "Standardization") {
        setFormData((prevData) => ({
          ...prevData,
          [id]: `# Standardization
                                                            \nscaler = StandardScaler()
                                                            \nstandardized_data = scaler.fit_transform(data)`,
        }));
      } else {
        setFormData((prevData) => ({ ...prevData, [id]: "" }));
      }
    } else {
      try {
        setFormData((prevData) => ({ ...prevData, [id]: childdata.option1 }));
      } catch (error) {
        if (error instanceof TypeError) {
          console.log("A TypeError occurred:", error);
        } else if (error instanceof RangeError) {
          console.log("A RangeError occurred:", error);
        } else {
          console.log("An error occurred:", error);
        }
      }
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
  console.log("child to parent :", dataIn);
  console.log("from Data :", formData);

  return (
    <>
      <div className=" box-border h-fit w-auto mt-2 border-t-1 border-gray-500"></div>
      <Detaildataclean />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 place-items-stretch mt-2 h-fit w-auto p-2">

        <div className="relative h-auto min-w-[310px] w-full p-5 rounded-lg bg-gradient-to-r from-gray-800 to-gray-800 border-1 border-black">
          <h1 className="text-xl text-white">Data Cleaning</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 grid-rows-none gap-2">
            {componentCodes.map((code) => (
              <div key={code.key}>{code}</div>
            ))}
          </div>
          <button
            onClick={createComponent}
            className="text-gray-500 text-gl rounded shadow-gray-600 hover:text-sky-600 mt-2 bg-transparent absolute right-5 top-0">
            <CiCirclePlus className="text-4xl" />
          </button>
        </div>

        <div className="h-fit w-auto p-5 rounded-lg bg-gradient-to-r from-gray-800 to-gray-800 border-1 border-black">
          <BoxNew code={resultDeleteLine} />
          <div className=" flex flex-row justify-center">
            <Image src={Numpy_img} width={90} height={80} alt="numpy Logo" />
          </div>
        </div>


      </div>
      <div className="block bg-red-500 w-full h-auto">
        {/* <CSVReader /> */}
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

function DataCleaningChild({
  id,
  namelib,
  title,
  elements,
  childToParent,
  deletechild,
}: PropsAdd) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [textIn1, setTextIn1] = useState<string>("");
  const [textIn2, setTextIn2] = useState<string>("");
  const [textIn3, setTextIn3] = useState<string>("");
  const [textIn4, setTextIn4] = useState<string>("");
  const [pathName, setPathName] = useState<string>("");
  const [option1, setOption1] = useState<string>("");
  const [option2, setOption2] = useState<string>("");
  const [options2, setOptions2] = useState<string[]>([]);

  const childToBox = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "Please choose option") {
      setOption1("");
    } else {
      setOption1(event.target.value);
    }
  };


  const options1 = useMemo(() => ["Missing Values", "Data Normalization"], []);
  const optionsMiss = useMemo(
    () => ["Drop rows", "Fill specific value", "Fill mean or median"],
    []
  );
  const optionsNor = useMemo(() => ["Min-Max scaling", "Standardization"], []);

  useEffect(() => {
    childToParent(
      {
        input1: textIn1,
        input2: textIn2,
        input3: textIn3,
        input4: textIn4,
        option1: option1,
        option2: option2,
      },
      id
    );
    console.log("in4 : ", textIn4);
  }, [textIn1, textIn2, textIn3, textIn4, option1, option2, childToParent, id]);

  useEffect(() => {
    if (option1 === options1[0]) {
      setOptions2(optionsMiss);
    } else if (option1 === options1[1]) {
      setOptions2(optionsNor);
    }
  }, [option1, options1, optionsMiss, optionsNor]);

  return (
    <>
      <div className="flex flex-row md:flex-cols align-middle min-h-[35px] w-auto p-0 rounded-lg bg-white mt-1 relative items-center ">
        <div className="flex flex-row gl:flex-col flex-wrap align-middle h-full w-full p-0 rounded-lg bg-white mt-0 items-center">
          <div className="flex flex-nowrap my-2">
            <div className="w-fit h-fit  p-0 ml-5 ">Cleaning Option 1</div>
            <div className="w-fit h-full  p-0 m-0  ">
              <select
                className="box-border h-auto w-auto p-1 rounded-md bg-white ml-5 items-center drop-shadow-lg text-md text-blue-900"
                onChange={childToBox}
                placeholder="Please choose option"
              >
                <option disabled selected>
                  choose option
                </option>
                {options1.map((options1, index) => {
                  return <option key={index}> {options1} </option>;
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-nowrap my-3">
            <div className="w-fit h-fit  p-0 ml-5 flex-none">Option 2</div>

            <div className="w-fit h-full  p-0 m-0 flex-auto ">
              <select
                className="box-border h-auto w-auto p-1 rounded-md bg-white ml-5 items-center drop-shadow-lg text-md text-blue-900"
                onChange={(e) => setOption2(e.target.value)}
                placeholder="Please choose option"
              >
                <option disabled selected>
                  choose option2
                </option>
                {options2.map((options, index) => {
                  return <option key={index}> {options} </option>;
                })}
              </select>
            </div>
          </div>
          {(option2 === "Fill specific value" ||
            option2 === "Fill mean or median") &&
            option1 === "Missing Values" && (
              <div
                id="In1"
                className="bg-white p-0 my-2 w-1/2 h-full flex-auto grid grid-cols-2 max-w-[300px]"
              >
                <div className="w-fit h-fit  p-0 ml-5 "> Column 1: </div>
                <input
                  type="text"
                  placeholder="  input data"
                  className="text-black bg-white border-gray-500 p-0 m-0 shadow-lg w-full"
                  ref={inputRef}
                  onChange={(e) => setTextIn1(e.target.value)}
                />
              </div>
            )}
          {option2 === "Fill mean or median" && (
            <div
              id="In2"
              className="bg-white p-0 my-2 w-1/2 h-full flex-auto grid grid-cols-2"
            >
              <div className="w-fit h-fit  p-0 ml-5 "> Column 2: </div>
              <input
                type="text"
                placeholder="  input data"
                className="text-black bg-white border-gray-500 p-0 m-0 shadow-lg w-full"
                ref={inputRef}
                onChange={(e) => setTextIn2(e.target.value)}
              />
            </div>
          )}
          {option2 === "off" && (
            <div
              id="In3"
              className="bg-white p-0 my-2 w-1/2 h-full flex-auto grid grid-cols-2"
            >
              <div className="w-fit h-fit  p-0 ml-5 "> Column 3: </div>
              <input
                type="text"
                placeholder="  input data"
                className="text-black bg-white border-gray-500 p-0 m-0 shadow-lg w-full"
                ref={inputRef}
                onChange={(e) => setTextIn3(e.target.value)}
              />
            </div>
          )}
          {option2 === "off" && (
            <div
              id="In4"
              className="bg-white p-0 my-2 w-1/2 h-full flex-auto grid grid-cols-2"
            >
              <div className="w-fit h-fit  p-0 ml-5 "> Column 4: </div>
              <input
                type="text"
                placeholder="  input data"
                className="text-black bg-white border-gray-500 p-0 m-0 shadow-lg w-full"
                ref={inputRef}
                onChange={(e) => setTextIn4(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="absolute top-2 right-2 w-fit h-fit p-0 m-0 flex-none">
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
