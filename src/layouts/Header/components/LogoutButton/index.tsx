import React from "react";
import { signOut, useSession } from "next-auth/react";
import LogoutIcon from "../../../../components/Icons/LogoutIcon";

const LogoutButton: React.FC = () => {
  const session = useSession();

  if (session?.status === "unauthenticated") {
    return <></>;
  }

  return (
    <div className="cursor-pointer" onClick={() => signOut()}>
      <LogoutIcon />
    </div>
  );
};

export default LogoutButton;
