import React from 'react';
import { signOut } from 'next-auth/react';
import LogoutIcon from '../../../../components/Icons/LogoutIcon';

interface LogoutButtonProps {
    isOpen: boolean;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ isOpen }) => {
    return (
        <div
            onClick={() => signOut()}
            className={` bg-white rounded-b-lg pt-1 ${isOpen ? 'h-20' : 'h-0 pt-0'} slide-in-out duration-300 overflow-hidden -translate-y-2`}
        >
            <LogoutIcon />
        </div>
    )
};

export default LogoutButton;
