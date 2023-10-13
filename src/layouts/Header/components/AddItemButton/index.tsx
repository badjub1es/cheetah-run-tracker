import { useRouter } from "next/router";
import React from "react";
import AddItemIcon from "../../../../components/Icons/AddItemIcon";
import RoutePaths from "../../../../types/routes/RoutePaths";

const AddItemButton: React.FC = () => {
  const router = useRouter();

  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(RoutePaths.profileCreate)}
    >
      <AddItemIcon />
    </div>
  );
};

export default AddItemButton;
