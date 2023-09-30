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
    <div
      style={{ width: `${width}px` }}
      className={`flex gap-[19px] overflow-hidden rounded-sm bg-white px-3 py-[9px] text-[14px] shadow max-w-[${width}px] h-[${height}px] text-[#2d2d2d]`}
    >
      <Image alt="google-logo" src={"/googleLogo.png"} width={23} height={23} />
      <p className="flex-nowrap">Sign in with Google</p>
    </div>
  </button>
);

export default GoogleSignIn;
