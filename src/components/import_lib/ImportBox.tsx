import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

// components
import ImportChild from "@/components/import_lib/ImportChild";
import BoxNew from "../BoxComponent/BoxNew";
// import CSVReader from "@/components/ReadCSV/CSVReader2";
import DetailImport from "@/components/import_lib/detail_Import";

type Props = { };

interface FormData {
  [key: number]: string;
}

export default function ImportBox({}: Props) {
  const [formData, setFormData] = useState<FormData>({});
  const [componentCodes, setComponentCodes] = useState<JSX.Element[]>([]);
  const [componentCounter, setComponentCounter] = useState(0);

  // const myElement = <detail_Import /> as JSX.IntrinsicElements['detail_Import']

  // create component individual box
  const createComponent = () => {
    const id = Date.now();
    const code = (
      <ImportChild
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
        }}
      />
    );
    setComponentCodes((prevCodes) => [...prevCodes, code]);
    setComponentCounter(id);
  };

  // receive value and key from child
  const childToParent = (childdata: any, id: number) => {
    console.log("User Value:", childdata.elements.code1);
    console.log("ID:", id);
    setFormData((prevData) => ({ ...prevData, [id]: childdata.elements.code1 }));
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

  // join code each to all
  const formattedComponents: string = Object.values(formData).join("\n");

  // delete Empty Line
  const deleteEmptyLines = (input: string): string => {
    const lines = input.split("\n");
    const nonEmptyLines = lines.filter((line) => line.trim() !== "");
    return nonEmptyLines.join("\n");
  };

  const resultDeleteLine = deleteEmptyLines(formattedComponents);

  return (
    <>
      {/* <DetailImport /> */}
      <div className=" box-border h-fit w-auto mt-2 border-t-1 border-gray-500">
      <DetailImport />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 place-items-stretch mt-2 h-fit w-auto p-2 items-start">
        <div className="relative box-border h-auto min-w-[310px] w-auto p-5 rounded-lg bg-gradient-to-r from-gray-800 to-gray-800 border-1 border-black">
          <h1 className="text-xl text-white">Import</h1>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 grid-rows-none">
            {componentCodes.map((code) => (
              <div key={code.key}>{code}</div>
            ))}
          </div>
          {/* min-[1024]:grid-cols-1 max-[1360]:grid-cols-1 */}
          <button
            onClick={createComponent}
            className="text-gray-500 text-gl rounded shadow-gray-600 hover:text-sky-600 mt-2 bg-transparent absolute right-5 top-0"
          >
            <CiCirclePlus className="text-4xl" />
          </button>
        </div>

        

        <div className=" rounded-lg bg-gray-100 h-fit w-auto p-5 bg-gradient-to-r from-gray-800 to-gray-800 border-1 border-black">
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
