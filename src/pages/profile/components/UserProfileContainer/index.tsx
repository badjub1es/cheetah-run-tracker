import UserProfileHeader from "./UserProfileHeader";

const UserProfileContainer: React.FC = () => {
  return (
    <div className="flex h-max w-max rounded-md bg-neutral-200/30 shadow-md">
      <UserProfileHeader />
      {/* <UserProfileBio /> */}
    </div>
  );
};

export default UserProfileContainer;
