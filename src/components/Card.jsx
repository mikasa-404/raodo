import { Box, Typography } from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";

const Card = ({ title, content, badge, info, badgeColor, textColor }) => {
  const isMobileScreens = useMediaQuery("(max-width: 372px)");

  return (
    <Box
      flexGrow={1}
      bgcolor="white"
      borderRadius={3}
      boxShadow="0px 1px 10px 0px #0000000F"
      padding={isMobileScreens ? "12px" : "20px"}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height={isMobileScreens ? "108px" : "122px"}
    >
      <Box>
        <Typography
          fontSize={isMobileScreens ? "14px" : "16px"}
          lineHeight={isMobileScreens ? "22px" : "26px"}
          color="#5F6980"
        >
          {title}
        </Typography>
        <Typography
          fontSize={isMobileScreens ? "22px" : "26px"}
          lineHeight={isMobileScreens ? "38px" : "40px"}
          fontWeight="600"
        >
          {content}
        </Typography>
      </Box>
      <Box display="flex" fontSize="12px" lineHeight="20px" fontWeight="600" color={"#9D9FA1"} gap="8px" alignItems="center">
        <Box bgcolor={badgeColor} color={textColor}  borderRadius={4} padding="2px 10px">{badge}</Box>
        <Box>{info}</Box>
      </Box>
    </Box>
  );
};

export default Card;
