import React from "react";

const ModuleContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="inline-block rounded-lg bg-neutral-200/75 p-3">
      {children}
    </div>
  );
};

export default ModuleContainer;
