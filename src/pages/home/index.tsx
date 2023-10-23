import { type NextPage } from "next";
import { type GetSessionParams, getSession } from "next-auth/react";
import Greeting from "./Greeting";

const Home: NextPage = () => {
  return (
    <div className="w-100 h-100">
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
