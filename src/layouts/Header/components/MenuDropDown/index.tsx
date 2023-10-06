import { useSession } from "next-auth/react";
import UserProfileImage from "@components/UserProfileImage";

const MenuDropDown: React.FC = () => {
  const session = useSession();
  return (
    <div className="h-max w-max cursor-pointer rounded-md border-2 border-solid border-white bg-frost bg-white p-2">
      <UserProfileImage
        src={session.data?.user?.image || ""}
        height={27}
        width={27}
        borderStyle="border-2 border-solid border-white"
      />
    </div>
  );
};

export default MenuDropDown;
