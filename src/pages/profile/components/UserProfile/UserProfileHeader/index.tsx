import { useSession } from "next-auth/react";
import UserProfileImage from "@components/UserProfileImage";
import UserProfileHeaderName from "./UserProfileHeaderName";

const UserProfileHeader: React.FC = () => {
  const session = useSession();

  return (
    <div className="flex w-full flex-col">
      <div className="ml-10 flex h-28 items-center">
        <UserProfileImage src={session.data?.user?.image || ""} />
        <UserProfileHeaderName name={session.data?.user?.name} />
      </div>
    </div>
  );
};

export default UserProfileHeader;
