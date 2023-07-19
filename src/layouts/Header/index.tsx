import React, { useState } from "react";
import CheetahLogo from "@components/CheetahLogo";
import LogoutButton from "./components/LogoutButton";
// import AddItemButton from "./components/AddItemButton";
// import HeaderMenuContainer from "./components/HeaderMenuContainer";
// import ProfileButton from "./components/ProfileButton";
// import SettingsButton from "./components/SettingsButton";
// import UserIconButton from "./components/UserIconButton";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed ml-5 mt-5">
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex items-start gap-2">
          {/* <div className="flex flex-col items-center justify-center">
            <UserIconButton setIsOpen={setIsOpen} />
            <HeaderMenuContainer isOpen={isOpen}>
              <ProfileButton />
              <AddItemButton />
              <SettingsButton />
              <LogoutButton />
            </HeaderMenuContainer>
          </div> */}
          <div className="flex flex-row items-center justify-center gap-3">
            <CheetahLogo />
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
