import React from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PublishIcon from "@mui/icons-material/Publish"; // Withdraw button icon
import FileDownloadIcon from "@mui/icons-material/FileDownload"; // Deposit button icon

const RightPanel = () => {
  return (
    <Box
      sx={{
        width: "20%",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "rgba(211, 211, 211, 0.5)",
        height: "100vh",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "16px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Orizon Crypto
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", color: "#555" }}>
            Incise Your Sale
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <IconButton
            sx={{
              backgroundColor: "#fff",
              padding: "8px",
              borderRadius: "50%",
            }}
          >
            <SearchIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#fff",
              padding: "8px",
              borderRadius: "50%",
            }}
          >
            <NotificationsIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          width: "calc(100% - 32px)",
          height: "100px",
          backgroundColor: "blue",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          position: "relative",
        }}
      >
        <Box>
          <Typography variant="body2">My Portfolio</Typography>
          <Typography variant="h6">$50,000</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "4px",
          }}
        >
          <SignalCellularAltIcon sx={{ color: "#fff" }} />
          <Typography variant="body2">+25%</Typography>
        </Box>

        {/* Buttons at the Bottom */}
        <Box
          sx={{
            position: "absolute",
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-50%)", // Center the buttons
            display: "flex",
            gap: "16px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "black",
              width: "120px",
              height: "40px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ddd",
              },
            }}
            startIcon={<FileDownloadIcon />}
          >
            Deposit
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "black",
              width: "120px",
              height: "40px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ddd",
              },
            }}
            startIcon={<PublishIcon />}
          >
            Withdraw
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RightPanel;
