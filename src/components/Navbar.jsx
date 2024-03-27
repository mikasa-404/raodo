import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
import branding from "../assets/Branding.svg";
import avatar from "../assets/Avatar.png";
import icon from "../assets/Icon Indicator.png";
import grid from "../assets/layout-grid.png";
import calendar from "../assets/calendar.svg";

import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  const isMobileScreens = useMediaQuery("(max-width: 372px)");

  return (
    <Box
      bgcolor="white"
      display="flex"
      flexDirection="column"
      sx={{
        paddingX: isMobileScreens ? "16px" : "32px",
        paddingY: isMobileScreens ? "16px" : "10px",
        gap: isMobileScreens ? "24px" : "0px",
      }}
    >
      <Box
        display="flex"
        sx={{
          gap: isMobileScreens ? "" : "32px",
          justifyContent: isMobileScreens ? " space-between" : "",
        }}
        alignItems="center"
        height="46px"
      >
        {isMobileScreens && (
          <img src={branding} width="99px" height="30px" alt="logo" />
        )}
        {!isMobileScreens && (
          <Box flexGrow={1}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search..."
              height="46px"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoSearch color="black" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}
        {!isMobileScreens && (
          <img src={icon} width="24px" height="24px" alt="logo" />
        )}
        {!isMobileScreens && (
          <img src={calendar} width="24px" height="24px" alt="logo" />
        )}
        {!isMobileScreens && (
          <img src={grid} width="24px" height="24px" alt="logo" />
        )}
        <img src={avatar} width="40px" height="40px" alt="logo" />
      </Box>
      <Box>
        {isMobileScreens && (
          <Box width="100%">
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Search..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoSearch color="black" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
