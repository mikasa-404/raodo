import { Box, TableContainer, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import left from "../assets/arrow-left.png";
import right from "../assets/arrow-right.png";
import zepplin from "../assets/Brand Logo Box (4).svg";
import vue from "../assets/Brand Logo Box (3).svg";
import angular from "../assets/Brand Logo Box (2).svg";
import meta from "../assets/Brand Logo Box (1).svg";
import figma from "../assets/Brand Logo Box.svg";

import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const InstalledAppsCard = () => {
  const isMobileScreens = useMediaQuery("(max-width: 372px)");

  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];
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
          Installed apps
        </Typography>
        <BsThreeDotsVertical color="#9D9FA1" />
      </Box>
      {/* table */}

      <Box
        width={isMobileScreens ? "320px" : "100%"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <TableContainer
          sx={{
            width: isMobileScreens ? "320px" : "100%",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  "& > *": {
                    color: "#5F6980",
                    lineheight: "22px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell>Source</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>Joined</TableCell>
                <TableCell>Group</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  "& > *": {
                    color: "#5F6980",
                    lineheight: "22px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell>
                  <Box display="flex" gap="12px" alignItems="center">
                    <img src={zepplin} width="44px" height="44px" />
                    <Typography fontWeight="600" color="#282828">
                      Zepplin
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>686.00</TableCell>
                <TableCell>
                  <Box
                    bgcolor="#DCFFF5"
                    color="#20C997"
                    borderRadius={4}
                    padding="2px 10px"
                    fontWeight="600"
                    width="fit-content"
                  >
                    Active
                  </Box>
                </TableCell>
                <TableCell>114423</TableCell>
                <TableCell>October</TableCell>
                <TableCell>Design</TableCell>
              </TableRow>
              <TableRow
                sx={{
                  "& > *": {
                    color: "#5F6980",
                    lineheight: "22px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell>
                  <Box display="flex" gap="12px" alignItems="center">
                    <img src={figma} width="44px" height="44px" />
                    <Typography fontWeight="600" color="#282828">
                      Figma
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>864.00</TableCell>
                <TableCell>
                  <Box
                    bgcolor="#FFEAD8"
                    color="#FD7E14"
                    borderRadius={4}
                    padding="2px 10px"
                    fontWeight="600"
                    width="fit-content"
                  >
                    Pending
                  </Box>
                </TableCell>
                <TableCell>76223</TableCell>
                <TableCell>June</TableCell>
                <TableCell>Finance</TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  "& > *": {
                    color: "#5F6980",
                    lineheight: "22px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell>
                  <Box display="flex" gap="12px" alignItems="center">
                    <img src={meta} width="44px" height="44px" />
                    <Typography fontWeight="600" color="#282828">
                      Meta
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>176.00</TableCell>
                <TableCell>
                  <Box
                    bgcolor="#F2F4F7"
                    color="#5F6980"
                    borderRadius={4}
                    padding="2px 10px"
                    fontWeight="600"
                    width="fit-content"
                  >
                    Cancelled
                  </Box>
                </TableCell>
                <TableCell>89453</TableCell>
                <TableCell>March</TableCell>
                <TableCell>Coding</TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  "& > *": {
                    color: "#5F6980",
                    lineheight: "22px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell>
                  <Box display="flex" gap="12px" alignItems="center">
                    <img src={angular} width="44px" height="44px" />
                    <Typography fontWeight="600" color="#282828">
                      Angular
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>49.00</TableCell>
                <TableCell>
                  <Box
                    bgcolor="#DCFFF5"
                    color="#20C997"
                    borderRadius={4}
                    padding="2px 10px"
                    fontWeight="600"
                    width="fit-content"
                  >
                    Active
                  </Box>
                </TableCell>
                <TableCell>11467</TableCell>
                <TableCell>February</TableCell>
                <TableCell>Marketing</TableCell>
              </TableRow>{" "}
              <TableRow
                sx={{
                  "& > *": {
                    color: "#5F6980",
                    lineheight: "22px",
                    fontSize: "14px",
                  },
                }}
              >
                <TableCell>
                  <Box display="flex" gap="12px" alignItems="center">
                    <img src={vue} width="44px" height="44px" />
                    <Typography fontWeight="600" color="#282828">
                      Vue
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>999.00</TableCell>
                <TableCell>
                  <Box
                    bgcolor="#DCFFF5"
                    color="#20C997"
                    borderRadius={4}
                    padding="2px 10px"
                    fontWeight="600"
                    width="fit-content"
                  >
                    Active
                  </Box>
                </TableCell>
                <TableCell>67385</TableCell>
                <TableCell>October</TableCell>
                <TableCell>Finance</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        py={isMobileScreens ? "16px" : "24px"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="flex" alignItems="center">
          <img src={left} width="32px" height="32px" />
          <Typography
            fontSize={isMobileScreens ? "14px" : "18px"}
            lineHeight={isMobileScreens ? "22px" : "30px"}
            fontWeight="400"
          >
            1/15
          </Typography>
          <img src={right} width="32px" height="32px" />
        </Box>
      </Box>
    </Box>
  );
};

export default InstalledAppsCard;
