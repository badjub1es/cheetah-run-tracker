import { NextPage } from "next";
import { getSession, GetSessionParams, signOut } from "next-auth/react";
import { useState } from "react";
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
        <div className="min-h-screen bg-gradient-to-b from-[#b8e9cc] via-[#93dbac] to-[#328b21]">
            <div>Profile</div>
            <div onClick={() => signOut()}>Sign out</div>
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
