import React from 'react';
import { signOut } from 'next-auth/react';
import LogoutIcon from '../../../../components/Icons/LogoutIcon';

const LogoutButton: React.FC = () => {
    return (
        <div
            className="cursor-pointer"
            onClick={() => signOut()}
        >
            <LogoutIcon />
        </div>
    )
};

export default LogoutButton;
