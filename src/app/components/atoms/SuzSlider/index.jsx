"use client";


import { useCallback, useEffect, useState } from "react";
import { Box, Slider, Typography } from "@mui/material";
import rangesApi from "@/app/apis/rangesApi";
import { colors, defaultSliderData } from "./utils";

export default function SuzSlider({ defaultValue = 50, min = 0, max = 100 }) {
  const [value, setValue] = useState(defaultValue);
  const [ranges, setRanges] = useState([]);
  const [sliderData, setSliderData] = useState(defaultSliderData);

  const marks = ranges
    ?.filter((range) => range?.max % 20 === 0)
    ?.map((range) => ({
      value: range?.max,
      label: range?.title,
    }));

  marks.pop();

  const getRanges = useCallback(async () => {
    try {
      const res = await rangesApi?.getAll();
      setRanges(res);
    } catch (err) {
      console.warn(err?.message || "Algo deu errado!");
    }
  }, []);

  const handleSetValue = (_e, v) => {
    setValue(v);
  };

  const handleSetSliderData = useCallback(() => {
    const currentRange = ranges?.find((fin) => {
      return fin?.min <= value && value <= fin?.max;
    });

    setSliderData(currentRange);
  }, [ranges, value]);

  useEffect(() => {
    getRanges();
  }, [getRanges]);

  useEffect(() => {
    handleSetSliderData();
  }, [handleSetSliderData]);

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        sx={{
          height: "8px",
          color: colors[sliderData?.backgroundColor],
          "& .MuiSlider-thumb": {
            backgroundColor: "#5CBF66",
          },
          "& .MuiSlider-track": {
            backgroundColor: colors[sliderData?.backgroundColor],
          },
          "& .MuiSlider-rail": {
            backgroundColor: "white",
          },
          "& .MuiSlider-mark": {
            backgroundColor: "#768599",
            width: "2px",
            height: "16px",
          },
          "& .MuiSlider-valueLabel": {
            display: "none!important",
          },
          "& .MuiSlider-markLabel": {
            display: "none",
          },
        }}
        onChange={handleSetValue}
        min={min}
        value={value}
        step={20}
        max={max}
        marks={marks}
        aria-label="Default"
        color={colors[sliderData?.backgroundColor]}
        valueLabelDisplay="auto"
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.25rem",
            fontWeight: "bold",
            style: "italic",
            color: colors[sliderData?.backgroundColor],
          }}
        >
          {sliderData?.title}
        </Typography>
        <Typography
          sx={{
            color: "#65748B",
            textAlign: "center",
          }}
        >
          {sliderData?.subTitle}
        </Typography>
      </Box>
    </Box>
  );
}
