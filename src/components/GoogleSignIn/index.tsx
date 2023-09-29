import React from "react";
import Image from "next/image";
import { signInRedirect } from "utils/signIn";
import { AuthProvider } from "@customTypes/authProviders";

interface GoogleSignInProps {
  width: number;
  height: number;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({ width, height }) => (
  <button onClick={() => signInRedirect(AuthProvider.GOOGLE)}>
    <Image
      alt="google-sign-in"
      src={"/googleSignIn.png"}
      height={height}
      width={width}
    />
  </button>
);

export default GoogleSignIn;
