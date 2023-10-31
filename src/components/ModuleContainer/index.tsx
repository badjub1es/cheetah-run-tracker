import React from "react";

const ModuleContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg bg-stone-500/75 p-3">
      {children}
    </div>
  );
};

export default ModuleContainer;
