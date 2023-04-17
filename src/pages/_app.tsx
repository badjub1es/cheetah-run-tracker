import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Header from "../layouts/Header";
import Background from "../layouts/Background";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Header />
      <Background>
        <Component {...pageProps} />
      </Background>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
