import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "../../../env/server.mjs";
import { RequestMethod } from "@customTypes/request/RequestMethod";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "db";
import { Adapter } from "next-auth/adapters";


export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user, token }) {
      if (session.user) {
        if (user?.id) {
          session.user.id = user.id;
        }
        if (user?.email) {
          session.user.email = user.email;
        }
        if (token?.sub) {
          session.user.id = token.sub;
        }
      }
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
  adapter: DrizzleAdapter(db) as Adapter<boolean>,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials != null) {
          const userCredentials = {
            email: credentials.email,
            password: credentials.password,
          };

          const res = await fetch(`${process.env.BASE_URL}/api/user/auth`, {
            method: RequestMethod.POST,
            body: JSON.stringify(userCredentials),
            headers: {
              "Content-Type": "application/json",
            },
          });

          const user = await res.json();

          if (res.status === 401) {
            throw Error("Invalid credentials.");
          }
          if (res.ok && user) {
            return user;
          }
        } else {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
