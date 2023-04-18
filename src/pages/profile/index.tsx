import { useState } from "react";
import type { NextPage } from "next";
import { getSession, type GetSessionParams } from "next-auth/react";
import AddShoeModalContainer from "./components/AddShoeModalContainer";
import AddWorkoutModalContainer from "./components/AddWorkoutModalContainer";

const Profile: NextPage = () => {
    const [workoutModalIsOpen, setWorkoutModalIsOpen] = useState(false);
    const [shoeModalIsOpen, setShoeModalIsOpen] = useState(false);

    const handleOpenWorkoutModal = () => {
        setWorkoutModalIsOpen((prev) => !prev);
    };

    const handleOpenShoeModal = () => {
        setShoeModalIsOpen((prev) => !prev);
    };

    return (
        <div className="pl-20 pt-20">
            <div onClick={handleOpenWorkoutModal}>Add Workout</div>
            <div onClick={handleOpenShoeModal}>Add Shoe</div>
            {workoutModalIsOpen && <AddWorkoutModalContainer />}
            {shoeModalIsOpen && <AddShoeModalContainer />}
        </div>
    )
}

export default Profile;

export async function getServerSideProps(context: GetSessionParams | undefined) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permenant: false
            }
        }
    }

    return {
        props: {}
    }
}
