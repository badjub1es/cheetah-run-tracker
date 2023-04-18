import React, { PropsWithChildren } from "react";

const ApplicationContainer: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="pl-36 pt-36 flex justify-center">
            {children}
        </div>
    )
};

export default ApplicationContainer;
