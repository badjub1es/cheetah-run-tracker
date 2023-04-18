import React from "react";

const CreateShoe: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-72 h-32 bg-white/30 rounded-2xl shadow-lg cursor-pointer hover:shadow-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white align-middle">
                Create new shoe
            </h2>
        </div>
    )
};

export default CreateShoe;
