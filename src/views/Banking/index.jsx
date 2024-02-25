import { CgArrowBottomLeft, CgArrowTopRight } from "react-icons/cg";
import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import { Box } from "@mui/material";
import React from "react";
import ApexChart from "../../components/banking/charts/Chart";
import Chart2 from "../../components/banking/charts/Chart2";
import Carousel from "../../components/banking/header_Carusel";
import Container from "../../components/banking/Container";

function Banking() {
  return (
    <div>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: { xs: "97%", lg: "92%" } }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: { xs: "100%", md: "60%" },
                flexDirection: { xs: "column", sm: "row" },
                gap: "20px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  background:
                    "linear-gradient(135deg, rgba(91, 228, 155, 0.2), rgba(0, 167, 111, 0.2)) rgb(255, 255, 255)",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    padding: "25px 25px 0 25px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      color: "rgb(0, 75, 80)",
                    }}
                  >
                    <h5>Income</h5>
                    <h1 style={{ marginTop: "12px" }}>$18,765</h1>
                    <p style={{ marginTop: "15px" }}>
                      <BiTrendingUp /> <b>+2.6%</b>{" "}
                      <span style={{ opacity: "0.8" }}> than last month</span>
                    </p>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "100%",
                      bgcolor: "rgb(0, 120, 103)",
                      color: "rgb(200, 250, 214)",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "21px",
                    }}
                  >
                    <CgArrowBottomLeft />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "140px",
                    overflow: "hidden",
                  }}
                >
                  <ApexChart />
                </Box>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  background:
                    "linear-gradient(135deg, rgba(255, 214, 102, 0.2), rgba(255, 171, 0, 0.2)) rgb(255, 255, 255)",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    padding: "25px 25px 0 25px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      color: "rgb(122, 65, 0)",
                    }}
                  >
                    <h5>Expenses</h5>
                    <h1 style={{ marginTop: "12px" }}>$8,938</h1>
                    <p style={{ marginTop: "15px" }}>
                      <BiTrendingDown /> <b>-0.5%</b>
                      <span style={{ opacity: "0.8" }}>than last month</span>
                    </p>
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "100%",
                      bgcolor: "rgb(183, 110, 0)",
                      color: "rgb(255, 245, 204)",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "21px",
                    }}
                  >
                    <CgArrowTopRight />
                  </Box>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "140px",
                    overflow: "hidden",
                  }}
                >
                  <Chart2 />
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "40%" } }}>
              <Carousel />
            </Box>
          </Box>
          <Container />
        </Box>
      </Box>
    </div>
  );
}

export default Banking;
