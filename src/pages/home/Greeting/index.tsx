import ModuleContainer from "@components/ModuleContainer";
import { useSession } from "next-auth/react";
import React from "react";

const Greeting: React.FC = () => {
  const session = useSession();
  return (
    <ModuleContainer>
      <p>Welcome, {session.data?.user?.name}</p>
    </ModuleContainer>
  );
};

export default Greeting;
