import { signIn } from "next-auth/react";
import { AuthProvider } from "@customTypes/authProviders";

export const signInRedirect = (provider: AuthProvider) => {
    signIn(provider, { callbackUrl: "/profile" });
};
