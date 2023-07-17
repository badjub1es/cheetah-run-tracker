import React, { type PropsWithChildren } from "react";

const Background: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-b from-[#b8e9cc] via-[#93dbac] to-[#328b21]">
      {children}
    </div>
  );
};

export default Background;
