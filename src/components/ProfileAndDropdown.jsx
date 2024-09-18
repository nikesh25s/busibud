import React from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  MenuItem,
} from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopy";
import Image from "../assest/450.jpg";

const ProfileAndDropdown = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={Image}
          alt="Profile"
          style={{
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            border: "2px solid black",
          }}
        />
        <Typography variant="h6" sx={{ marginLeft: "8px", fontWeight: "600" }}>
          Good Morning Nikesh !
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          select
          variant="outlined"
          size="small"
          sx={{ marginLeft: "47px", width: "200px" }}
        >
          <MenuItem value="" disabled>
            Choose Account
          </MenuItem>

          <MenuItem value={1}>Account 1</MenuItem>
          <MenuItem value={2}>Account 2</MenuItem>
        </TextField>
        <IconButton sx={{ color: "blue" }}>
          {" "}
          <CopyIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProfileAndDropdown;
