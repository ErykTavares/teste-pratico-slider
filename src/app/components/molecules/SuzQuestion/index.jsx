import { Box, Divider, Typography } from "@mui/material";

import SuzSlider from "../../atoms/SuzSlider";

export default function SuzQuestion({ id, question, subText }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "260px",
        display: "grid",
        gridTemplateColumns: "580px 1fr",
        placeItems: "center",
        backgroundColor: "#f2f0ea",
        borderBottom: "1px dashed #1DC25A",
        padding: "2rem 2rem",
        margin: 0,

        "@media (max-width: 1024px)": {
          height: "300px",
          gridTemplateColumns: "100%",
        },
      }}
      mb={4}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            width: "50px",
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#047835",
            }}
          >
            {id}
          </Typography>
          <Divider
            flexItem
            orientation="vertical"
            variant="fullWidth"
            sx={{
              height: "80px",
              marginX: "0.5rem",
              borderColor: "#047835",
              borderWidth: "2px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "max-content",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "#047835" }}
          >
            {question}
          </Typography>
          <Typography
            sx={{ width: "70%", textAlign: "justify", color: "#000" }}
          >
            {subText}
          </Typography>
        </Box>
      </Box>
      <SuzSlider />
      <Divider sx={{ mt: 2 }} color="white" />
    </Box>
  );
}
