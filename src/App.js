import { BiLeftArrowAlt } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import React from "react";
import Router from "./routes";
import { Box, Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Box
        sx={{
          zIndex: "1000",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "17px 20px",
          backgroundColor: "#24292E",
        }}
      >
        <a href="https://mui.com/store/" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Box
              sx={{
                border: "1px solid #767A7D",
                borderRadius: "6px",
                color: "#767A7D",
                backgroundColor: "transparent",
                ":hover": {
                  backgroundColor: "transparent",
                },
                width: "30px",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BiLeftArrowAlt size={20} />
            </Box>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDM2IDMyIj4KICA8cGF0aAogICAgZmlsbC1ydWxlPSJldmVub2RkIgogICAgY2xpcC1ydWxlPSJldmVub2RkIgogICAgZD0iTTMwLjM0MyAyMS45NzZhMSAxIDAgMDAuNTAyLS44NjRsLjAxOC01Ljc4N2ExIDEgMCAwMS41MDItLjg2NGwzLjEzNy0xLjgwMmExIDEgMCAwMTEuNDk4Ljg2N3YxMC41MjFhMSAxIDAgMDEtLjUwMi44NjdsLTExLjgzOSA2LjhhMSAxIDAgMDEtLjk5NC4wMDFsLTkuMjkxLTUuMzE0YTEgMSAwIDAxLS41MDQtLjg2OHYtNS4zMDVjMC0uMDA2LjAwNy0uMDEuMDEzLS4wMDcuMDA1LjAwMy4wMTIgMCAuMDEyLS4wMDd2LS4wMDZjMC0uMDA0LjAwMi0uMDA4LjAwNi0uMDFsNy42NTItNC4zOTZjLjAwNy0uMDA0LjAwNC0uMDE1LS4wMDQtLjAxNWEuMDA4LjAwOCAwIDAxLS4wMDgtLjAwOGwuMDE1LTUuMjAxYTEgMSAwIDAwLTEuNS0uODdsLTUuNjg3IDMuMjc3YTEgMSAwIDAxLS45OTggMEw2LjY2NiA5LjdhMSAxIDAgMDAtMS40OTkuODY2djkuNGExIDEgMCAwMS0xLjQ5Ni44NjlsLTMuMTY2LTEuODFhMSAxIDAgMDEtLjUwNC0uODdsLjAyOC0xNi40M0ExIDEgMCAwMTEuNTI3Ljg2bDEwLjg0NSA2LjIyOWExIDEgMCAwMC45OTYgMEwyNC4yMS44NmExIDEgMCAwMTEuNDk4Ljg2OHYxNi40MzRhMSAxIDAgMDEtLjUwMS44NjdsLTUuNjc4IDMuMjdhMSAxIDAgMDAuMDA0IDEuNzM1bDMuMTMyIDEuNzgzYTEgMSAwIDAwLjk5My0uMDAybDYuNjg1LTMuODM5ek0zMSA3LjIzNGExIDEgMCAwMDEuNTE0Ljg1N2wzLTEuOEExIDEgMCAwMDM2IDUuNDM0VjEuNzY2QTEgMSAwIDAwMzQuNDg2LjkxbC0zIDEuOGExIDEgMCAwMC0uNDg2Ljg1N3YzLjY2OHoiCiAgICBmaWxsPSIjMDA3RkZGIgogIC8+Cjwvc3ZnPgo="
              alt=""
              width={30}
            />
            <h3
              style={{
                color: "white",
                paddingBottom: "4px",
                fontWeight: 700,
                fontFamily: "inherit",
                letterSpacing: "1px",
              }}
            >
              Store
            </h3>
          </Box>
        </a>
        <a
          href="https://mui.com/store/items/minimal-dashboard/"
          style={{ textDecoration: "none" }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                padding: "10px",
                fontWeight: 700,
                textTransform: "capitalize",
                fontFamily: "inherit",
                width: "160px",
                borderRadius: "10px",
                backgroundColor: "#0E81F6",
                border: "2px solid #288BF1",
                height: "40px",
                ":hover": {
                  backgroundColor: "#0E81F6",
                },
              }}
            >
              Buy now
            </Button>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
                alignItems: "center",
                padding: "10px",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "#2C2F34",
                },
              }}
            >
              <h5 style={{ fontWeight: 400 }}>Remove frame</h5>
              <CgClose />
            </Box>
          </Box>
        </a>
      </Box>
      <Router />
    </div>
  );
}

export default App;
