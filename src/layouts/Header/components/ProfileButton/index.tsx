import { useRouter } from "next/router";
import React from "react";
import ProfileIcon from "../../../../components/Icons/ProfileIcon";
import RoutePaths from "../../../../types/routes/RoutePaths";

const ProfileButton: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(RoutePaths.profile)}
    >
      <ProfileIcon />
    </div>
  );
};

export default ProfileButton;
