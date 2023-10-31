import { type NextPage } from "next";
import { type GetSessionParams, getSession } from "next-auth/react";
import Greeting from "./Greeting";
import Shoes from "./Shoes";

const Home: NextPage = () => {
  return (
    <div className="flex h-auto w-auto flex-col gap-4 py-24 px-[16vw]">
      <div>
        <Greeting />
      </div>
      <div className="flex">
        <Shoes />
      </div>
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
