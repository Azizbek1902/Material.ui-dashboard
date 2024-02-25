import { Box } from "@mui/material";
import React from "react";
import Balance from "../Balance";
import Categories from "../Categories";
import Transition from "../Transition";
import Invite from "../Invite";
import Contacts from "../Contacts";
import Transfer from "../Transfer";

function Container() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "65%" },
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Balance />
          <Categories />
          <Transition />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "35%" },
            display: "flex",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <Transfer />
          <Contacts />
          <Invite />
        </Box>
      </Box>
    </div>
  );
}

export default Container;
