// import * as React from "react";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";
// import Typography from "@mui/material/Typography";

// export default function Sliderr({ handle }) {
//   const [value, setValue] = React.useState(0);
//   const handleSliderChange = (event, newValue) => {
//     setValue(newValue);
//     handle(newValue);
//   };
//   return (
//     <Box sx={{ width: "100%" }}>
// <Typography
//   variant="h4"
//   color="initial"
//   sx={{ textAlign: "center", margin: "20px 0" }}
// >
//   {value}
// </Typography>
//       <Slider
//         disabled={false}
//         color="success"
//         marks
//         value={typeof value === "number" ? value : 0}
//         max={20}
//         min={0}
//         size="small"
//         valueLabelDisplay="on"
//         onChange={handleSliderChange}
//       />
//     </Box>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

function valueLabelFormat(value) {
  const units = [""];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 0 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 0;
  }

  return `${units[unitIndex]} ${scaledValue} `;
}

export default function NonLinearSlider({ handle }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      handle(newValue);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h4"
        color="initial"
        id="non-linear-slider"
        sx={{
          textAlign: "center",
          margin: "20px 0",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          gap: "10px",
          fontWeight: 700,
        }}
        gutterBottom
      >
        <Typography
          sx={{ fontWeight: 700, fontFamily: "revert", marginTop: "-5px" }}
          variant="h6"
          color="initial"
        >
          $
        </Typography>
        {valueLabelFormat(value)}
      </Typography>
      <Slider
        value={value}
        min={0}
        step={50}
        max={1000}
        marks
        onChange={handleChange}
        color="success"
        valueLabelDisplay="on"
        size="small"
      />
    </Box>
  );
}
