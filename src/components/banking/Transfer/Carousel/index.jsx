import { Box } from "@mui/material";
import React from "react";
import Slider from "react-slick";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "63px",
    speed: 500,
    slidesToShow: 3,
  };
  const data = [
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_6.jpg",
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_11.jpg",
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg",
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg",
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_10.jpg",
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_9.jpg",
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_8.jpg",
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_7.jpg",
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_5.jpg",
  ];
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((item) => {
              return (
                <div className="div1">
                  <img
                    src={item}
                    className="centr"
                    style={{ width: "40px", borderRadius: "50%" }}
                    alt=""
                  />
                  <div className="div2"></div>
                </div>
              );
            })}
          </Slider>
        </div>
        {/* <Box
          sx={{
            position: "absolute",
            display: "flex",
            width: "100%",
            top: "15px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "50px",
              backgroundColor: "#f3f3f36b",
            }}
          ></Box>
          <Box
            sx={{
              width: "120px",
              height: "50px",
              backgroundColor: "#f3f3f36b",
            }}
          ></Box>
        </Box> */}
      </Box>
    </>
  );
}

export default CenterMode;
