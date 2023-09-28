import React, { type PropsWithChildren } from "react";

const Background: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-asphalt flex h-screen w-screen items-start justify-center">
      {children}
    </div>
  );
};

export default Background;
