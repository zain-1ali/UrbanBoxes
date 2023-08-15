import React, { useState } from "react";
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

const Navbar = () => {
  let [drawer, setDrawer] = useState(false);

  let handleDrawer = () => {
    setDrawer(!drawer);
    console.log("test");
  };

  let closeDrawer = () => {
    setDrawer(false);
  };

  let navigate = useNavigate();

  return (
    <>
      <div className="w-[100%] h-[230px] border shadow-sm">
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
            <TheDrawer drawer={drawer} handleDrawer={closeDrawer} />
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
                  src={logo}
                  alt="logo"
                  className="lg:h-[50px] lg:w-[200px] md:h-[40px] md:w-[180px]"
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
                </div>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={640}>
              <div className="h-[52px] flex items-center">
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
                  style={{ fontFamily: "Poppins" }}
                  // onClick={navigate("/")}
                >
                  Home
                </div>
              </Link>
              <Link to="/category">
                <div
                  className="text-[16px] font-medium flex ml-5 items-center cursor-pointer"
                  style={{ fontFamily: "Poppins" }}
                >
                  Category
                  {/* <IoIosArrowDown className="ml-1" /> */}
                </div>
              </Link>
              <Link to="/gogreen">
                <div
                  className="text-[16px] font-medium flex ml-5 items-center"
                  style={{ fontFamily: "Poppins" }}
                >
                  Go Green
                </div>
              </Link>

              <Link to="/luxurayFinishes">
                <div
                  className="text-[16px] font-medium ml-5"
                  style={{ fontFamily: "Poppins" }}
                >
                  Luxury Finishes
                </div>
              </Link>
              <Link to="/aboutUs">
                <div
                  className="text-[16px] font-medium ml-5"
                  style={{ fontFamily: "Poppins" }}
                >
                  About Us
                </div>
              </Link>
              <Link to="/contactus">
                <div
                  className="text-[16px] font-medium ml-5"
                  style={{ fontFamily: "Poppins" }}
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
