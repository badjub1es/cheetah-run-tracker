import React from "react";
import Image from "next/image";
import { AuthProvider } from "@customTypes/authProviders";
import { signInRedirect } from "utils/signIn";

interface DiscordSignInProps {
  width: number;
  height: number;
}

const DiscordSignIn: React.FC<DiscordSignInProps> = ({ width, height }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => signInRedirect(AuthProvider.DISCORD)}
    >
      <div
        className={`flex gap-[19px] rounded-sm bg-blurple px-3 py-2 text-[14px] text-base w-[${width}] h-[${height}] text-white`}
      >
        <Image
          alt="discord-logo"
          src={"/discordMarkWhite.svg"}
          width={23}
          height={23}
        />
        <p>Sign in with Discord</p>
      </div>
    </button>
  );
};

export default DiscordSignIn;
