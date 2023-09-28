import React, { type PropsWithChildren } from "react";

const Background: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen items-start justify-center bg-asphalt ">
      {children}
    </div>
  );
};

export default Background;
