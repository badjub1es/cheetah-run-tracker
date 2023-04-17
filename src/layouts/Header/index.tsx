import React, { useState } from 'react';
import LogoutButton from './components/LogoutButton';
import UserIconButton from './components/UserIconButton';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ml-5 mt-5 fixed cursor-pointer">
            <div className="relative flex flex-col items-center justify-center">
                <UserIconButton setIsOpen={setIsOpen}/>
                <LogoutButton isOpen={isOpen} />
            </div>
        </div>
    )
};

export default Header;
