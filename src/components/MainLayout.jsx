import React from "react";
import { Box } from "@mui/material";
import LeftSidebar from "./LeftSidebar";
import ProfileAndDropdown from "./ProfileAndDropdown";

import RightPanel from "./RightPanel";
import BoxCard from "./BoxCard";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <LeftSidebar />
      <Box sx={{ width: "60%", padding: "16px" }}>
        <ProfileAndDropdown />
        <BoxCard />
      </Box>
      <RightPanel />
    </Box>
  );
};

export default MainLayout;
