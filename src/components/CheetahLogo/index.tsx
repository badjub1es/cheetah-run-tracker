import { useRouter } from "next/router";
import EnRoutePaths from "@customTypes/routes/EnRoutePaths";

const CheetahLogo: React.FC = ({}) => {
  const router = useRouter();

  return (
    <h1
      onClick={() => router.push(EnRoutePaths.profile)}
      className="text-1xl cursor-pointer align-middle font-extrabold tracking-tight text-white sm:text-[2rem]"
    >
      cheetah
    </h1>
  );
};

export default CheetahLogo;
