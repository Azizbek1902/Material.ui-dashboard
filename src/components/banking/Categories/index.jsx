import { Box, Typography } from "@mui/material";
import React from "react";
import BarChart from "../../../components/banking/charts/barChart";

function Categories() {
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
        <Box sx={{ padding: "25px" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }} color="initial">
            Expenses Categories
          </Typography>
          <Box sx={{ marginTop: "50px" }}>
            <BarChart />
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "6fr 6fr",
            marginTop: "50px",
            borderTop: "1px dashed gray",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              borderRight: "1px dashed gray",
              padding: "15px 0",
            }}
          >
            <Box>
              <h1 style={{ fontWeight: 400, fontSize: "17px", color: "gray" }}>
                Categories
              </h1>
              <p
                style={{
                  paddingTop: "7px",
                  fontWeight: 700,
                  fontSize: "25px",
                }}
              >
                9
              </p>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              padding: "15px 0",
            }}
          >
            <Box>
              <h1 style={{ fontWeight: 400, fontSize: "17px", color: "gray" }}>
                Categories
              </h1>
              <p
                style={{
                  paddingTop: "10px",
                  fontWeight: 700,
                  fontSize: "25px",
                }}
              >
                $18,765
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Categories;
