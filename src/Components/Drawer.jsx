import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import logo from "../imgs/Urbanlogo1.png";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  BiSolidHome,
  BiSolidCategoryAlt,
  BiSolidLeaf,
  BiSolidContact,
  BiSolidHelpCircle,
  BiSolidLogOut,
} from "react-icons/bi";
import { BsFillBoxSeamFill, BsInfoSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const TheDrawer = ({ drawer, handleDrawer }) => {
  let navigate = useNavigate();
  return (
    <div>
      <Drawer anchor="left" open={drawer} onClose={handleDrawer}>
        <div className="w-[250px] min-h-[100vh]">
          <div className="flex flex-col items-center w-[100%] mt-[25px]">
            <img src={logo} alt="logo" className="h-[50px] w-[200px]" />
          </div>
          {/*<div className="mt-8 ml-3">
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

          <div></div> */}
          {/* </div> */}
          {/* </Box> */}

          <Box
            sx={{ width: 250, marginTop: 2 }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            // onKeyDown={toggleDrawer(anchor, false)}
          >
            <List>
              {[
                {
                  text: "Home",
                  icon: BiSolidHome,
                  path: "/",
                },
                {
                  text: "Category",
                  icon: BiSolidCategoryAlt,
                  path: "/category",
                },

                {
                  text: "Go Green",
                  icon: BiSolidLeaf,
                  path: "/gogreen",
                },
                {
                  text: "Luxury Finishes",
                  icon: BsFillBoxSeamFill,
                  path: "/luxurayFinishes",
                },

                {
                  text: "About Us",
                  icon: BsInfoSquareFill,
                  path: "/aboutUs",
                },
                {
                  text: "Contact Us",
                  icon: BiSolidContact,
                  path: "/contactus",
                },
              ].map((text, index) => (
                <ListItem
                  key={text.text}
                  disablePadding
                  onClick={() => navigate(text.path)}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      {/* {text.icon} */}
                      <text.icon className="text-xl" />
                    </ListItemIcon>
                    <ListItemText primary={text.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[
                { text: "Help", icon: BiSolidHelpCircle },
                { text: "Logout", icon: BiSolidLogOut },
              ].map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <text.icon className="text-xl" />
                    </ListItemIcon>
                    <ListItemText primary={text.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </div>
      </Drawer>
    </div>
  );
};

export default TheDrawer;
