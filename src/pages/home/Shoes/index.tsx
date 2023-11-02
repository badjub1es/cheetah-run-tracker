import React from "react";
import CreateShoe from "./CreateShoe";
import ModuleContainer from "@components/ModuleContainer";
import { trpc } from "utils/trpc";

const Shoes: React.FC = () => {
  const shoes = trpc.shoes.getAllShoes.useQuery();
  const [userHasShoes, setUserHasShoes] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    if (Array.isArray(shoes)) {
      setUserHasShoes(shoes.length > 0);
    }
  }, [shoes]);

  return (
    <ModuleContainer>
      <p className="inline-block w-auto font-bold text-white">Shoes</p>
      {!userHasShoes && (
        <div className="text-sm text-white">Add First Shoe</div>
      )}
      <button
        onClick={() => setShowModal(true)}
        className="rounded bg-frost px-4 font-bold text-white hover:bg-asphalt"
      >
        +
      </button>
      {showModal ? <CreateShoe setShowModal={setShowModal} /> : null}
    </ModuleContainer>
  );
};

export default Shoes;
