import { use, useEffect, useState } from "react";
import type { NextPage } from "next";
import { getSession, useSession, type GetSessionParams } from "next-auth/react";
import AddShoeModalContainer from "./components/AddShoeModalContainer";
import AddWorkoutModalContainer from "./components/AddWorkoutModalContainer";
import ApplicationContainer from "../../components/Containers/ApplicationContainer";

const Profile: NextPage = () => {
    const [workoutModalIsOpen, setWorkoutModalIsOpen] = useState(false);
    const [shoeModalIsOpen, setShoeModalIsOpen] = useState(false);
    const [clear, setClear] = useState(false);
    const [finalClear, setFinalClear] = useState(false);

    const session = useSession();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setClear(true);
        }, 2000);

        const timeoutTwo = setTimeout(() => {
            setFinalClear(true);
        }, 2500);

    }, []);
    // const handleOpenWorkoutModal = () => {
    //     setWorkoutModalIsOpen((prev) => !prev);
    // };

    // const handleOpenShoeModal = () => {
    //     setShoeModalIsOpen((prev) => !prev);
    // };

    return (
        <ApplicationContainer>
            <h1 className={`text-3xl font-extrabold tracking-tight ${clear ? 'text-transparent' : 'text-white'} transition ease-in-out delay-150 duration-500`}>
                {session.data?.user?.name && !finalClear && `Hello, ${session.data?.user?.name}!`}
            </h1>
            {/* <div onClick={handleOpenWorkoutModal}>Add Workout</div> */}
            {/* <div onClick={handleOpenShoeModal}>Add Shoe</div> */}
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
