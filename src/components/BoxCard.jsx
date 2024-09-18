import React from "react";
import { Box, Typography, Card } from "@mui/material";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalMallIcon from "@mui/icons-material/LocalMall";

const BoxCard = () => {
  return (
    <Box
      sx={{
        height: "40%",
        marginTop: "20px",
        width: "90%",
        backgroundColor: "#e0f7fa",
        padding: "16px",
        position: "relative",
      }}
    >
      {/* Top Left: Total Earnings */}
      <Box
        sx={{
          position: "absolute",
          top: "16px",
          left: "16px",
          textAlign: "left",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: "#D3D3D3",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            <TrendingUpIcon />
          </Box>
          <Typography sx={{ marginLeft: "8px" }}>Total Earnings</Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ marginLeft: "55px", fontWeight: "600", marginTop: "-17px" }}
        >
          $100,000
        </Typography>
      </Box>

      {/* Bottom Left: Goal of this Month */}
      <Box
        sx={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          textAlign: "left",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: "#f3f6f4",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            <WidgetsIcon />
          </Box>
          <Typography sx={{ marginLeft: "8px" }}>Goal of this Month</Typography>
        </Box>
        <Typography
          variant="h6"
          sx={{ marginLeft: "55px", fontWeight: "600", marginTop: "-17px" }}
        >
          $3,484,994
        </Typography>
      </Box>

      {/* Top Right: Total Spending */}
      <Box
        sx={{
          position: "absolute",
          top: "16px",
          right: "16px",
          textAlign: "right",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: "#ffdbac",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            <TrendingDownIcon />
          </Box>
          <Typography sx={{ marginLeft: "8px" }}>Total Spending</Typography>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "600", marginTop: "-17px" }}>
          $50,000
        </Typography>
      </Box>

      {/* Bottom Right: Spending Goal */}
      <Box
        sx={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          textAlign: "right",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "inline-block",
              backgroundColor: "#cfe2f3",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            <LocalMallIcon />
          </Box>
          <Typography sx={{ marginLeft: "8px" }}>Spending Goal</Typography>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: "600", marginTop: "-17px" }}>
          $200,000
        </Typography>
      </Box>

      {/* Credit Card Design */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Card
          sx={{
            width: "300px",
            height: "150px",
            backgroundColor: "#ffe599",
            padding: "16px",
            borderRadius: "12px",
            position: "relative",
          }}
        >
          <Box sx={{ textAlign: "left" }}>
            <Typography variant="body2">Name Card</Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Nikesh Sharma
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              **** **** **** 1234
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",

              marginTop: "16px",
            }}
          >
            <Box>
              <Typography variant="caption">Exp Date</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                12/24
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption">CVV</Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                123
              </Typography>
            </Box>
          </Box>

          {/* VISA logo in top right */}
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: "8px",
              right: "16px",
              fontWeight: "bold",
            }}
          >
            VISA
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default BoxCard;
