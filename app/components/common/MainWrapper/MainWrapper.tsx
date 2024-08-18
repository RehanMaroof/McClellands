import React from "react";

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper = ({ children }: MainWrapperProps) => {
  return (
    <div className="rounded-[30px] bg-[#FFF] main-wrapper-shadow">
      {children}
    </div>
  );
};

export default MainWrapper;
