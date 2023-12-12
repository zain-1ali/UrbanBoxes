import React, { useEffect, useState } from "react";
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
  Menu,
  MenuItem,
} from "@mui/material";
import {
  BiSolidHome,
  BiSolidCategoryAlt,
  BiSolidLeaf,
  BiSolidContact,
  BiSolidHelpCircle,
  BiSolidLogOut,
} from "react-icons/bi";
import { BsFillBoxSeamFill, BsInfoSquareFill, BsBoxes } from "react-icons/bs";
import { FaBoxes } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";

import { useNavigate } from "react-router-dom";
import {
  categoryPage,
  getOtherPages,
  headerFoterLayout,
} from "../redux/ApiSlice";
import { useDispatch, useSelector } from "react-redux";

const TheDrawer = ({ drawer, handleDrawer, mobileLogoTag, mobileLogo }) => {
  let navigate = useNavigate();

  let dispatch = useDispatch();
  let headerFoterData = useSelector((state) => state.ApiSlice.headerFoterData);
  let categoryData = useSelector((state) => state.ApiSlice.categoryData);
  let otherPages = useSelector((state) => state.ApiSlice.otherPages);
  console.log(categoryData);
  useEffect(() => {
    dispatch(headerFoterLayout());
    dispatch(categoryPage());
    dispatch(getOtherPages());
  }, []);
  let [openMenu, setopenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let [openPageMenu, setopenPageMenu] = useState(false);

  const [anchorElPage, setAnchorElPage] = useState(null);

  const openPages = Boolean(anchorElPage);

  const handleClicPageItem = (event) => {
    setAnchorElPage(event.currentTarget);
  };
  const handleClosePage = () => {
    setAnchorElPage(null);
  };

  return (
    <div>
      <Drawer anchor="left" open={drawer} onClose={handleDrawer}>
        <div className="w-[250px] min-h-[100vh]">
          <div className="flex flex-col items-center w-[100%] mt-[25px]">
            <img
              src={headerFoterData?.data?.logo?.headerLogo}
              alt={mobileLogoTag}
              className="h-[40px] w-[130px] object-cover"
            />
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
              <div
                component="nav"
                // aria-label="Device settings"
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={openPageMenu ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <FaBoxes className="text-xl" />
                    </ListItemIcon>
                    <ListItemText primary="By Industry" />
                  </ListItemButton>
                </ListItem>
              </div>

              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "lock-button",
                  role: "listbox",
                }}
              >
                {categoryData?.data?.categories?.map((option, index) => (
                  <MenuItem
                    key={index}
                    // disabled={index === 0}
                    // selected={index === selectedIndex}
                    // onClick={(event) => handleMenuItemClick(event, index)}
                    onClick={() => {
                      navigate(`/singlecategory/${option?.id}`, {
                        state: {
                          heading: option?.name,
                          paragraph: option?.description,
                          imgUrl: option?.image,
                          bgClr: option?.color,
                        },
                      }),
                        handleClose();
                    }}
                  >
                    {option?.name}
                  </MenuItem>
                ))}
              </Menu>

              <div
                component="nav"
                // aria-label="Device settings"
                id="lock-button-menu"
                aria-haspopup="listbox"
                aria-controls="lock-menu2"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleClicPageItem}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <RiPagesFill className="text-xl" />
                    </ListItemIcon>
                    <ListItemText primary="Other Pages" />
                  </ListItemButton>
                </ListItem>
              </div>

              <Menu
                id="lock-menu2"
                anchorEl={anchorElPage}
                open={openPages}
                onClose={handleClosePage}
                MenuListProps={{
                  "aria-labelledby": "lock-button-menu",
                  role: "listbox",
                }}
                style={{ width: "200px" }}
                // sx={{ width: "200px" }}
              >
                {otherPages?.data?.map((option, index) => (
                  <MenuItem
                    key={index}
                    // disabled={index === 0}
                    // selected={index === selectedIndex}
                    // onClick={(event) => handleMenuItemClick(event, index)}
                    onClick={() => {
                      navigate(`/customPage/${option?.uniqueName}`),
                        handleClosePage();
                    }}
                  >
                    {option?.name}
                  </MenuItem>
                ))}
              </Menu>
            </List>
            <Divider />
            <List>
              {[
                { text: "Help", icon: BiSolidHelpCircle },
                { text: "Logout", icon: BiSolidLogOut },
              ].map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onCli>
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
