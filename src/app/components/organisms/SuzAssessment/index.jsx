import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button } from "@mui/material";

import SuzQuestion from "../../molecules/SuzQuestion";

import { typesDictionary } from "./utils";

export default function SuzAssessment({ type }) {
  const questions = typesDictionary[type] || [];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
      }}
    >
      {questions.map((question) => (
        <SuzQuestion
          key={question.id}
          id={question.id}
          question={question.question}
          subText={question.subText}
        />
      ))}
      <Box
        sx={{
          width: "100%",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <Button
          sx={{
            width: "132px",
            height: "48px",
            backgroundColor: "#1DC25A",
            borderRadius: "8px",
          }}
          variant="contained"
          endIcon={<ArrowForwardIcon />}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
}
