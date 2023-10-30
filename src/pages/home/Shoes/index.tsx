import { trpc } from "utils/trpc";

const Shoes: React.FC = () => {
  const _ = trpc.shoes.getAllShoes.useQuery();
  return <></>;
};

export default Shoes;
