"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

import BoxNew from "../../BoxComponent/BoxNew";
import Detaildataclean from "./detail_DataVizScatter";

// import Image from "next/image";
// import Numpy_img from "public/signal/numpy_logo.png";

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

    if (childdata.option === "Heatmap") {
      setFormData((prevData) => ({
        ...prevData,
        [id]: `# Heatmap see Pic5
              \nsns.heatmap(train_df.corr()) `,
      }));
    } else if (childdata.option === "Pairplot") {
      setFormData((prevData) => ({
        ...prevData,
        [id]: `# Pairplot see Pic6
              \nsns.pairplot(train_df,hue='Survived') `,
      }));
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
          <h1 className="text-xl text-white">Data Visualization</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 grid-rows-none gap-2">
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

        <div className="h-fit w-auto p-5 rounded-lg bg-gradient-to-r from-gray-800 to-gray-800 border-1 border-black">
          <BoxNew code={resultDeleteLine} />
          {/* <div className=" flex flex-row justify-center">
            <Image src={Numpy_img} width={90} height={80} alt="numpy Logo" />
          </div> */}
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
  const [pathName, setPathName] = useState<string>("");
  const [option, setOption] = useState<string>("");

  const childToBox = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "Please choose option") {
      setOption("");
    } else {
      setOption(event.target.value);
    }
  };

  useEffect(() => {
    childToParent(
      {
        option: option,
      },
      id
    );
  }, [option, childToParent, id]);

  const options: string[] = [
    "Heatmap",
    "Pairplot",
  ];

  return (
    <>
      <div className="flex flex-row md:flex-cols align-middle h-auto w-auto p-2 rounded-lg bg-white mt-1">
        <div className="w-auto h-fit  p-0 ml-5 flex-none">Data Visualization : </div>
        <div className="w-fit h-full  p-0 ml-5 flex-auto ">
          <select
            className="box-border h-auto w-auto p-1 rounded-md bg-white ml-1 items-center drop-shadow-lg text-md"
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
