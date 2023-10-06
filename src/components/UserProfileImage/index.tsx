interface UserProfileImageProps {
  src: string;
  height?: number;
  width?: number;
  borderStyle?: string;
}

const UserProfileImage: React.FC<UserProfileImageProps> = ({
  src = "",
  height = 85,
  width = 85,
  borderStyle = "",
}) => {
  return (
    <div
      className={`h-[${height}px] w-[${width}px] ${borderStyle} overflow-hidden rounded-full`}
    >
      <img height={height} width={width} src={src} />
    </div>
  );
};

export default UserProfileImage;
