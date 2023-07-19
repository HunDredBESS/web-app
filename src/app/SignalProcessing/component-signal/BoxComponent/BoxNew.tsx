import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  solarizedlight,
  coldarkDark,
  twilight,
  tomorrow,
  nord,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { FiCopy } from "react-icons/fi";

type Props = {
  code: string;
};

const BoxNew: React.FC<Props> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    copyToClipboard(code); // Custom utility function to copy the code to clipboard
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 500);
  };

  return (
    <>
      <h1 className="text-xl text-white">Code output</h1>
      <div className="relative h-min mb-5  rounded-lg bg-red-600">
        <button
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
          onClick={handleCopyClick}
        >
          {isCopied ? "Copied" : <FiCopy />}
        </button>
        <SyntaxHighlighter
          language="python"
          style={atomDark}
          showLineNumbers
          wrapLines
          lineNumberContainerStyle={{ width: "3rem" }}
          lineNumberStyle={{ color: "#999", paddingRight: "0.5rem" }}
          customStyle={{ borderRadius: "0.5rem", padding: "1rem" }}
          className=" text-lg h-fit mb-5 min-h-0"
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default BoxNew;

// const copyToClipboard = (text: string): void => {
//     navigator.clipboard.writeText(text)
//       .then(() => {
//         console.log('Text copied to clipboard');
//       })
//       .catch((error) => {
//         console.error('Error copying text to clipboard:', error);
//       });
//   };

const copyToClipboard = (text: string): void => {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
};
