import { Box } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useMediaQuery } from "@mui/material";

const App = () => {
  const isMobileScreens = useMediaQuery("(max-width: 372px)");

  return (
    <Box display="flex" bgcolor={isMobileScreens? "white":"#F2F4F7"}>
      {!isMobileScreens && (
        <Box width="232px" height="1024px">
          <Sidebar />
        </Box>
      )}

      <Box flexGrow={1}>
        <Dashboard />
      </Box>
    </Box>
  );
};

export default App;
