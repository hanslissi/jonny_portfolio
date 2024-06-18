import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeWindowProps {
    codeString: string;
    className?: string;

}

const CodeWindow = ({ codeString, className }: CodeWindowProps) => {
    
    return (
        <div className={className}>
            <div className="relative">
                <StaticImage
                    src="../../../images/decorations/griddy_glow.png"
                    alt="grid texture decoration"
                    className="absolute -left-16 -top-12"
                />
                <div className="relative rounded-xl overflow-hidden">
                    <div className="flex flex-row bg-[#181818] gap-2 p-3">
                        <div className="h-3 aspect-square rounded-full bg-[#FF615B]" />
                        <div className="h-3 aspect-square rounded-full bg-[#FFBC44]" />
                        <div className="h-3 aspect-square rounded-full bg-[#00C74D]" />
                    </div>
                    <hr className="h-px w-full bg-whiteHighlight border-0"></hr>
                    <div className="">
                        <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
                            {codeString}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default CodeWindow;