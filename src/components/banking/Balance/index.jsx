import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import Column from "../charts/Column";

function Balance() {
  const [age, setAge] = React.useState("Year");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow:
            "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
          padding: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            marginBottom: "25px",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }} color="initial">
              Balance Statistics
            </Typography>
            <p style={{ color: "rgb(99, 115, 129)" }}>
              (+43% Income | +12% Expense) than last year
            </p>
          </Box>
          <Box>
            <FormControl fullWidth sx={{ border: "none" }}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                sx={{
                  border: "none",
                  bgcolor: "#F4F6F8",
                  height: "40px",
                }}
              >
                <MenuItem value="Week" sx={{ fontSize: "12px" }}>
                  Week
                </MenuItem>
                <MenuItem value="Month" sx={{ fontSize: "12px" }}>
                  Month
                </MenuItem>
                <MenuItem value="Year" sx={{ fontSize: "12px" }}>
                  Year
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Column />
      </Box>
    </div>
  );
}

export default Balance;
