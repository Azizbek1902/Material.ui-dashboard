import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Banking from "../views/Banking";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

function Router() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const handleClik = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          minHeight: "90vh",
          maxHeight: "100%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: { xs: "hidden", lg: "block" },
            width: {
              lg: openSidebar ? "18%" : "6%",
              xs: "0%",
            },
            borderRight: { xs: "none", lg: "1px dashed #E9ECEE" },
            transition: "0.2s ease-in-out",
            overflowY: "auto",
            height: "90vh",
            '::-webkit-scrollbar': {
              display: 'none'
            },
          }}
        >
          <Sidebar open={openSidebar} />
        </Box>
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: openSidebar ? "82%" : "94%",
            },
            height: "90vh",
            overflowY: "auto",
          }}
        >
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            <Button
              variant="outlined"
              sx={{
                ":hover": {
                  border: "none",
                  color: "gray",
                  border: "1px dashed gray",
                  backgroundColor: "white",
                },
                color: "gray",
                border: "1px dashed gray",
                borderRadius: "50%",
                padding: "5px",
                transition: "0.2s ease-in-out",
                minWidth: "0px",
                backgroundColor: "white",
                position: "absolute",
                left: openSidebar ? "17.3%" : "5%",
                top: "100px",
              }}
              onClick={handleClik}
            >
              {openSidebar ? <AiOutlineLeft /> : <AiOutlineRight />}
            </Button>
          </Box>
          <Navbar />
          <Routes>
            <Route path="/" element={<Banking />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default Router;
