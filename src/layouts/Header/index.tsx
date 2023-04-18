import { useRouter } from 'next/router';
import React, { useState } from 'react';
import AddItemButton from './components/AddItemButton';
import HeaderMenuContainer from './components/HeaderMenuContainer';
import LogoutButton from './components/LogoutButton';
import SettingsButton from './components/SettingsButton';
import UserIconButton from './components/UserIconButton';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="ml-5 mt-5 fixed">
            <div className="relative flex flex-col items-center justify-center">
                <div className="flex items-start gap-2">
                    <div className="flex flex-col justify-center items-center">
                        <UserIconButton setIsOpen={setIsOpen}/>
                        <HeaderMenuContainer isOpen={isOpen}>
                            <AddItemButton />
                            <SettingsButton />
                            <LogoutButton />
                        </HeaderMenuContainer>
                    </div>
                    <h1
                        onClick={() => router.push('/profile')}
                        className="text-1xl font-extrabold tracking-tight text-white sm:text-[2rem] align-middle cursor-pointer hover:text-cyan-500">
                        cheetah
                    </h1>
                </div>
            </div>
        </div>
    )
};

export default Header;
