import React from "react";
import CheetahLogo from "@components/CheetahLogo";
import LogoutButton from "./components/LogoutButton";
import { useSession } from "next-auth/react";
// import AddItemButton from "./components/AddItemButton";
// import HeaderMenuContainer from "./components/HeaderMenuContainer";
// import ProfileButton from "./components/ProfileButton";
// import SettingsButton from "./components/SettingsButton";
// import UserIconButton from "./components/UserIconButton";

const Header: React.FC = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [authorized, setAuthorized] = React.useState(false);
  const session = useSession();

  React.useEffect(() => {
    if (session?.status === "authenticated") {
      setAuthorized(true);
    }
  }, [session]);

  return (
    <div className="fixed mt-5 px-[16vw]">
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
          <div className="flex flex-row items-center justify-center gap-3 text-white">
            <CheetahLogo />
            {authorized && <LogoutButton />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
