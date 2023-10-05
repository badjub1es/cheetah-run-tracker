import React, { type PropsWithChildren } from "react";

const Background: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url('./cheetahBackground.png')] px-[25vw] ">
      {children}
    </div>
  );
};

export default Background;
