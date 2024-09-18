import { React, useState } from "react";
import PublicIcon from "@mui/icons-material/Public";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import SendIcon from "@mui/icons-material/Send";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import HistoryIcon from "@mui/icons-material/History";
import { Box, Divider, IconButton } from "@mui/material";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import AddCommentIcon from "@mui/icons-material/AddComment";

const LeftSidebar = () => {
  const [activeIcon, setActiveIcon] = useState("Home");

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName); // Set the clicked icon as active
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          width: "25%",
          backgroundColor: "#f4f4f4",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <PublicIcon
          sx={{
            marginBottom: "16px",
            fontSize: "40px", // Increase size
            color: "blue", // Set color to blue
          }}
        />

        <IconButton onClick={() => handleIconClick("Home")}>
          <HomeIcon sx={{ color: activeIcon === "Home" ? "blue" : "black" }} />
        </IconButton>

        <PersonIcon sx={{ marginBottom: "16px" }} />
        <MessageIcon sx={{ marginBottom: "16px" }} />
        <SettingsIcon sx={{ marginBottom: "16px" }} />
        <SendIcon sx={{ marginBottom: "16px" }} />
        <StarOutlineIcon sx={{ marginBottom: "16px" }} />
        <HistoryIcon sx={{ marginBottom: "16px" }} />
        <ImportExportIcon sx={{ marginBottom: "16px" }} />

        <AddCommentIcon
          sx={{
            marginTop: "140px",
            fontSize: "40px", // Increase size
            color: "blue", // Set color to blue
          }}
        />
      </Box>

      <Divider
        orientation="vertical"
        sx={{
          borderWidth: "2px",
          borderColor: "blue",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default LeftSidebar;
