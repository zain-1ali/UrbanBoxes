import React, { useEffect, useState } from "react";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoYoutube,
  BiLogoPinterest,
  BiSearchAlt2,
} from "react-icons/bi";
import { useMemo } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  BsTelephone,
  BsTelephoneFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../imgs/Urbanlogo1.png";
import MediaQuery from "react-responsive";
// import Drawer from "./Drawer";
import TheDrawer from "./Drawer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryPage,
  getOtherPages,
  headerFoterLayout,
} from "../redux/ApiSlice";
import HeaderFormModal from "./Modals/HeaderFormModal";
import NavDropdown from "./NavDropdown";
import { ListItem, Menu, MenuItem } from "@mui/material";
// import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  let [drawer, setDrawer] = useState(false);

  const data = useSelector((state) => state.siteDetails.data);

  let handleDrawer = () => {
    setDrawer(!drawer);
  };

  let closeDrawer = () => {
    setDrawer(false);
  };

  let navigate = useNavigate();

  let path = window.location.pathname;
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
  console.log(otherPages);

  let [headerForm, setHeaderForm] = useState(false);
  let handleHeaderForm = () => {
    setHeaderForm(!headerForm);
  };

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
    <>
      <div className="w-[100%] h-[230px] border shadow-sm">
        <HeaderFormModal
          handleHeaderForm={handleHeaderForm}
          headerForm={headerForm}
        />

        <div className="w-[100%] sm:h-[55px] h-[40px] border-b shadow-sm flex justify-between">
          <MediaQuery minWidth={640}>
            <div className="h-[100%] w-[380px] flex justify-end items-center ">
              <p
                className="font-medium ml-3 sm:text-[16px] text-[14px] text-[#585656]"
                style={{ fontFamily: "Roboto" }}
              >
                Follow Us On :{" "}
              </p>

              <div className="sm:h-[30px] sm:w-[30px]  h-[25px] w-[25px]  border rounded-full flex justify-center items-center border-black ml-3 cursor-pointer hover:border-[#449F5A]">
                <BiLogoFacebook className="hover:text-[#449F5A]" />
              </div>
              <div className="h-[30px] w-[30px] border rounded-full flex justify-center items-center border-black ml-3 cursor-pointer hover:border-[#449F5A]">
                <BiLogoInstagramAlt className="hover:text-[#449F5A]" />
              </div>
              <div className="h-[30px] w-[30px] border rounded-full flex justify-center items-center border-black ml-3 cursor-pointer hover:border-[#449F5A]">
                <BiLogoYoutube className="hover:text-[#449F5A]" />
              </div>
              <div className="h-[30px] w-[30px] border rounded-full flex justify-center items-center border-black ml-3 cursor-pointer hover:border-[#449F5A]">
                <BiLogoPinterest className="hover:text-[#449F5A]" />
              </div>
            </div>
          </MediaQuery>

          <MediaQuery maxWidth={440}>
            <div
              className="h-[100%] flex items-center ml-2"
              onClick={() => handleDrawer()}
            >
              <AiOutlineMenu className="text-xl text-[#585656]" />
            </div>
            <TheDrawer
              drawer={drawer}
              handleDrawer={closeDrawer}
              mobileLogo={headerFoterData?.data?.logo?.mobileLogo}
              mobileLogoTag={headerFoterData?.data?.logo?.mobileLogoTag}
            />
          </MediaQuery>
          <div className="h-[100%] sm:w-[450px] w-[290px] flex justify-end ">
            <div
              className="hover:bg-[#F2F2F2] sm:w-[70px] w-[47px] sm:text-[16px] text-sm text-[#585656] flex justify-center items-center font-[400]  cursor-pointer"
              style={{ fontFamily: "Roboto" }}
            >
              Blog
            </div>
            <div
              className="hover:bg-[#F2F2F2] sm:w-[120px] w-[88px] sm:text-[16px] text-sm   text-[#585656] flex justify-center items-center font-[400] border-l cursor-pointer"
              style={{ fontFamily: "Roboto" }}
              onClick={() => navigate("/contactus")}
            >
              Contact Us
            </div>
            <div
              className="hover:bg-[#F2F2F2] sm:w-[70px] w-[47px] sm:text-[16px] text-sm  text-[#585656] flex justify-center items-center font-[400] border-l cursor-pointer"
              style={{ fontFamily: "Roboto" }}
            >
              Help
            </div>
            {/* <Link to="/gogreen"> */}
            <div
              className="sm:w-[151px] w-[90px] sm:text-[16px] text-sm bg-[#449F5A] hover:bg-[#6AD37F] text-white flex justify-center items-center font-medium cursor-pointer text-[16px]"
              style={{ fontFamily: "Roboto" }}
              onClick={() => navigate("/gogreen")}
            >
              Go Green
            </div>
            {/* </Link> */}
          </div>
        </div>
        <div className=" w-[100%] h-[175px] flex flex-col items-center">
          <div className=" lg:w-[86%] md:w-[95%] w-[86%] h-[54px] mt-[30px]  sm:justify-between sm:flex-row sm:items-center  sm:flex  flex flex-col items-center">
            <MediaQuery minWidth={640}>
              <div className="flex items-center ">
                <img
                  src={headerFoterData?.data?.logo?.headerLogo}
                  alt={headerFoterData?.data?.logo?.headerLogoTag}
                  className="lg:h-[75px] lg:w-[260px] md:h-[40px] md:w-[180px] object-cover"
                />
                {/* className="h-[50px] w-[84px]"  */}
                {/* <h2
                  className="font-[800] text-xl ml-2"
                  style={{ fontFamily: "Roboto" }}
                >
                  URBAN BOXES
                </h2> */}
              </div>
            </MediaQuery>
            <div className="h-[45px] w-[320px] md:h-[40px] md:w-[220px] lg:h-[45px] lg:w-[350px] border border-[#449F5A] p-2 flex items-center rounded-md placeholder:text-xl">
              <input
                type="text"
                placeholder="Search"
                className="w-[90%] outline-none"
              />

              <BiSearchAlt2 className="text-lg" />
            </div>
            <MediaQuery minWidth={640}>
              <div className="h-[52px] flex items-center">
                <div className="lg:w-[47px] lg:h-[47px] md:w-[40px] md:h-[40px] rounded-full flex justify-center items-center border border-[#449F5A]">
                  <BsFillTelephoneFill className="text-[#449F5A] lg:text-2xl md:text-xl" />
                </div>

                <div className="ml-2">
                  <h2
                    className="lg:text-[16px] md:text-[14px] font-[600]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Call us toll free
                  </h2>
                  <p
                    className="text-[#585656] text-xl md:text-[16px]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    (000)-000-000-000
                  </p>

                  {/* <NavDropdown handleMenu={handleMenu} openMenu={openMenu} /> */}
                </div>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={640}>
              <div
                className="h-[52px] flex items-center cursor-pointer"
                onClick={() => handleHeaderForm()}
              >
                <div className="w-[35px] h-[35px] lg:w-[47px] lg:h-[47px] md:w-[40px] md:h-[40px] rounded-full flex justify-center items-center border border-[#449F5A]">
                  <FaBoxOpen className="text-[#449F5A] text-3xl md:text-xl" />
                </div>

                <div className="ml-2">
                  <h2 className="lg:text-[16px] md:text-[14px] font-[600]">
                    Request free
                  </h2>
                  <p className="text-[#585656] text-xl md:text-[16px]">
                    Get A Quote
                  </p>
                </div>
              </div>
            </MediaQuery>

            <MediaQuery maxWidth={440}>
              <div className="flex mt-[40px] w-[100%] justify-around">
                <div className=" flex items-center mr-4">
                  <div className="w-[40px] h-[40px]  rounded-full flex justify-center items-center border border-[#449F5A]">
                    <BsFillTelephoneFill className="text-[#449F5A] text-xl " />
                  </div>

                  <div className="ml-2">
                    <h2 className="text-[14px] font-[500]">
                      {""}
                      Call us toll free
                    </h2>
                    <p className="text-[#585656] text-[12px]">
                      (000)-000-000-000
                    </p>
                  </div>
                </div>

                <div className=" flex items-center">
                  <div className="w-[40px] h-[40px]  rounded-full flex justify-center items-center border border-[#449F5A]">
                    <FaBoxOpen className="text-[#449F5A] text-xl " />
                  </div>

                  <div className="ml-2">
                    <h2 className="text-[14px] font-[500]">Request free</h2>
                    <p className="text-[#585656] text-[12px]">Get A Quote</p>
                  </div>
                </div>
              </div>
            </MediaQuery>
          </div>
          <MediaQuery minWidth={640}>
            <div className="w-[86%] mt-[35px]  flex">
              <Link to="/">
                <div
                  className="text-[16px] font-medium cursor-pointer"
                  style={
                    path === "/"
                      ? { color: "#449F5A", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                  // onClick={navigate("/")}
                >
                  Home
                </div>
              </Link>

              <div
                className="text-[16px] font-medium flex ml-5 items-center cursor-pointer"
                component="nav"
                // aria-label="Device settings"
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={openPageMenu ? "true" : undefined}
                onClick={handleClickListItem}
                style={
                  path === "/category"
                    ? { color: "#449F5A", fontFamily: "Poppins" }
                    : { fontFamily: "Poppins" }
                }
              >
                By Industry
                <IoIosArrowDown className="ml-1" />
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
                className="text-[16px] font-medium flex ml-5 items-center cursor-pointer"
                component="nav"
                // aria-label="Device settings"
                id="lock-button-menu"
                aria-haspopup="listbox"
                aria-controls="lock-menu2"
                aria-label="when device is locked"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleClicPageItem}
              >
                Other Pages
                <IoIosArrowDown className="ml-1" />
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

              <Link to="/gogreen">
                <div
                  className="text-[16px] font-medium flex ml-5 items-center"
                  style={
                    path === "/gogreen"
                      ? { color: "#449F5A", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                >
                  Go Green
                </div>
              </Link>

              <Link to="/luxurayFinishes">
                <div
                  className="text-[16px] font-medium ml-5"
                  style={
                    path === "/luxurayFinishes"
                      ? { color: "#449F5A", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                >
                  Luxury Finishes
                </div>
              </Link>

              <Link to="/bystyle">
                <div
                  className="text-[16px] font-medium ml-5"
                  style={
                    path === "/bystyle"
                      ? { color: "#449F5A", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                >
                  By Style
                </div>
              </Link>

              <Link to="/aboutUs">
                <div
                  className="text-[16px] font-medium ml-5"
                  style={
                    path === "/aboutUs"
                      ? { color: "#449F5A", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                >
                  About Us
                </div>
              </Link>

              <Link to="/contactus">
                <div
                  className="text-[16px] font-medium ml-5"
                  style={
                    path === "/contactus"
                      ? { color: "#449F5A", fontFamily: "Poppins" }
                      : { fontFamily: "Poppins" }
                  }
                >
                  Contact Us
                </div>
              </Link>
            </div>
          </MediaQuery>
        </div>
      </div>
      {/* <div className="w-[100%] h-[558px] border"></div> */}
    </>
  );
};

export default Navbar;
