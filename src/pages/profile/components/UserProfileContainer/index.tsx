import UserProfileHeader from "./UserProfileHeader";

const UserProfileContainer: React.FC = () => {
    return (
        <div className='flex w-3/5 h-max bg-white rounded-md'>
            <UserProfileHeader />
            {/* <UserProfileBio /> */}
        </div>
    )
};

export default UserProfileContainer;
