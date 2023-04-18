import Head from "next/head";
import Router from "next/router";
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  if (sessionData) {
    Router.push('/profile');
  }

  return (
    <>
      <Head>
        <title>cheetah</title>
        <meta name="description" content="cheetah habit tracker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
             <span className="text-[hsl(280,100%,70%)]">cheetah</span>
          </h1>
          <p className="font-bold text-4xl text-white m-0 p-0"> habit tracking</p>
          <div className="flex flex-col items-center gap-2">
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

  const signInRedirect = () => {
    signIn('discord', { callbackUrl: '/profile' });
  }

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
    </div>
  );
};
