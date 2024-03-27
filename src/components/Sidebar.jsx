import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import branding from "../assets/Branding.svg";
import statsIcon from "../assets/Stats.svg";
import emailIcon from "../assets/email.svg";
import friends from "../assets/user.svg";
import apps from "../assets/layout-grid.svg";
import help from "../assets/Support.svg";
import folder from "../assets/Folder.svg";
import back from "../assets/logout.jpg";
import settings from "../assets/Settings.png";

import globe from "../assets/globe.png";

import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const Sidebar = () => {
  const [dashboard, setDashboard] = useState(true); //state variable for dashboard options visibility
  return (
    <Box display="flex" justifyContent="space-between"  flexDirection="column" height="100%" bgcolor="white">
      <Box mt="18px" px="20px" >
        {/* logo */}
        <img src={branding} width="99px" height="30px" alt="logo" />

        <Box display="flex" flexDirection="column" gap="32px" mt="54px">
          <Box>
            <Typography
              lineHeight="20px"
              fontSize="12px"
              color="#9D9FA1"
              fontWeight="600"
              mb="16px"
            >
              D A S H B O A R D
            </Typography>
            <Box
              my="12px"
              display="flex"
              flexDirection="column"
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#5F6980",
              }}
            >
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  justifyItems="center "
                  py="12px"
                >
                  <Box
                    color="#282828"
                    display="flex"
                    justifyItems="center"
                    gap="8px"
                  >
                    <img src={statsIcon} width="20px" height="20px" />
                    <span>Dashboard</span>
                  </Box>
                  <Box onClick={() => setDashboard(!dashboard)}>
                    {dashboard ? (
                      <FaChevronUp color="#282828" />
                    ) : (
                      <FaChevronDown color="#5F6980" />
                    )}
                  </Box>
                </Box>
                {dashboard && (
                  <Box
                    px="28px"
                    display="flex"
                    flexDirection="column"
                    gap="12px"
                    py="12px"
                  >
                    <Box color="#282828">Analytics</Box>
                    <Box>Finance</Box>
                    <Box>Job Board</Box>
                  </Box>
                )}
              </Box>

              <Box
                display="flex"
                justifyContent="space-between"
                justifyItems="center "
                py="12px"
              >
                <Box display="flex" justifyItems="center" gap="8px">
                  <img src={emailIcon} width="20px" height="20px" />
                  <span>Messages</span>
                </Box>
                <Box>
                  <FaChevronDown />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                justifyItems="center "
                py="12px"
              >
                <Box display="flex" justifyItems="center" gap="8px">
                  <img src={friends} width="20px" height="20px" />
                  <span>Friends</span>
                </Box>
                <Box>
                  <FaChevronDown />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                justifyItems="center "
                py="12px"
              >
                <Box display="flex" justifyItems="center" gap="8px">
                  <img src={apps} width="20px" height="20px" />
                  <span>Apps</span>
                </Box>
                <Box>
                  <FaChevronDown />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography
              lineHeight="20px"
              fontSize="12px"
              color="#9D9FA1"
              fontWeight="600"
              mb="16px"
            >
              P A G E S
            </Typography>
            <Box
              my="12px"
              display="flex"
              flexDirection="column"
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#5F6980",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                justifyItems="center "
                py="12px"
              >
                <Box display="flex" justifyItems="center" gap="8px">
                  <img src={help} width="20px" height="20px" />
                  <span>Help Center</span>
                </Box>
                <Box>
                  <FaChevronDown />
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                justifyItems="center "
                py="12px"
              >
                <Box display="flex" justifyItems="center" gap="8px">
                  <img src={folder} width="20px" height="20px" />
                  <span>File Manager</span>
                </Box>
                <Box>
                  <FaChevronDown />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* footer */}
      <Box display="flex" justifyContent="space-between" py="12px" borderTop="1px solid #EAECF0" px="20px">
        <img src={settings} width="20px" height="20px" /> 
        <img src={back} width="20px" height="20px" />

        <img src={globe} width="20px" height="20px" />
      </Box>
    </Box>
  );
};

export default Sidebar;
