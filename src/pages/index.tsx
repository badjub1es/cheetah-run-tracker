import React from "react";
import Head from "next/head";
import Router from "next/router";
import GoogleSignIn from "@components/GoogleSignIn";
import DiscordSignIn from "@components/DiscordSignIn";
import { useSession } from "next-auth/react";
import { type NextPage } from "next";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const subHeadingArray = [
    "track runs",
    "map routes",
    "set goals",
    "visualize data",
    "pet a cat",
    "say hello",
    "eat a popsicle",
  ];
  const [subHeader, setSubHeader] = React.useState(subHeadingArray[0]);

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index === subHeadingArray.length) {
        index = 0;
      }
      setSubHeader(subHeadingArray[index]);
      index++;
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (sessionData) {
    Router.push("/profile");
  }

  return (
    <>
      <Head>
        <title>cheetah</title>
        <meta name="description" content="cheetah habit tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-auto flex-col justify-center rounded-3xl bg-neutral-200/30 shadow-md">
        <div className="flex flex-col items-center justify-center gap-5 px-10 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-white">cheetah</span>
          </h1>
          <p className="m-0 animate-[bounce_1.2s_ease-in-out_infinite] p-0 text-4xl font-bold text-ice">
            {subHeader}
          </p>
          <div className="flex h-auto w-auto flex-col items-center gap-2">
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-4">
    <DiscordSignIn width={200} height={50} />
    <GoogleSignIn width={205} height={100} />
  </div>
);
