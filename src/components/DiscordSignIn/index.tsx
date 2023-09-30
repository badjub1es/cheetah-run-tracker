import React from "react";
import Image from "next/image";
import { AuthProvider } from "@customTypes/authProviders";
import { signInRedirect } from "utils/signIn";

interface DiscordSignInProps {
  width: number;
  height: number;
}

const DiscordSignIn: React.FC<DiscordSignInProps> = ({ width, height }) => (
  <button onClick={() => signInRedirect(AuthProvider.DISCORD)}>
    <div
      style={{ width: `${width}px` }}
      className={`flex gap-[19px] overflow-hidden rounded-sm bg-blurple px-3 py-[9px] text-[14px] shadow max-w-[${width}px] h-[${height}px] text-white`}
    >
      <Image
        alt="discord-logo"
        src={"/discordMarkWhite.svg"}
        width={23}
        height={23}
      />
      <p className="flex-nowrap">Sign in with Discord</p>
    </div>
  </button>
);

export default DiscordSignIn;
