import React from "react";
import Image from "next/image";
import { signInRedirect } from "utils/signIn";
import { AuthProvider } from "@customTypes/authProviders";

interface GoogleSignInProps {
  width: number;
  height: number;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({
  width = 200,
  height = 100,
}) => (
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
