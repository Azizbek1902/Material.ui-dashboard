import { CgArrowTopRight } from "react-icons/cg";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Contacts() {
  const data = [
    {
      id: 1,
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_8.jpg",
      title: "Melanie Noble",
      desc: "luella.ryan33@gmail.com",
    },
    {
      id: 2,
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_9.jpg",
      title: "Chase Day",
      desc: "joana.simonis84@gmail.com",
    },
    {
      id: 3,
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_10.jpg",
      title: "Shawn Manning",
      desc: "dilaine_white94@gmail.com",
    },
    {
      id: 4,
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_11.jpg",
      title: "Soren Durham",
      desc: "vergie_block82@hotmail.com",
    },
    {
      id: 5,
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_12.jpg",
      title: "Cortez Herring",
      desc: "vito.hudson@hotmail.com",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "16px",
          boxShadow:
            "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }} color="initial">
              Contacts
            </Typography>
            <span style={{ color: "gray" }}>You have 122 contacts</span>
          </Box>
          <Button variant="text" color="inherit" sx={{ fontWeight: 600 }}>
            View All {">"}
          </Button>
        </Box>
        {data.map((item) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "20px",
              }}
              key={item.id}
            >
              <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <img
                  src={item.img}
                  alt=""
                  style={{ borderRadius: "50%", width: "50px" }}
                />
                <Box>
                  <h5 style={{ color: "rgb(33, 43, 54)" }}>{item.title}</h5>
                  <p style={{ color: "gray", fontSize: "14px" }}>{item.desc}</p>
                </Box>
              </Box>
              <CgArrowTopRight size={22} color="gray" />
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

export default Contacts;
