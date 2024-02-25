import { RiEyeFill } from "react-icons/ri";
import { RiEyeCloseLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import img1 from "../../../assets/overlay_2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Carousel() {
  const [price, setPrice] = useState(false);
  const data = [
    {
      id: 1,
      balance: "$2,000.89",
      cartNum: 7754,
      cart: "Reece Chung",
      date: "11/22",
    },
    {
      id: 2,
      balance: "$2,000.89",
      cartNum: 7754,
      cart: "Reece Chung",
      date: "11/22",
    },
    {
      id: 3,
      balance: "$2,000.89",
      cartNum: 7754,
      cart: "Reece Chung",
      date: "11/22",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `URL(${img1})`,
          height: "250px",
          overflow: "hidden",
          borderRadius: "15px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "42vh", xl: "37vh" },
                    padding: "20px",
                    background:
                      "linear-gradient(rgba(22, 28, 36, 0.8), rgba(22, 28, 36, 0.8))",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontWeight: 600, color: "white", opacity: 0.48 }}
                    >
                      Current Balance
                    </Typography>
                    <BiDotsVerticalRounded size={22} color="gray" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "25px",
                      paddingTop: "20px",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "white", fontWeight: 700, fontFamily: "" }}
                      color="initial"
                    >
                      {price ? <>*******</> : <>{item.balance}</>}
                    </Typography>
                    {price ? (
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setPrice(false);
                        }}
                      >
                        <RiEyeFill size={20} color="gray" />
                      </div>
                    ) : (
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setPrice(true);
                        }}
                      >
                        <RiEyeCloseLine size={20} color="gray" />
                      </div>
                    )}
                  </Box>
                  <Box
                    sx={{
                      height: "50px",
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "white",
                        padding: "1px 7px",
                        borderRadius: "5px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        class="component-iconify MuiBox-root css-9uy14h iconify iconify--logos"
                        width="1.29em"
                        height="1em"
                        viewBox="0 0 256 199"
                      >
                        <path d="M46.54 198.011V184.84c0-5.05-3.074-8.342-8.343-8.342c-2.634 0-5.488.878-7.464 3.732c-1.536-2.415-3.731-3.732-7.024-3.732c-2.196 0-4.39.658-6.147 3.073v-2.634h-4.61v21.074h4.61v-11.635c0-3.731 1.976-5.488 5.05-5.488c3.072 0 4.61 1.976 4.61 5.488v11.635h4.61v-11.635c0-3.731 2.194-5.488 5.048-5.488c3.074 0 4.61 1.976 4.61 5.488v11.635zm68.271-21.074h-7.463v-6.366h-4.61v6.366h-4.171v4.17h4.17v9.66c0 4.83 1.976 7.683 7.245 7.683c1.976 0 4.17-.658 5.708-1.536l-1.318-3.952c-1.317.878-2.853 1.098-3.951 1.098c-2.195 0-3.073-1.317-3.073-3.513v-9.44h7.463zm39.076-.44c-2.634 0-4.39 1.318-5.488 3.074v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.536-5.488 4.39-5.488c.878 0 1.976.22 2.854.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-59.052 2.196c-2.196-1.537-5.269-2.195-8.562-2.195c-5.268 0-8.78 2.634-8.78 6.805c0 3.513 2.634 5.488 7.244 6.147l2.195.22c2.415.438 3.732 1.097 3.732 2.195c0 1.536-1.756 2.634-4.83 2.634c-3.073 0-5.488-1.098-7.025-2.195l-2.195 3.512c2.415 1.756 5.708 2.634 9 2.634c6.147 0 9.66-2.853 9.66-6.805c0-3.732-2.854-5.708-7.245-6.366l-2.195-.22c-1.976-.22-3.512-.658-3.512-1.975c0-1.537 1.536-2.415 3.951-2.415c2.635 0 5.269 1.097 6.586 1.756zm122.495-2.195c-2.635 0-4.391 1.317-5.489 3.073v-2.634h-4.61v21.074h4.61v-11.854c0-3.512 1.537-5.488 4.39-5.488c.879 0 1.977.22 2.855.439l1.317-4.39c-.878-.22-2.195-.22-3.073-.22m-58.833 10.976c0 6.366 4.39 10.976 11.196 10.976c3.073 0 5.268-.658 7.463-2.414l-2.195-3.732c-1.756 1.317-3.512 1.975-5.488 1.975c-3.732 0-6.366-2.634-6.366-6.805c0-3.951 2.634-6.586 6.366-6.805c1.976 0 3.732.658 5.488 1.976l2.195-3.732c-2.195-1.757-4.39-2.415-7.463-2.415c-6.806 0-11.196 4.61-11.196 10.976m42.588 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.073 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.904 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805m-55.1-10.976c-6.147 0-10.538 4.39-10.538 10.976c0 6.586 4.39 10.976 10.757 10.976c3.073 0 6.147-.878 8.562-2.853l-2.196-3.293c-1.756 1.317-3.951 2.195-6.146 2.195c-2.854 0-5.708-1.317-6.367-5.05h15.587v-1.755c.22-6.806-3.732-11.196-9.66-11.196m0 3.951c2.853 0 4.83 1.757 5.268 5.05h-10.976c.439-2.854 2.415-5.05 5.708-5.05m114.372 7.025v-18.879h-4.61v10.976c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-16.903 0c0-3.732 2.414-6.805 6.366-6.805c3.732 0 6.366 2.854 6.366 6.805c0 3.732-2.634 6.805-6.366 6.805c-3.952-.22-6.366-3.073-6.366-6.805m-154.107 0v-10.537h-4.61v2.634c-1.537-1.975-3.732-3.073-6.586-3.073c-5.927 0-10.537 4.61-10.537 10.976c0 6.366 4.61 10.976 10.537 10.976c3.074 0 5.269-1.097 6.586-3.073v2.634h4.61zm-17.123 0c0-3.732 2.415-6.805 6.366-6.805c3.732 0 6.367 2.854 6.367 6.805c0 3.732-2.635 6.805-6.367 6.805c-3.951-.22-6.366-3.073-6.366-6.805"></path>
                        <path
                          fill="#FF5F00"
                          d="M93.298 16.903h69.15v124.251h-69.15z"
                        ></path>
                        <path
                          fill="#EB001B"
                          d="M97.689 79.029c0-25.245 11.854-47.637 30.074-62.126C114.373 6.366 97.47 0 79.03 0C35.343 0 0 35.343 0 79.029c0 43.685 35.343 79.029 79.029 79.029c18.44 0 35.343-6.366 48.734-16.904c-18.22-14.269-30.074-36.88-30.074-62.125"
                        ></path>
                        <path
                          fill="#F79E1B"
                          d="M255.746 79.029c0 43.685-35.343 79.029-79.029 79.029c-18.44 0-35.343-6.366-48.734-16.904c18.44-14.488 30.075-36.88 30.075-62.125c0-25.245-11.855-47.637-30.075-62.126C141.373 6.366 158.277 0 176.717 0c43.686 0 79.03 35.563 79.03 79.029"
                        ></path>
                      </svg>
                    </Box>
                    <Typography variant="h6" color="white">
                      ****
                    </Typography>
                    <Typography variant="h6" color="white">
                      ****
                    </Typography>
                    <Typography variant="h6" color="white">
                      ****
                    </Typography>
                    <Typography variant="h6" color="white">
                      {item.cartNum}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "35px" }}>
                    <Box>
                      <span
                        style={{
                          color: "white",
                          opacity: 0.48,
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        Card Holder
                      </span>
                      <Typography
                        sx={{ fontSize: "17px", marginTop: "15px" }}
                        color="white"
                      >
                        {item.cart}
                      </Typography>
                    </Box>
                    <Box>
                      <span
                        style={{
                          color: "white",
                          opacity: 0.48,
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                      >
                        Valid Dates
                      </span>
                      <Typography
                        sx={{
                          fontSize: "17px",
                          marginTop: "15px",
                          fontWeight: 600,
                        }}
                        color="white"
                      >
                        {item.date}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            background: "#dddddda8",
            width: "90%",
            height: "15px",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px",
          }}
        ></Box>
        <Box
          sx={{
            background: "#d6d6d6b8",
            marginTop: "-17px",
            width: "95%",
            height: "9px",
            borderBottomLeftRadius: "50px",
            borderBottomRightRadius: "50px",
          }}
        ></Box>
      </Box>
    </div>
  );
}

export default Carousel;
