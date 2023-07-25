import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import logo from "../imgs/Urbanlogo1.png";

const TheDrawer = ({ drawer, handleDrawer }) => {
  return (
    <div>
      <Drawer anchor="left" open={drawer} onClose={handleDrawer}>
        {/* <div className="h-[100vh] w-[300px]"></div> */}
        {/* <Box sx={{ width: 230 }}> */}
        <div className="w-[230px] min-h-[100vh]">
          <div className="flex flex-col items-center w-[100%] mt-[25px]">
            <img src={logo} alt="logo" className="h-[50px] w-[200px]" />
            {/* <h2
              className="font-[800] text-xl mt-2"
              style={{ fontFamily: "Roboto" }}
            >
              URBAN BOXES
            </h2> */}
          </div>
          <div className="mt-8 ml-3">
            <div
              className="text-xl font-medium"
              style={{ fontFamily: "Roboto" }}
            >
              Home
            </div>
            <div
              className="text-xl font-medium mt-5"
              style={{ fontFamily: "Roboto" }}
            >
              By Industry
            </div>
            <div
              className="text-xl font-medium mt-5"
              style={{ fontFamily: "Roboto" }}
            >
              Luxury Rigid Boxes
            </div>
            <div
              className="text-xl font-medium mt-5"
              style={{ fontFamily: "Roboto" }}
            >
              By Style
            </div>
            <div
              className="text-xl font-medium mt-5"
              style={{ fontFamily: "Roboto" }}
            >
              Luxury Finishes
            </div>
          </div>

          <div></div>
        </div>
        {/* </Box> */}
      </Drawer>
    </div>
  );
};

export default TheDrawer;
