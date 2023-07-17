import { useRouter } from "next/router";
import React, { useState } from "react";
import EnRoutePaths from "../../types/routes/EnRoutePaths";
import AddItemButton from "./components/AddItemButton";
import HeaderMenuContainer from "./components/HeaderMenuContainer";
import LogoutButton from "./components/LogoutButton";
import ProfileButton from "./components/ProfileButton";
import SettingsButton from "./components/SettingsButton";
import UserIconButton from "./components/UserIconButton";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="fixed ml-5 mt-5">
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex items-start gap-2">
          <div className="flex flex-col items-center justify-center">
            <UserIconButton setIsOpen={setIsOpen} />
            <HeaderMenuContainer isOpen={isOpen}>
              <ProfileButton />
              <AddItemButton />
              <SettingsButton />
              <LogoutButton />
            </HeaderMenuContainer>
          </div>
          <h1
            onClick={() => router.push(EnRoutePaths.profile)}
            className="text-1xl cursor-pointer align-middle font-extrabold tracking-tight text-white hover:text-cyan-500 sm:text-[2rem]"
          >
            cheetah
          </h1>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
