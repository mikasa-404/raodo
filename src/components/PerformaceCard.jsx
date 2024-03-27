import { Box, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
import graph from "../assets/Content.svg";
import graph2 from "../assets/Axis.svg";

import { GoDotFill } from "react-icons/go";

import { BsPCircle, BsThreeDotsVertical } from "react-icons/bs";

const PerformaceCard = () => {
  const isMobileScreens = useMediaQuery("(max-width: 372px)");

  return (
    <Box bgcolor="white" borderRadius={3}>
      {/* header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={isMobileScreens ? "16px" : "24px"}
        py={isMobileScreens ? "14px" : "16px"}
        borderBottom="1px solid #EAECF0"
      >
        <Typography
          fontWeight="600"
          fontSize={isMobileScreens ? "16px" : "18px"}
          lineHeight={isMobileScreens ? "26px" : "30px"}
        >
          Performance
        </Typography>
        <BsThreeDotsVertical color="#9D9FA1" />
      </Box>
      {/* graph */}
      <Box px={isMobileScreens?"0":"24px"} py={isMobileScreens?"24px":"32px"}>
        <img src={isMobileScreens ? graph2 : graph} alt="graph" width="100%" />
      </Box>
      <Box pb="24px" alignItems="center" display="flex" justifyContent="center" color="#5F6980"
      
      fontSize="14px"
      lineHeight="22px">
        <Box display="flex" gap="32px">
          <Box display="flex" gap="8px" alignItems="center">
            <GoDotFill color="#5A9CFE" size={20}/>
            Instagram
          </Box>
          <Box display="flex" gap="8px" alignItems="center">
            <GoDotFill color="#20C997"size={20} />
            Facebook
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PerformaceCard;
