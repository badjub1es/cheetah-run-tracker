import { signIn } from "next-auth/react";
import type { AuthProvider } from "@customTypes/authProviders";

export const signInRedirect = (provider: AuthProvider) => {
    signIn(provider, { callbackUrl: "/profile" });
};
