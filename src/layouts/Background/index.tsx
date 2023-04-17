import React, { PropsWithChildren } from 'react';

const Background: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-[#b8e9cc] via-[#93dbac] to-[#328b21] pl-20 pt-20'>
            {children}
        </div>
    )
}

export default Background;
