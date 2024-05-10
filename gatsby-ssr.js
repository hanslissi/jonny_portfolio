import React from "react";
import RootLayout from "./src/components/layout/RootLayout";

export const wrapPageElement = ({ element, props }) => {
  return <RootLayout {...props}>{element}</RootLayout>;
};
