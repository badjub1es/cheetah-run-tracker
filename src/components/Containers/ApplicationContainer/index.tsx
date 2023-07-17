import React, { PropsWithChildren } from "react";

const ApplicationContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex justify-center pl-36 pt-36">{children}</div>;
};

export default ApplicationContainer;
