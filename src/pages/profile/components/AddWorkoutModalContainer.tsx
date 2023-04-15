import { PropsWithChildren } from "react";

const AddWorkoutModalContainer: React.FC<PropsWithChildren> = () => {
    return (
        <>
            <div className="container flex flex-col gap-5">
                <input type="number"></input>
                <input placeholder="MM:SS"></input>
                <button>Save Workout</button>
            </div>
        </>
    )
};

export default AddWorkoutModalContainer;
