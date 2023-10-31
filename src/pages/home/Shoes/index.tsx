import React from "react";
import { trpc } from "utils/trpc";
import ModuleContainer from "@components/ModuleContainer";

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
      <>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative my-6 mx-auto w-auto max-w-3xl">
                <div className="relative flex w-full flex-col rounded-lg border-0 bg-asphalt shadow-lg outline-none focus:outline-none">
                  <div className="flex items-start justify-between rounded-t border-b border-solid border-stone-500/75 p-5">
                    <h3 className="text-3xl font-semibold text-white">
                      Add Shoe
                    </h3>
                    <button
                      className="font-bold text-white"
                      onClick={() => setShowModal(false)}
                    >
                      x
                    </button>
                  </div>
                  <div className="relative flex-auto p-6">{/*footer*/}</div>
                  <div className="flex items-center justify-end rounded-b border-t border-solid border-stone-500/75 p-6">
                    <button
                      className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="mr-1 mb-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Shoe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
          </>
        ) : null}
      </>
    </ModuleContainer>
  );
};

export default Shoes;
