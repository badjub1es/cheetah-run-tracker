import { useRouter } from "next/router";
import React from "react";
import AddItemIcon from "../../../../components/Icons/AddItemIcon";
import EnRoutePaths from "../../../../types/routes/EnRoutePaths";

const AddItemButton: React.FC = () => {
    const router = useRouter();

    return (
        <div
            className="cursor-pointer"
            onClick={() => router.push(EnRoutePaths.profileCreate)}
        >
            <AddItemIcon />
        </div>
    )
};

export default AddItemButton;
