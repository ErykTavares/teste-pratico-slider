import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingX: "1rem",
        backgroundColor: "#e4ebdd",
        borderBottom: "1px solid #047835",
      }}
    >
      <Typography
        sx={{
          color: "#047835",
          fontWeight: "bold",
          fontFamily: "inherit",
        }}
      >
        AVALIAÇÃO DE PERFORMANCE
      </Typography>
    </Box>
  );
};

export default Header;
