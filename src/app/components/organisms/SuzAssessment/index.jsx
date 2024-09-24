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
      {questions.map((question) => {
        return (
          <SuzQuestion
            key={question.id}
            id={question.id}
            question={question.question}
            subText={question.subText}
          />
        );
      })}
      <Box>
        <Button variant="contained" endIcon={<ArrowForwardIcon />}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
}
