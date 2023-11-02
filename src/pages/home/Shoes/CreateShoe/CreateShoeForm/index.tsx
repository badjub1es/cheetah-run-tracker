import { DistanceUnit } from "@customTypes/DistanceUnit";
import React from "react";

interface CreateShoeFormProps {
  setShowModal: (value: React.SetStateAction<boolean>) => void;
}

const CreateShoeForm: React.FC<CreateShoeFormProps> = ({ setShowModal }) => {
  const [shoeName, setShoeName] = React.useState("");
  const [distance, setDistance] = React.useState(0);
  const [distanceUnit, setDistanceUnit] = React.useState<DistanceUnit>("mi");

  return (
    <>
      <div className="flex flex-col gap-2">
        <div>
          <label
            htmlFor="shoe-name"
            className="block text-sm font-medium text-white dark:text-white"
          >
            Shoe name
          </label>
          <input
            type="text"
            id="shoe-name"
            value={shoeName}
            // onKeyDown={handleSubmit}
            onChange={(e) => setShoeName(e.target.value)}
            className="block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-frost focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
            placeholder="Shoe name*"
            required
          />
        </div>
        <div>
          <label
            htmlFor="distance"
            className="block text-sm font-medium text-white dark:text-white"
          >
            Distance
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              id="distance"
              min={0}
              max={1000}
              value={distance}
              // onKeyDown={handleSubmit}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="block w-full rounded-lg border bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-frost focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Distance"
            />
            <div className="cursor-pointer text-white">
              <div
                onClick={() => setDistanceUnit("mi")}
                className={`${
                  distanceUnit === "mi" ? "text-emerald-500" : "text-white"
                }`}
              >
                mi
              </div>
              <div
                onClick={() => setDistanceUnit("km")}
                className={`${
                  distanceUnit === "km" ? "text-emerald-500" : "text-white"
                }`}
              >
                km
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end rounded-b px-4 pt-4">
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
    </>
  );
};

export default CreateShoeForm;
