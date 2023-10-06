import React from "react";
import Tooltip from "@components/Tooltip";
import CheetahLogo from "@components/CheetahLogo";
import LogoutButton from "./components/LogoutButton";
import MenuDropDown from "./components/MenuDropDown";
import { useSession } from "next-auth/react";

const Header: React.FC = () => {
  const session = useSession();
  const [authorized, setAuthorized] = React.useState(false);

  React.useEffect(() => {
    if (session?.status === "authenticated") {
      setAuthorized(true);
    }
  }, [session]);

  return (
    <div className="fixed mt-5 w-full px-[16vw]">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-row items-center justify-center gap-3 text-white">
          <CheetahLogo />
          {authorized && (
            <Tooltip direction="bottom" textColor="white" text="Logout">
              <LogoutButton />
            </Tooltip>
          )}
        </div>
        {authorized && <MenuDropDown />}
      </div>
    </div>
  );
};

export default Header;
