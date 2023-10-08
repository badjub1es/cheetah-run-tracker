import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { RequestMethod } from "@customTypes/request/RequestMethod";


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
          session.user.id = token.sub
        }
      }
      return session;
    },
    async jwt({ token }) {
      return token;
   },
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (credentials != null) {
          const userCredentials = {
            email: credentials.email,
            password: credentials.password
          };

          const res = await fetch(`https://cheetah.vercel.app/api/user/auth`,
            {
              method: RequestMethod.POST,
              body: JSON.stringify(userCredentials),
              headers: {
                "Content-Type": "application/json"
              }
            }
          );

          const user = await res.json();
            console.log('USER IN', user)
          if (res.ok && user) {
            return user;
          } else {
            return null;
          }
        } else {
          return null;
        }
      }
    })
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
