import { useRouter } from 'next/router';
import React from 'react';
import ProfileIcon from '../../../../components/Icons/ProfileIcon';
import EnRoutePaths from '../../../../types/routes/EnRoutePaths';

const ProfileButton: React.FC = () => {
    const router = useRouter();

    return (
        <div
            className="cursor-pointer"
            onClick={() => router.push(EnRoutePaths.profile)}>
            <ProfileIcon />
        </div>
    )
};

export default ProfileButton;
