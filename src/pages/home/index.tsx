import { type NextPage } from "next";
import { type GetSessionParams, getSession } from "next-auth/react";

const Home: NextPage = () => {
  return <>Home</>;
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
