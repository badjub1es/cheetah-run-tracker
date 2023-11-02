import CreateShoeForm from "./CreateShoeForm";

interface CreateShoeProps {
  setShowModal: (value: React.SetStateAction<boolean>) => void;
}

const CreateShoe: React.FC<CreateShoeProps> = ({ setShowModal }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-3xl">
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-asphalt shadow-lg outline-none focus:outline-none">
            <div className="flex items-start justify-between rounded-t border-b border-solid border-stone-500/75 p-5">
              <h3 className="text-3xl font-semibold text-white">Add Shoe</h3>
              <button
                className="font-bold text-white"
                onClick={() => setShowModal(false)}
              >
                x
              </button>
            </div>
            <div className="relative flex-auto p-6">
              <CreateShoeForm setShowModal={setShowModal} />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-50"></div>
    </>
  );
};

export default CreateShoe;
