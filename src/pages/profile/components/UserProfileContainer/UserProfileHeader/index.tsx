import { useSession } from "next-auth/react";
import UserIcon from "../../../../../components/Icons/UserIcon";
import UserProfileHeaderName from "./UserProfileHeaderName";

const UserProfileHeader: React.FC = () => {
    const session = useSession();

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center h-28 ml-10">
                <UserIcon h="20" w="20"/>
                <UserProfileHeaderName name={session.data?.user?.name} />
            </div>
            <div className="h-10 w-full flex justify-between">
                <div>
                    Sub option 1
                </div>
                <div>
                    Sub option 2
                </div>
                <div>
                    Sub option 3
                </div>
            </div>
        </div>
    )
}

export default UserProfileHeader;
