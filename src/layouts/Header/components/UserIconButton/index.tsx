import React from 'react';
import UserIcon from '../../../../components/Icons/UserIcon';

interface UserIconButtonProps {
    setIsOpen: ((fn: (prev: any) => boolean) => void)
}

const UserIconButton: React.FC<UserIconButtonProps> = ({ setIsOpen }) => {
    return (
        <div className="cursor-pointer z-10" onClick={() => setIsOpen((prev) => !prev)}>
            <UserIcon />
        </div>
    )
};

export default UserIconButton;
