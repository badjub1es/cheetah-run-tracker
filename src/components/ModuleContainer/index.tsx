import React from "react";

const ModuleContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className="w-100 h-100 rounded-lg bg-white p-2">{children}</div>;
};

export default ModuleContainer;
