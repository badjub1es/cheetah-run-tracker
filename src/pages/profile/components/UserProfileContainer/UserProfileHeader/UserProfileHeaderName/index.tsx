export interface UserProfieHeaderNameProps {
  name?: string | undefined | null;
}

const UserProfileHeaderName: React.FC<UserProfieHeaderNameProps> = ({
  name,
}) => {
  return (
    <div className="ml-5 text-3xl font-extrabold text-white ">{name || ""}</div>
  );
};

export default UserProfileHeaderName;
