import { useEffect, useState } from "react";

const UserProfileContent: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 600);
  }, []);

  return (
    <div className="flex h-[50vh] min-w-[48rem] max-w-6xl shrink-0 rounded-b-3xl bg-neutral-200/30 shadow-md">
      content
    </div>
  );
};

export default UserProfileContent;
