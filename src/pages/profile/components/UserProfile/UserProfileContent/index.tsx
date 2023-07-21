import { useEffect, useState } from "react";

const UserProfileContent: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 900);
  }, []);

  return (
    <div
      className={`flex min-w-[48rem] max-w-6xl shrink-0 transform rounded-b-3xl bg-neutral-200/30 shadow-md duration-[900ms] ${
        animate ? "h-[50vh] opacity-100" : "h-[0px]"
      }`}
    >
      content
    </div>
  );
};

export default UserProfileContent;
