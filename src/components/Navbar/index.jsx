import { FcSettings } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import Sidbar from "./Sidbar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

function Navbar() {
  const settings = [
    {
      setting: "Profile",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_1.jpg",
    },
    {
      setting: "Account",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_2.jpg",
    },
    {
      setting: "Dashboard",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_3.jpg",
    },
    {
      setting: "Logout",
      img: "https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg",
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUserT, setAnchorElUserT] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenUserMenu2 = (event) => {
    setAnchorElUserT(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseUserMenu2 = () => {
    setAnchorElUserT(null);
  };
  return (
    <div>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Box
          sx={{
            marginInline: "50px",
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button style={{ border: "none", backgroundColor: "white" }}>
              <BsSearch size={16} color="#637381" />
            </button>
            <button
              style={{
                backgroundColor: "#EDEFF1",
                borderRadius: "7px",
                border: "none",
                padding: "5px",
                color: "#637381",
                fontWeight: "600",
              }}
            >
              ⌘K
            </button>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                🌐UZ
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>🌐 UZ</MenuItem>
                <MenuItem onClick={handleClose}>🌐 RU</MenuItem>
                <MenuItem onClick={handleClose}>🌐 EN</MenuItem>
              </Menu>
            </div>
            <Badge badgeContent={4} color="error" sx={{ marginRight: "15px" }}>
              <NotificationsIcon color="disabled" />
            </Badge>
            <Box sx={{ flexGrow: 0, marginRight: "10px" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PeopleIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "15px" }}
                    textAlign="center"
                  >
                    <h3>Contacts</h3> (20)
                  </Typography>
                </MenuItem>
                {settings.map((setting) => (
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    key={setting}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <img
                      style={{ width: "40px", borderRadius: "50%" }}
                      src={setting.img}
                      alt=""
                    />
                    <Typography textAlign="center">
                      {setting.setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <div className="d1">
              <SettingsIcon />
            </div>
            <Box sx={{ flexGrow: 0, marginLeft: "10px" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu2} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUserT}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUserT)}
                onClose={handleCloseUserMenu2}
              >
                <MenuItem onClick={handleCloseUserMenu2}>
                  <Typography textAlign="center">
                    <h4>Jaydon Frankie</h4>
                    <p style={{ color: "gray" }}>demo@minls.cc</p>
                  </Typography>
                </MenuItem>
                {["Home", "Profile", "Settings"].map((setting) => (
                  <MenuItem onClick={handleCloseUserMenu2} key={setting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseUserMenu2}>
                  <Typography textAlign="center">
                    <h4 style={{ color: "#FF5630" }}>Logout</h4>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "block", lg: "none", marginBottom: "20px" } }}>
        <Box
          sx={{
            marginInline: { xs: "10px", lg: "50px" },
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Sidbar />
            <button style={{ border: "none", backgroundColor: "white" }}>
              <BsSearch size={16} color="#637381" />
            </button>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                🌐UZ
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>🌐 UZ</MenuItem>
                <MenuItem onClick={handleClose}>🌐 RU</MenuItem>
                <MenuItem onClick={handleClose}>🌐 EN</MenuItem>
              </Menu>
            </div>
            <Badge badgeContent={4} color="error" sx={{ marginRight: "15px" }}>
              <NotificationsIcon color="disabled" />
            </Badge>
            <Box sx={{ flexGrow: 0, marginRight: "10px" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <PeopleIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    sx={{ display: "flex", alignItems: "center", gap: "15px" }}
                    textAlign="center"
                  >
                    <h3>Contacts</h3> (20)
                  </Typography>
                </MenuItem>
                {settings.map((setting) => (
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    key={setting}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <img
                      style={{ width: "40px", borderRadius: "50%" }}
                      src={setting.img}
                      alt=""
                    />
                    <Typography textAlign="center">
                      {setting.setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <div className="d1">
              <SettingsIcon />
              {/* <FcSettings /> */}
            </div>
            <Box sx={{ flexGrow: 0, marginLeft: "10px" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu2} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://api-prod-minimal-v510.vercel.app/assets/images/avatar/avatar_25.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUserT}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUserT)}
                onClose={handleCloseUserMenu2}
              >
                <MenuItem onClick={handleCloseUserMenu2}>
                  <Typography textAlign="center">
                    <h4>Jaydon Frankie</h4>
                    <p style={{ color: "gray" }}>demo@minls.cc</p>
                  </Typography>
                </MenuItem>
                {["Home", "Profile", "Settings"].map((setting) => (
                  <MenuItem onClick={handleCloseUserMenu2} key={setting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseUserMenu2}>
                  <Typography textAlign="center">
                    <h4 style={{ color: "#FF5630" }}>Logout</h4>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Navbar;
