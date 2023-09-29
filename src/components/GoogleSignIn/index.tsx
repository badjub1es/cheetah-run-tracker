import React from "react";
import Image from "next/image";

interface GoogleSignInProps {
  hover: boolean;
  width: number;
  height: number;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({
  hover,
  width,
  height,
}) => (
  <Image
    alt="google-sign-in"
    src={hover ? "/googleSignInFocus.png" : "/googleSignIn.png"}
    height={height}
    width={width}
  />
);

export default GoogleSignIn;
