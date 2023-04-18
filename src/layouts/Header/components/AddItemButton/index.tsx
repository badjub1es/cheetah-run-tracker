import { useRouter } from "next/router";
import React from "react";
import AddItemIcon from "../../../../components/Icons/AddItemIcon";

const AddItemButton: React.FC = () => {
    const router = useRouter();

    return (
        <div
            className="cursor-pointer"
            onClick={() => router.push('/profile/create')}
        >
            <AddItemIcon />
        </div>
    )
};

export default AddItemButton;
