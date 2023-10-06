import React from "react";
import Image from "next/image";
// import { AuthProvider } from "@customTypes/authProviders";
// import { signInRedirect } from "utils/signIn";

interface EmailSignInProps {
  width: number;
  height: number;
}

const EmailSignIn: React.FC<EmailSignInProps> = ({ width, height }) => (
  <button onClick={() => null}>
    <div
      style={{ width: `${width}px` }}
      className={`flex gap-[19px] overflow-hidden rounded-sm bg-white px-3 py-[9px] text-[14px] shadow max-w-[${width}px] h-[${height}px] text-asphalt`}
    >
      <Image
        alt="email-logo"
        src={"/emailOutlined.png"}
        width={23}
        height={23}
      />
      <p className="flex-nowrap">Sign in with Email</p>
    </div>
  </button>
);

export default EmailSignIn;
