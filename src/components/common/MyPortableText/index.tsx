import React from "react";
import {
  PortableText,
  PortableTextBlock,
  PortableTextComponents,
} from "@portabletext/react";
import ReactPlayer from "react-player";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-8">{children}</p>,
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => (
      <>
        <h3>{children}</h3>
        <hr className="h-px my-2 border-0 bg-whiteHighlight" />
      </>
    ),
  },
  types: {
    image: ({ value }) => {
      return (
        <div className="flex justify-center">
          <img
            src={value.asset?.url}
            alt={value.alt || ""}
            className="max-h-[700px] object-cover rounded-xl"
          />
        </div>
      );
    },
    vimeoUrl: ({ value }) => {
      console.log(value);
      return (
        <div className="flex justify-center aspect-video rounded-xl overflow-hidden">
          <ReactPlayer
            url={value.url}
            width="100%"
            height="100%"
            controls
            muted
            config={{
              vimeo: {
                playerOptions: {
                  autoplay: true,
                }
              }
            }}
          />
        </div>
      );
    }
  },
};

interface MyPortableTextProps {
  value: PortableTextBlock[];
}

const MyPortableText = ({ value }: MyPortableTextProps) => {
  return <PortableText value={value} components={components} />;
};

export default MyPortableText;
