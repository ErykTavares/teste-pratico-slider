import React from "react";
import Image from "next/image";

import { Box, Typography } from "@mui/material";

import profilePic from "../../../../../public/assets/images/leaf.png";

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
      <Image width={15} height={15} src={profilePic} alt="logo" />
      <Typography
        sx={{
          color: "#047835",
          fontWeight: "bold",
          fontFamily: "inherit",
          marginLeft: ".2rem",
        }}
      >
        AVALIAÇÃO DE PERFORMANCE
      </Typography>
    </Box>
  );
};

export default Header;
