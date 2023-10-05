import React, { type PropsWithChildren } from "react";

const Background: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-landing-image bg-cover bg-fixed bg-center bg-no-repeat px-[25vw] ">
      {children}
    </div>
  );
};

export default Background;
