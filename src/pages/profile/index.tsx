import { NextPage } from "next";
import { getSession, GetSessionParams, signOut } from "next-auth/react";

const Profile: NextPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#b8e9cc] via-[#93dbac] to-[#328b21]">
            <div>Profile</div>
            <div onClick={() => signOut()}>Sign out</div>
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
