import { useState, useEffect, PropsWithChildren } from "react";
import UserProfileContent from "./UserProfileContent";
import UserProfileHeader from "./UserProfileHeader";

const UserProfileContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <div
      className={`flex h-max w-[70vw] min-w-[48rem] max-w-6xl shrink-0 transform flex-row rounded-t-3xl bg-neutral-200/30 px-10 py-10 shadow-md transition-transform duration-500 ${
        animate ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const UserProfile: React.FC = () => {
  return (
    <div>
      <UserProfileContainer>
        <UserProfileHeader />
      </UserProfileContainer>
      <UserProfileContent />
    </div>
  );
};

export default UserProfile;
