import React from "react";
import logo from "../imgs/Urbanlogowhite1.png";
import {
  BsFillPersonFill,
  BsTelephoneFill,
  BsBuildingsFill,
  BsFillStopwatchFill,
} from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoPinterest,
  BiLogoYoutube,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="sm:h-[500px] h-[200px] w-[100%]  bg-[#2C703C] sm:mt-[65px] mt-[25px]">
      <div className="h-[90%] w-[100%] flex justify-evenly">
        <div className=" sm:mt-[50px] mt-[30px]">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="sm:h-[70px] sm:w-[290px] h-[30px] w-[120px]"
            />
            {/* <h2
              className="text-2xl font-[800] ml-2 text-white"
              style={{ fontFamily: "Roboto" }}
            >
              URBAN BOXES
            </h2> */}
          </div>
          <h2
            className="sm:mt-[35px] mt-[20px] font-[700] sm:text-[38px] text-[12px] text-white sm:w-[370px] w-[170px]  "
            style={{ fontFamily: "Inter" }}
          >
            Custom Printed Boxes & Packaging
          </h2>
          <p
            className="sm:text-xl text-[7px] sm:w-[369px] w-[170px] font-[400] text-[#FFFFFF] sm:mt-[7px] mt-[7px] "
            style={{ fontFamily: "Roboto" }}
          >
            Lorem ipsum dolor sit amet consectetur. Scelerisque quam tempor eget
            cras quis. Cursus pulvinar fusce scelerisque tempus mus ullamcorper{" "}
          </p>
        </div>

        <div className="sm:mt-[50px] mt-[30px]">
          <h2
            className="sm:text-2xl text-[12px] sm:font-[700] font-[500]  text-white"
            style={{ fontFamily: "Roboto" }}
          >
            COMPANY
          </h2>
          <p
            className="sm:mt-[10px] mt-[5px] sm:text-lg text-[7px] font-[400]  text-white"
            style={{ fontFamily: "Roboto" }}
          >
            About Us
          </p>
          <p
            className="sm:mt-[10px] mt-[5px] sm:text-lg text-[7px] font-[400]  text-white"
            style={{ fontFamily: "Roboto" }}
          >
            Bolg
          </p>
          <p
            className="sm:mt-[10px] mt-[5px] sm:text-lg text-[7px] font-[400]  text-white"
            style={{ fontFamily: "Roboto" }}
          >
            FAQ's
          </p>{" "}
          <p
            className="sm:mt-[10px] mt-[5px] sm:text-lg text-[7px] font-[400]  text-white"
            style={{ fontFamily: "Roboto" }}
          >
            Terms & Conditions
          </p>{" "}
          <p
            className="sm:mt-[10px] mt-[5px] sm:text-lg text-[7px] font-[400]  text-white"
            style={{ fontFamily: "Roboto" }}
          >
            Privacy Policy
          </p>{" "}
          <p
            className="sm:mt-[10px] mt-[5px] sm:text-lg text-[7px] font-[400]  text-white"
            style={{ fontFamily: "Roboto" }}
          >
            Custom Quote
          </p>
          <p
            className="sm:mt-[10px] mt-[5px] sm:text-lg text-[7px] font-[400]  text-white"
            style={{ fontFamily: "Roboto" }}
          >
            Contact Us
          </p>
          <p
            className="sm:mt-[10px] mt-[5px] sm:text-lg text-[7px] font-[400]  text-white"
            style={{ fontFamily: "Roboto" }}
          >
            Sitemaps
          </p>
        </div>

        <div className="sm:mt-[50px] mt-[30px]">
          <h2
            className="sm:text-2xl text-[12px] sm:font-[700] font-[500]  text-white"
            style={{ fontFamily: "Roboto" }}
          >
            CONTACT
          </h2>
          <div className="flex items-center sm:mt-[20px] mt-[5px]">
            <RiPhoneFill className="sm:text-2xl text-[7px] text-white mr-1 sm:mr-2" />
            <p
              className="  sm:text-lg text-[7px] font-[400]  text-white "
              style={{ fontFamily: "Roboto" }}
            >
              0000-000-0000
            </p>
          </div>

          <div className="flex sm:mt-[20px] mt-[5px] items-center">
            <MdEmail className="sm:text-2xl text-[7px] text-white mr-1 sm:mr-2" />
            <p
              className="  sm:text-lg text-[7px] font-[400]  text-white"
              style={{ fontFamily: "Roboto" }}
            >
              company@boxes.com
            </p>
          </div>

          <div className="flex sm:mt-[20px] mt-[5px] items-center">
            <HiLocationMarker className="sm:text-2xl text-[7px] text-white mr-1 sm:mr-2" />
            <p
              className="  sm:text-lg text-[7px] font-[400]  text-white"
              style={{ fontFamily: "Roboto" }}
            >
              Los Vegas, LV 22001
            </p>
          </div>
          <div className="flex sm:mt-[20px] mt-[5px] items-center">
            <BsFillStopwatchFill className="sm:text-2xl text-[7px] text-white mr-1 sm:mr-2" />
            <p
              className="  sm:text-lg text-[7px] font-[400]  text-white"
              style={{ fontFamily: "Roboto" }}
            >
              Mon - Fri: 8:00 - 6:00 PM
            </p>
          </div>
          <div className=" sm:mt-[20px] mt-[10px]">
            <h2
              className="sm:text-xl text-[11px] font-[600] text-white"
              style={{ fontFamily: "Roboto" }}
            >
              Follow Us on:
            </h2>
            <div className=" flex  sm:mt-3 mt-1">
              <div className="sm:h-[33px] sm:w-[33px] h-[10px] w-[10px] border rounded-full flex justify-center items-center border-white  cursor-pointer">
                <BiLogoFacebook className="text-white sm:text-2xl text-[5px]" />
              </div>
              <div className="sm:h-[33px] sm:w-[33px] h-[10px] w-[10px] border rounded-full flex justify-center items-center border-white sm:ml-5 ml-1 cursor-pointer">
                <BiLogoInstagramAlt className="text-white sm:text-2xl text-[5px]" />
              </div>
              <div className="sm:h-[33px] sm:w-[33px] h-[10px] w-[10px] border rounded-full flex justify-center items-center border-white sm:ml-5 ml-1 cursor-pointer">
                <BiLogoYoutube className="text-white sm:text-2xl text-[5px]" />
              </div>
              <div className="sm:h-[33px] sm:w-[33px] h-[10px] w-[10px] border rounded-full flex justify-center items-center border-white sm:ml-5 ml-1 cursor-pointer">
                <BiLogoTwitter className="text-white sm:text-2xl text-[5px]" />
              </div>
              <div className="sm:h-[33px] sm:w-[33px] h-[10px] w-[10px] border rounded-full flex justify-center items-center border-white sm:ml-5 ml-1 cursor-pointer">
                <BiLogoLinkedin className="text-white sm:text-xl  text-[5px]" />
              </div>
              <div className="sm:h-[33px] sm:w-[33px] h-[10px] w-[10px] border rounded-full flex justify-center items-center border-white sm:ml-5 ml-1 cursor-pointer">
                <RiWhatsappFill className="text-white sm:text-2xl text-[5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t h-[10%] lg:w-[100%] md:W-[100%] w-[100%]">
        <div className="flex h-[100%]   sm:ml-[135px] ml-[35px] items-center">
          <h2
            className="font-[600] sm:text-[14px] text-[5px] text-white"
            style={{ fontFamily: "Poppins" }}
          >
            2023 Logoipsum Software Inc.
          </h2>

          <div className="w-[1px] sm:h-[32px] h-[15px] bg-[#6B6A6A] sm:ml-5 ml-2"></div>

          <h2
            className="font-[600] sm:text-[14px] text-[5px] text-white sm:ml-5 ml-2"
            style={{ fontFamily: "Poppins" }}
          >
            Support
          </h2>

          <div className="w-[1px] sm:h-[32px] h-[15px] bg-[#6B6A6A] sm:ml-5 ml-2"></div>

          <h2
            className="font-[600] sm:text-[14px] text-[5px] text-white sm:ml-5 ml-2"
            style={{ fontFamily: "Poppins" }}
          >
            PrivacyPolicy
          </h2>

          <div className="w-[1px] sm:h-[32px] h-[15px] bg-[#6B6A6A] sm:ml-5 ml-2"></div>

          <h2
            className="font-[600] sm:text-[14px] text-[5px] text-white sm:ml-5 ml-2"
            style={{ fontFamily: "Poppins" }}
          >
            Terms of Use
          </h2>

          <div className="w-[1px] sm:h-[32px] h-[15px] bg-[#6B6A6A] sm:ml-5 ml-2"></div>

          <h2
            className="font-[600] sm:text-[14px] text-[5px] text-white sm:ml-5 ml-2"
            style={{ fontFamily: "Poppins" }}
          >
            CookiePolicy
          </h2>
        </div>
      </div>
      {/* <div className="w-[1px] h-[32px] bg-[#6B6A6A] ml-5"></div> */}
    </div>
  );
};

export default Footer;
