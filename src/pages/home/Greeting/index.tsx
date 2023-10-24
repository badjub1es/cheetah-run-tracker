import React from "react";
import { useSession } from "next-auth/react";

const Greeting: React.FC = () => {
  const session = useSession();
  return (
    <p className="inline-block font-bold text-white">
      Welcome, {session.data?.user?.name}
    </p>
  );
};

export default Greeting;
