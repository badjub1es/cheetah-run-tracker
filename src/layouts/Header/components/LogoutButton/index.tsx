import React from "react";
import LogoutIcon from "@components/Icons/LogoutIcon";
import { signOut } from "next-auth/react";

const LogoutButton: React.FC = () => (
  <div className="cursor-pointer" onClick={() => signOut()}>
    <LogoutIcon />
  </div>
);

export default LogoutButton;
