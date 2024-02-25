import { BsDot } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import data from "./data";

function Sidebar({ open }) {
  const [valueS, setValueS] = useState(null);
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          paddingTop: "30px",
          paddingX: open ? "15px" : "3px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: open ? "start" : "center",
            paddingBottom: "20px",
          }}
        >
          <img src={logo} alt="" width={50} />
        </Box>
        <Typography
          variant="caption"
          sx={{
            display: open ? "block" : "none",
            paddingBottom: "6px",
            fontWeight: 600,
          }}
          color="#919EAB"
        >
          OVERVIEW
        </Typography>
        <Box>
          {data?.map((item) => (
            <div key={item.id}>
              {item.data ? (
                <div>
                  <Box
                    sx={{
                      display: "flex",
                      position: "relative",
                      justifyContent: open ? "space-between" : "center",
                      alignItems: open ? "center" : "start",
                      borderRadius: "7px",
                      ":hover": {
                        backgroundColor: "rgba(145, 158, 171, 0.08)",
                      },
                      padding: open ? "10px 15px" : "10px 5px",
                      marginBottom: "4px",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      onClick={() => {
                        setValueS(valueS == item.id ? null : item.id);
                      }}
                      sx={{
                        display: "flex",
                        color: "rgb(99, 115, 129)",
                        gap: "15px",
                        alignItems: open ? "center" : "start",
                        width: open ? "100%" : "",
                        flexDirection: open ? "row" : "column",
                      }}
                    >
                      {item.icon}
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: open ? "14px" : "10px",
                        }}
                      >
                        {open
                          ? item?.title
                          : item?.title?.length > 4
                          ? item.title.slice(0, 4) + ".."
                          : item.title}
                      </h4>
                    </Box>
                    {open ? (
                      <>
                        {valueS == item.id ? (
                          <BiChevronDown size={22} />
                        ) : (
                          <BiChevronRight size={22} />
                        )}
                      </>
                    ) : (
                      <div style={{ left: "30px", position: "relative" }}>
                        {valueS == item.id ? (
                          <BiChevronDown size={22} />
                        ) : (
                          <BiChevronRight size={22} />
                        )}
                      </div>
                    )}
                  </Box>
                  {open ? (
                    <>
                      {valueS == item.id ? (
                        <>
                          <ul>
                            {item?.data?.map((elem) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  gap: "10px",
                                  color: "rgb(99, 115, 129)",
                                  padding: "10px 15px",
                                  alignItems: "center",
                                  borderRadius: "7px",
                                  fontWeight: 500,
                                  ":hover": {
                                    backgroundColor:
                                      "rgba(145, 158, 171, 0.08)",
                                  },
                                }}
                              >
                                <BsDot />
                                {elem.name}dd
                              </Box>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <>
                      {valueS == item.id ? (
                        <Box
                          sx={{
                            backgroundColor: "white",
                          }}
                        >
                          <ul>
                            {item?.data?.map((elem) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  gap: "10px",
                                  color: "rgb(99, 115, 129)",
                                  padding: "10px 15px",
                                  alignItems: "center",
                                  borderRadius: "7px",
                                  fontWeight: 500,
                                  ":hover": {
                                    backgroundColor:
                                      "rgba(145, 158, 171, 0.08)",
                                  },
                                }}
                              >
                                <BsDot />
                                {elem.name}
                              </Box>
                            ))}
                          </ul>
                        </Box>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </div>
              ) : (
                <>
                  {item?.desc ? (
                    <>
                      {open ? (
                        <Box
                          sx={{
                            display: "flex",
                            color: "rgb(145, 158, 171)",
                            ":hover": {
                              color: "rgb(33, 43, 54)",
                            },
                            gap: "15px",
                            alignItems: "center",
                            width: "100%",
                            flexDirection: open ? "row" : "column",
                            padding: "10px 15px",
                            marginBottom: "4px",
                            fontSize: "13px",
                            textTransform: "uppercase",
                            cursor: "pointer",
                          }}
                        >
                          <div>
                            <h4
                              style={{
                                fontWeight: 700,
                                fontSize: open ? "14px" : "10px",
                              }}
                            >
                              {item?.desc}
                            </h4>
                          </div>
                        </Box>
                      ) : (
                        ""
                      )}
                    </>
                  ) : (
                    <>
                      <Box
                        sx={{
                          display: "flex",
                          color: "rgb(99, 115, 129)",
                          gap: "15px",
                          alignItems: "center",
                          width: "100%",
                          flexDirection: open ? "row" : "column",
                          borderRadius: "7px",
                          ":hover": {
                            backgroundColor: "rgba(145, 158, 171, 0.08)",
                          },
                          padding: open ? "10px 15px" : "10px 5px",
                          marginBottom: "4px",
                          cursor: item.disabled ? "default" : "pointer",
                          opacity: item.disabled ? "0.48" : "",
                        }}
                      >
                        {item.icon}
                        <div>
                          <h4
                            style={{
                              fontWeight: 500,
                              fontSize: open ? "14px" : "10px",
                            }}
                          >
                            {open
                              ? item?.title
                              : item?.title?.length > 9
                              ? item.title.slice(0, 9) + ".."
                              : item.title}
                          </h4>
                          {open ? (
                            <span style={{ fontSize: "13px", fontWeight: 500 }}>
                              {item?.title2?.length > 20
                                ? item.title2.slice(0, 20) + "..."
                                : item.title2}
                            </span>
                          ) : (
                            <></>
                          )}
                        </div>
                      </Box>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </Box>
        {open ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            <div>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <img
                  src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
                  alt=""
                  width={50}
                  style={{ borderRadius: "50%" }}
                />
                <p
                  style={{
                    position: "absolute",
                    backgroundColor: "#22C55E",
                    color: "white",
                    padding: "0px 5px 0px 5px",
                    fontWeight: 700,
                    fontFamily: "inherit",
                    fontSize: "13px",
                    borderRadius: "7px 10px 10px 1px",
                    top: "0px",
                    right: "12px",
                  }}
                >
                  Free
                </p>
              </Box>
              <h4 style={{ fontWeight: 500, marginTop: "14px" }}>
                Jaydon Frankie
              </h4>
              <p style={{ color: "gray", paddingTop: "5px" }}>
                demo@minimals.cc
              </p>
              <button
                style={{
                  backgroundColor: "#212B36",
                  color: "white",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "8px 10px",
                  borderRadius: "7px",
                  marginTop: "20px",
                }}
              >
                Upgrade to Pro
              </button>
            </div>
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </div>
  );
}

export default Sidebar;
