import React from "react";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

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
      <main className="flex h-auto flex-col items-center justify-center rounded-3xl bg-neutral-200/30 shadow-md">
        <div className="container flex flex-col items-center justify-center gap-5 px-10 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[#031D09]">cheetah</span>
          </h1>
          <p className="m-0 animate-color-wave p-0 text-4xl font-bold">
            {" "}
            habit tracking
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

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();
  const [hover, setHover] = React.useState(false);

  const signInRedirect = () => {
    signIn("discord", { callbackUrl: "/profile" });
  };

  const googleSignInRedirect = () => {
    signIn("google", { callbackUrl: "/profile" });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signInRedirect()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => googleSignInRedirect()}
      >
        {!sessionData && (
          <Image
            alt="google-sign-in"
            src={hover ? "/googleSignInFocus.png" : "/googleSignIn.png"}
            width="200"
            height="100"
          />
        )}
      </button>
    </div>
  );
};
