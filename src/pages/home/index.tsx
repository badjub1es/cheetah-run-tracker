import { type NextPage } from "next";
import { type GetSessionParams, getSession } from "next-auth/react";
import Greeting from "./Greeting";

const Home: NextPage = () => {
  return (
    <div className="h-auto w-auto py-24 px-[16vw]">
      <Greeting />
    </div>
  );
};

export default Home;

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permenant: false,
      },
    };
  }

  return {
    props: {},
  };
}
