import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import Carousel from "./Carousel";
import Sliderr from "./Slider";

function Transfer() {
  const [sliderValue, setSliderValue] = useState(0);
  const handleValue = (value) => {
    setSliderValue(value);
  };
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#F4F6F8",
          padding: "25px",
          borderRadius: "16px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }} color="initial">
          Quick Transfer
        </Typography>
        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              color: "rgb(99, 115, 129)",
              fontSize: "13px",
              fontWeight: 700,
              fontFamily: "inherit",
            }}
          >
            RECENT
          </h4>
          <Button
            variant="text"
            color="inherit"
            sx={{ fontWeight: 600, fontSize: "13px" }}
          >
            View All {">"}
          </Button>
        </Box>
        <Box sx={{ padding: "0 20px" }}>
          <Carousel />
        </Box>
        <h4
          style={{
            color: "rgb(99, 115, 129)",
            fontSize: "13px",
            fontWeight: 700,
            fontFamily: "inherit",
          }}
        >
          INSERT AMOUNT
        </h4>
        <Sliderr handle={handleValue} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <h4 style={{ color: "rgb(33, 43, 54)", fontWeight: 500 }}>
            Your Balance
          </h4>
          <h4 style={{ color: "rgb(33, 43, 54)", fontWeight: 500 }}>$34,212</h4>
        </Box>
        {sliderValue > 0 ? (
          <Box
            sx={{
              backgroundColor: "#212B36",
              color: "white",
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "18px",
            }}
          >
            Transfer Now
          </Box>
        ) : (
          <Box
            sx={{
              backgroundColor: "#DDE1E6",
              color: "rgba(145, 158, 171, 0.8)",
              textAlign: "center",
              padding: "10px",
              borderRadius: "10px",
              fontWeight: 600,
              fontSize: "18px",
            }}
          >
            Transfer Now
          </Box>
        )}
      </Box>
    </div>
  );
}

export default Transfer;
