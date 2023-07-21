import { useEffect, useState } from "react";

const UserProfileContent: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <div
      className={`flex h-[50vh] min-w-[48rem] max-w-6xl shrink-0 transform rounded-b-3xl bg-neutral-200/30 shadow-md transition-transform duration-500 ${
        animate ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      content
    </div>
  );
};

export default UserProfileContent;
