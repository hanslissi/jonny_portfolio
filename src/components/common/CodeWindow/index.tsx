import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeWindowProps {
  codeString: string;
  className?: string;
}

const CodeWindow = ({ codeString, className }: CodeWindowProps) => {
  return (
    <div className={className}>
      <div className="relative">
        <div className="absolute -left-16 -top-12">
          <StaticImage
            src="../../../images/decorations/griddy_glow.png"
            alt="grid texture decoration"
            placeholder="blurred"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <div className="flex flex-row bg-[#181818] gap-2 p-3">
            <div className="h-3 aspect-square rounded-sm bg-[#FF615B]" />
            <div className="h-3 aspect-square rounded-sm bg-[#FFBC44]" />
            <div className="h-3 aspect-square rounded-sm bg-[#00C74D]" />
          </div>
          <hr className="h-px w-full bg-whiteHighlight border-0"></hr>
          <SyntaxHighlighter
            language="javascript"
            style={anOldHope}
            showLineNumbers
            className="no-scrollbar"
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeWindow;
