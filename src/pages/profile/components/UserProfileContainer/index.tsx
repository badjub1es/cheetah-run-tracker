import { useState, useEffect } from "react";
import UserProfileHeader from "./UserProfileHeader";

const UserProfileContainer: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <div
      className={`flex h-max w-[60vw] shrink-0 transform rounded-md bg-neutral-200/30 shadow-md transition-transform duration-500 ${
        animate ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <UserProfileHeader />
      {/* <UserProfileBio /> */}
    </div>
  );
};

export default UserProfileContainer;
