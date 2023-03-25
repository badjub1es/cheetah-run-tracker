import { NextPage } from "next";
import { getSession, GetSessionParams } from "next-auth/react";

const Profile: NextPage = () => {
    return (
        <div>Profile</div>
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
