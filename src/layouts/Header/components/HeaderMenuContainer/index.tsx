import React, { type PropsWithChildren } from "react";

interface HeaderMenuContainerProps extends PropsWithChildren {
    isOpen: boolean;
}

const HeaderMenuContainer: React.FC<HeaderMenuContainerProps> = ({ children, isOpen }) => {
    return (
        <div className={`flex flex-col gap-1.5 bg-white rounded-b-lg ${isOpen ? 'h-auto w-6 pt-1' : 'h-0 w-0 pt-0'} slide-in-out duration-500 overflow-hidden -translate-y-2`}>
            {children}
        </div>
    )
};

export default HeaderMenuContainer;
