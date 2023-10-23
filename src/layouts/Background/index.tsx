import React, { type PropsWithChildren } from "react";

const Background: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-screen bg-landing-image bg-cover bg-fixed bg-center bg-no-repeat ">
      {children}
    </div>
  );
};

export default Background;
