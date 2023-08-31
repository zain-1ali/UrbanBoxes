import React, { useState } from "react";
import logo from "../imgs/Urbanlogo1.png";
import whatsapp from "../imgs/whatsapp2.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import { Box, Collapse, Paper } from "@mui/material";
import TheDrawer from "./Drawer";

const MobileNavbar = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
    window.scrollTo(0, 0);
    // console.log("test");
  };

  let [drawer, setDrawer] = useState(false);

  let handleDrawer = () => {
    setDrawer(!drawer);
    console.log("test");
  };

  let closeDrawer = () => {
    setDrawer(false);
  };

  return (
    <>
      <div className="w-[100%] h-[75px]  flex justify-between items-center fixed top-0 bg-white z-30 shadow-md">
        <img src={logo} alt="" className="h-[37px] w-[155px] ml-3" />
        <div className="flex mr-2 items-center">
          <img src={whatsapp} alt="" className="h-[30px] w-[30px]" />
          <BiSearchAlt
            className="text-[28px] ml-3"
            onClick={() => handleChange()}
          />
          <HiOutlineMenuAlt3
            className="text-3xl ml-4"
            onClick={() => handleDrawer()}
          />
        </div>
      </div>
      <br />
      <br />
      {/* <br /> */}
      <TheDrawer drawer={drawer} handleDrawer={closeDrawer} />
      <Collapse
        in={checked}
        //  sx={{ width: "100%", height: "50px" }}
      >
        <Paper elevation={4}>
          <Box
            // component="svg"
            sx={{
              width: "100%",
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              //   position: "fixed",
              //   bottom: 0,
            }}
          >
            <div className="w-[250px] h-[38px] border border-gray-400 rounded-3xl mt-[25px] flex items-center">
              <input
                type="text"
                className="w-[85%] h-[100%] outline-none border-r border-gray-400 rounded-3xl p-3"
                placeholder="Search..."
              />
              <BiSearchAlt
                className="text-xl ml-2 text-gray-500"
                // onClick={() => handleChange()}
              />
            </div>
          </Box>
        </Paper>
      </Collapse>
    </>
  );
};

export default MobileNavbar;
