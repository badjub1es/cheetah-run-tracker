import Image from "next/image";
import EnRoutePaths from "@customTypes/routes/EnRoutePaths";
import { useRouter } from "next/router";

const CheetahLogo: React.FC = ({}) => {
  const router = useRouter();

  return (
    <>
      <h1
        onClick={() => router.push(EnRoutePaths.profile)}
        className="text-1xl cursor-pointer align-middle font-extrabold tracking-tight text-white sm:text-[2rem]"
      >
        cheetah
      </h1>
      <img
        src="./cheetahLogoBgRemoved.png"
        alt="cheetah-logo"
        className="h-[15px] sm:h-[25px]"
      />
    </>
  );
};

export default CheetahLogo;
