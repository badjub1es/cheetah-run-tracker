import React from "react";
import Image from "next/image";
import { signInRedirect } from "utils/signIn";
import { AuthProvider } from "@customTypes/authProviders";

interface GoogleSignInProps {
  width: number;
  height: number;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({ width, height }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => signInRedirect(AuthProvider.GOOGLE)}
    >
      <Image
        alt="google-sign-in"
        src={hover ? "/googleSignInFocus.png" : "/googleSignIn.png"}
        height={height}
        width={width}
      />
    </button>
  );
};

export default GoogleSignIn;
