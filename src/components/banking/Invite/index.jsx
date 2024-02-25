import { Box } from "@mui/material";
import React from "react";

function Invite() {
  return (
    <div style={{ position: "relative", paddingTop: "68px" }}>
      <div
        className="bgColor"
        style={{
          padding: "150px 40px 40px 40px",
          borderRadius: "20px",
        }}
      >
        <img
          src="https://minimals.cc/assets/illustrations/characters/character_11.png"
          alt=""
          style={{ width: "150px", position: "absolute", top: "-20px" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <h2>
            Invite friends <br /> and earn
          </h2>
          <h1
            style={{ fontSize: "50px", fontFamily: "Public Sans, sans-serif" }}
          >
            $50
          </h1>
        </Box>
        <span style={{ color: "white" }}>
          Praesent egestas tristique nibh. Duis lobortis massa imperdiet quam.
        </span>
        <Box sx={{ display: "flex", width: "100%", marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Email"
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: "7px",
              borderBottomLeftRadius: "7px",
              width: "100%",
              border: "none",
              padding: "0 0 0 12px",
              color: "gray",
              outline: "none"
            }}
          />
          <Box
            sx={{
              backgroundColor: "white",
              borderTopRightRadius: "7px",
              borderBottomRightRadius: "7px",
              padding: "4px",
            }}
          >
            <button
              style={{
                backgroundColor: "#FFAB00",
                borderRadius: "8px",
                padding: "7px 15px",
                border: "none",
                fontWeight: "600",
              }}
            >
              Invite
            </button>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Invite;
