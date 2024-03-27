import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
import Navbar from "./Navbar";
import boltIcon from "../assets/bolt.svg";
import Card from "./Card";
import PerformaceCard from "./PerformaceCard";
import InstalledAppsCard from "./InstalledAppsCard";
const Dashboard = () => {
  const isMobileScreens = useMediaQuery("(max-width: 372px)");
  const cardsInfo = [
    {
      id: 1,
      title: "Revenue",
      content: "76.8%",
      badgeColor: "#DCFFF5",
      textColor: "#20C997",
      badge: "+45%",
      info: "From 4.6%",
    },
    {
      id: 2,
      title: "Users",
      content: "$56,945",
      badgeColor: "#FFE0E3",
      textColor: "#DC3545",
      badge: "-1.7%",
      info: "From 4.6%",
    },
    {
      id: 3,
      title: "New Signups",
      content: "116",
      badgeColor: "#F2F4F7",
      textColor: "#5F6980",
      badge: "0.0",
      info: "",
    },
    {
      id: 4,
      title: "Retention",
      content: "12.67%",
      badgeColor: "#DCFFF5",
      textColor: "#20C997",
      badge: "+0.6%",
      info: "From 4.6%",
    },
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        gap: isMobileScreens ? "12px" : "32px",
        pb: isMobileScreens ? "12px" : "32px",
      }}
      
    >
      {/* serach bar */}
      <Box>
        <Navbar />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          gap: isMobileScreens ? "24px" : "32px",
          mx: isMobileScreens ? "16px" : "32px",
        }}
      >
        {/* unlock premium card*/}

        <Box
          px="36px"
          py="32px"
          borderRadius={3}
          display="flex"
          sx={{
            flexDirection: isMobileScreens ? "column" : "row",
            justifyContent: isMobileScreens ? "center" : "space-between",
            alignItems: "center",
            textAlign: isMobileScreens && "center",
          }}
          bgcolor="#282828"
        >
          <Box flex="flex" flexDirection="column" gap="8px" color="white">
            <Typography
              fontWeight="600"
              fontSize={isMobileScreens ? "25px" : "28px"}
              lineHeight={isMobileScreens ? "38px" : "34px"}
              letterSpacing={isMobileScreens ? "" : "-0.6px"}
            >
              Unlock premium stats
            </Typography>
            <Typography fontWeight="400" fontSize="14px" lineHeight="22px">
              Get up to 10TB of storage for a limited time
            </Typography>
          </Box>
          <Box
            borderRadius={10}
            bgcolor="white"
            display="flex"
            alignItems="center"
            height={isMobileScreens ? "40px" : "46px"}
            justifyContent="center"
            px={isMobileScreens ? "20px" : "27px"}
            fontWeight="600"
            fontSize={isMobileScreens ? "14px" : "16px"}
            lineHeight={isMobileScreens ? "24px" : "28px"}
            letterSpacing="-0.4px"
            width={isMobileScreens ? "119px" : "fit-content"}
          >
            <img src={boltIcon} width="20px" height="20px" />
            <span>Upgrade</span>
          </Box>
        </Box>
        {/* cards */}
        <Box
          display="flex"
          flexDirection={isMobileScreens ? "column" : "row"}
          gap={isMobileScreens ? "16px" : "32px"}
        >
          {cardsInfo.map((card) => (
            <Card
              title={card.title}
              content={card.content}
              badge={card.badge}
              info={card.info}
              badgeColor={card.badgeColor}
              textColor={card.textColor}
            />
          ))}
        </Box>
        {/* performace  */}
        <PerformaceCard />
        {/* installed apps */}
        <InstalledAppsCard/>
      </Box>
    </Box>
  );
};

export default Dashboard;
