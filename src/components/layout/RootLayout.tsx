import React from "react";
import Nav from "./Nav";

interface RootLayoutProps {
  children: React.ReactNode;
  nav?: boolean;
  footer?: boolean;
}

const RootLayout = ({
  children,
  nav = true,
  footer = true,
}: RootLayoutProps) => {
  return (
    <div className="bg-primaryBg">
      {nav && <Nav />}
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default RootLayout;
