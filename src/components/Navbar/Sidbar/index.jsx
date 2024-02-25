import { RiMenu5Line } from "react-icons/ri";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import data from "../../Sidebar/data";
import { Typography } from "@mui/material";

export default function Sidbar() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        ackgroundColor: "#EBECED",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ paddingTop: "0" }}>
        {data.map((text) => (
          <ListItem key={text.title} disablePadding>
            {text.desc ? (
              <>
                <ListItemButton
                  sx={{
                    ":hover": { backgroundColor: "white" },
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    sx={{ fontSize: "16px", fontWeight: 600 }}
                  >
                    {text.desc}
                  </Typography>
                  {/* <ListItemText
                    sx={{ fontSize: "11px", fontWeight: 600 }}
                    primary={text.desc}
                  /> */}
                </ListItemButton>
              </>
            ) : (
              <>
                <ListItemButton>
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItemButton>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            sx={{ padding: "0", minWidth: "0" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <RiMenu5Line size={22} color="gray" />
          </Button>
          <Drawer
            sx={{ backgroundColor: "#EBECED" }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
