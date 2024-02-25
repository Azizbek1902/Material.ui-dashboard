import { BiDotsVerticalRounded } from "react-icons/bi";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",
    "Receive money from",
    "Annette Black",
    "03 Feb 2024",
    "12:13 PM"
  ),
  createData(
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg",
    "Payment for",
    "Courtney Henry",
    "03 Feb 2024",
    "11:13 AM"
  ),
  createData(
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_5.jpg",
    "Payment for",
    "Theresa Webb",
    "01 Feb 2024",
    "10:13 AM"
  ),
  createData(
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",
    "Receive money from",
    "Beauty & Health",
    "03 Feb 2024",
    "12:13 PM"
  ),
  createData(
    "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg",
    "Receive money from",
    "Books",
    "03 Feb 2024",
    "12:13 PM"
  ),
];
console.log(rows, "dd");

function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: "#F4F6F8" }}>
          <TableRow>
            <TableCell
              sx={{
                color: "rgb(99, 115, 129)",
                fontWeight: 500,
                fontFamily: "inherit",
              }}
            >
              Description
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "rgb(99, 115, 129)",
                fontWeight: 500,
                fontFamily: "inherit",
              }}
            >
              Date
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "rgb(99, 115, 129)",
                fontWeight: 500,
                fontFamily: "inherit",
              }}
            >
              Amount
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "rgb(99, 115, 129)",
                fontWeight: 500,
                fontFamily: "inherit",
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "rgb(99, 115, 129)",
                fontWeight: 500,
                fontFamily: "inherit",
              }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ display: "flex", alignItems: "center", gap: "15px" }}
              >
                <img
                  src={row.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                  alt=""
                />
                <Box>
                  <h4
                    style={{
                      fontWeight: "600",
                      fontFamily: "inherit",
                      color: "rgb(33, 43, 54)",
                    }}
                  >
                    {row.calories}
                  </h4>
                  <h4 style={{ fontWeight: "500", color: "rgb(99, 115, 129)" }}>
                    {row.fat}
                  </h4>
                </Box>
              </TableCell>
              <TableCell align="left">
                <h4 style={{ color: "rgb(33, 43, 54)", fontWeight: 500 }}>
                  {row.carbs}
                </h4>
                <span>{row.protein}</span>
              </TableCell>
              <TableCell align="left">$68.71</TableCell>
              <TableCell align="left">
                <button
                  style={{
                    border: "none",
                    color: "rgb(183, 110, 0)",
                    padding: "5px",
                    borderRadius: "5px",
                    fontWeight: "600",
                    backgroundColor: "#FFF1D6",
                  }}
                >
                  Progress
                </button>
              </TableCell>
              <TableCell align="right">
                <BiDotsVerticalRounded size={25} color="gray" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TableComponent;
