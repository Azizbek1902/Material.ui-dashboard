import { Box, Typography } from "@mui/material";
import React from "react";
import Table from "./Table";

function Transition() {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow:
            "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, padding: "25px" }}
          color="initial"
        >
          Recent Transitions
        </Typography>
        <Box>
          <Table />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "20px 20px",
            }}
          >
            <Box sx={{ fontWeight: 500, fontFamily: "inherit" }}>
              View All {">"}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Transition;
