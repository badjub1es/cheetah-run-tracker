import React, { PropsWithChildren } from "react";

const ApplicationContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex justify-start">{children}</div>;
};

export default ApplicationContainer;
