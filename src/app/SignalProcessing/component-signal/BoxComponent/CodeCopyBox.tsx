import React from "react";
import { CopyBlock } from "react-code-blocks";
import { FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";
import { hybrid } from "react-code-blocks";

type Props = {
  code: string;
};

export default function CodeCopyBox({ code }: Props) {
  // const code = `# Hello world in Python 2
  //                 print "Hello World"`
  const language = "python";

  return (
    <>
      <h1 className="text-xl text-white">Code output</h1>
      <CopyBlock
        //   className={'h-full w-auto '}
        text={code}
        language={language}
        showLineNumbers={true}
        wrapLines={true}
        theme={hybrid}
        codeBlock
        icon={<FaCopy />}
        onCopy={() => copy(code)}
      />
    </>
  );
}
