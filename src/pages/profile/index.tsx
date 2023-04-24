import { use, useEffect, useState } from "react";
import type { NextPage } from "next";
import { getSession, useSession, type GetSessionParams } from "next-auth/react";
import AddShoeModalContainer from "./components/AddShoeModalContainer";
import AddWorkoutModalContainer from "./components/AddWorkoutModalContainer";
import ApplicationContainer from "../../components/Containers/ApplicationContainer";
import UserProfileContainer from "./components/UserProfileContainer";

const Profile: NextPage = () => {
    const [workoutModalIsOpen, setWorkoutModalIsOpen] = useState(false);
    const [shoeModalIsOpen, setShoeModalIsOpen] = useState(false);

    const session = useSession();

    // const handleOpenWorkoutModal = () => {
    //     setWorkoutModalIsOpen((prev) => !prev);
    // };

    // const handleOpenShoeModal = () => {
    //     setShoeModalIsOpen((prev) => !prev);
    // };

    return (
        <ApplicationContainer>
            <UserProfileContainer />
            {workoutModalIsOpen && <AddWorkoutModalContainer />}
            {shoeModalIsOpen && <AddShoeModalContainer />}
        </ApplicationContainer>
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
