import React from "react";

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
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default RootLayout;
