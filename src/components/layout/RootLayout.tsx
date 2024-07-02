import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="bg-primaryBg">
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default RootLayout;
