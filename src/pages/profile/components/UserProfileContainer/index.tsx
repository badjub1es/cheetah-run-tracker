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
      className={`my-52 flex h-max w-[60vw] min-w-[48rem] max-w-5xl shrink-0 transform rounded-3xl bg-neutral-200/30 px-10 py-10 shadow-md transition-transform duration-500 ${
        animate ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <UserProfileHeader />
      {/* <UserProfileBio /> */}
    </div>
  );
};

export default UserProfileContainer;
