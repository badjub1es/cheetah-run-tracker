interface UserProfileImageProps {
  src: string;
}

const UserProfileImage: React.FC<UserProfileImageProps> = ({ src = "" }) => {
  return (
    <div className="h-[85px] w-[85px] overflow-hidden rounded-full">
      <img src={src} />
    </div>
  );
};

export default UserProfileImage;
