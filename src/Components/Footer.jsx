import React from "react";
import logo from "../imgs/Urbanlogowhite1.png";
import blacklogo from "../imgs/Urbanlogo1.png";

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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

let openLink = (link) => {
  let compltLink = link.includes("https://") ? link : `https://${link}`;

  window.open(compltLink);
};

const Footer = ({ bg, textClr }) => {
  const data = useSelector((state) => state.siteDetails.data);
  let headerFoterData = useSelector((state) => state.ApiSlice.headerFoterData);
  let navigate = useNavigate();
  return (
    <div
      className="sm:h-[400px] h-[200px] w-[100%] sm:mt-[65px] sm:mb-0 mb-[21px]"
      style={{ backgroundColor: bg }}
    >
      <div className="lg:h-[92%] h-[90%] w-[100%] flex justify-evenly">
        <div className=" sm:mt-[40px] mt-[30px]">
          <div className="flex items-center">
            <img
              // src={textClr === "white" ? logo : blacklogo}
              src={headerFoterData?.data?.logo?.footerLogo}
              alt={headerFoterData?.data?.logo?.footerLogoTag}
              className="sm:h-[77px] sm:w-[255px] h-[30px] w-[120px] object-cover"
            />
            {/* <h2
              className="text-2xl font-[800] ml-2 text-white"
              style={{ fontFamily: "Roboto" }}
            >
              URBAN BOXES
            </h2> */}
          </div>
          <h2
            className="sm:mt-[25px] mt-[20px] font-[700] sm:text-[30px] text-[12px] text-white sm:w-[370px] w-[170px]  "
            style={{ fontFamily: "Inter", color: textClr }}
          >
            {headerFoterData?.data?.footer?.heading}
          </h2>
          <p
            className="sm:text-lg text-[7px] sm:w-[369px] w-[170px] font-[400] text-[#FFFFFF] sm:mt-[7px] mt-[7px] "
            style={{ fontFamily: "Roboto", color: textClr }}
          >
            {headerFoterData?.data?.footer?.text}
          </p>
        </div>

        <div className="sm:mt-[40px] mt-[30px]">
          <h2
            className="sm:text-xl text-[12px] sm:font-[700] font-[500]"
            style={{ fontFamily: "Roboto", color: textClr }}
          >
            COMPANY
          </h2>
          <p
            className="sm:mt-[8px] mt-[5px] sm:text-[17px]  text-[7px] font-[400] cursor-pointer"
            style={{ fontFamily: "Roboto", color: textClr }}
            onClick={() => navigate("/aboutUs")}
          >
            About Us
          </p>
          <p
            className="sm:mt-[8px] mt-[5px] sm:text-[17px]  text-[7px] font-[400]"
            style={{ fontFamily: "Roboto", color: textClr }}
          >
            Bolg
          </p>
          <p
            className="sm:mt-[8px] mt-[5px] sm:text-[17px]  text-[7px] font-[400]"
            style={{ fontFamily: "Roboto", color: textClr }}
          >
            FAQ's
          </p>{" "}
          <p
            className="sm:mt-[8px] mt-[5px] sm:text-[17px]  text-[7px] font-[400]"
            style={{ fontFamily: "Roboto", color: textClr }}
          >
            Terms & Conditions
          </p>{" "}
          <p
            className="sm:mt-[8px] mt-[5px] sm:text-[17px]  text-[7px] font-[400]"
            style={{ fontFamily: "Roboto", color: textClr }}
          >
            Privacy Policy
          </p>{" "}
          <p
            className="sm:mt-[8px] mt-[5px] sm:text-[17px]  text-[7px] font-[400]"
            style={{ fontFamily: "Roboto", color: textClr }}
          >
            Custom Quote
          </p>
          <p
            className="sm:mt-[8px] mt-[5px] sm:text-[17px]  text-[7px] font-[400] cursor-pointer"
            style={{ fontFamily: "Roboto", color: textClr }}
            onClick={() => navigate("/contactus")}
          >
            Contact Us
          </p>
          <p
            className="sm:mt-[8px] mt-[5px] sm:text-[17px]  text-[7px] font-[400]"
            style={{ fontFamily: "Roboto", color: textClr }}
          >
            Sitemaps
          </p>
        </div>

        <div className="sm:mt-[40px] mt-[30px]">
          <h2
            className="sm:text-xl text-[12px] sm:font-[700] font-[500]"
            style={{ fontFamily: "Roboto", color: textClr }}
          >
            CONTACT
          </h2>
          <div className="flex items-center sm:mt-[20px] mt-[5px]">
            <RiPhoneFill
              className="sm:text-[22px] text-[7px]  mr-1 sm:mr-2"
              style={{ color: textClr }}
            />
            <p
              className="  sm:text-[17px] text-[7px] font-[400]  text-white "
              style={{ fontFamily: "Roboto", color: textClr }}
            >
              {headerFoterData?.data?.footer?.phone}
            </p>
          </div>

          <div className="flex sm:mt-[20px] mt-[5px] items-center">
            <MdEmail
              className="sm:text-[22px] text-[7px]  mr-1 sm:mr-2"
              style={{ color: textClr }}
            />
            <p
              className="  sm:text-[17px] text-[7px] font-[400]  text-white"
              style={{ fontFamily: "Roboto", color: textClr }}
            >
              {headerFoterData?.data?.footer?.contactEmail}
            </p>
          </div>

          <div className="flex sm:mt-[20px] mt-[5px] items-center">
            <HiLocationMarker
              className="sm:text-[22px] text-[7px]  mr-1 sm:mr-2"
              style={{ color: textClr }}
            />
            <p
              className="  sm:text-[17px] text-[7px] font-[400]  text-white"
              style={{ fontFamily: "Roboto", color: textClr }}
            >
              {headerFoterData?.data?.footer?.address}
            </p>
          </div>
          <div className="flex sm:mt-[20px] mt-[5px] items-center">
            <BsFillStopwatchFill
              className="sm:text-[22px] text-[7px]  mr-1 sm:mr-2"
              style={{ color: textClr }}
            />
            <p
              className="  sm:text-[17px] text-[7px] font-[400]  text-white"
              style={{ fontFamily: "Roboto", color: textClr }}
            >
              {headerFoterData?.data?.footer?.startDay} -{" "}
              {headerFoterData?.data?.footer?.endDay}:{" "}
              {headerFoterData?.data?.footer?.startTime} -{" "}
              {headerFoterData?.data?.footer?.endTime}
            </p>
          </div>
          <div className=" sm:mt-[15px] mt-[10px]">
            <h2
              className="sm:text-lg text-[11px] font-[600] text-white"
              style={{ fontFamily: "Roboto", color: textClr }}
            >
              Follow Us on:
            </h2>
            <div className=" flex  sm:mt-2 mt-1">
              <div
                className="sm:h-[30px] sm:w-[30px] h-[10px] w-[10px] border rounded-full flex justify-center items-center   cursor-pointer"
                style={{ borderColor: textClr }}
                onClick={() =>
                  openLink(headerFoterData?.data?.footer?.facebook)
                }
              >
                <BiLogoFacebook
                  className=" sm:text-xl text-[5px]"
                  style={{ color: textClr }}
                />
              </div>
              <div
                className="sm:h-[30px] sm:w-[30px] h-[10px] w-[10px] border rounded-full flex justify-center items-center  sm:ml-5 ml-1 cursor-pointer"
                style={{ borderColor: textClr }}
                onClick={() =>
                  openLink(headerFoterData?.data?.footer?.instagram)
                }
              >
                <BiLogoInstagramAlt
                  className=" sm:text-xl text-[5px]"
                  style={{ color: textClr }}
                />
              </div>
              <div
                className="sm:h-[30px] sm:w-[30px] h-[10px] w-[10px] border rounded-full flex justify-center items-center  sm:ml-5 ml-1 cursor-pointer"
                style={{ borderColor: textClr }}
                onClick={() => openLink(headerFoterData?.data?.footer?.youtube)}
              >
                <BiLogoYoutube
                  className=" sm:text-xl text-[5px]"
                  style={{ color: textClr }}
                />
              </div>
              <div
                className="sm:h-[30px] sm:w-[30px] h-[10px] w-[10px] border rounded-full flex justify-center items-center  sm:ml-5 ml-1 cursor-pointer"
                style={{ borderColor: textClr }}
                onClick={() => openLink(headerFoterData?.data?.footer?.twitter)}
              >
                <BiLogoTwitter
                  className=" sm:text-xl text-[5px]"
                  style={{ color: textClr }}
                />
              </div>
              <div
                className="sm:h-[30px] sm:w-[30px] h-[10px] w-[10px] border rounded-full flex justify-center items-center  sm:ml-5 ml-1 cursor-pointer"
                style={{ borderColor: textClr }}
                onClick={() =>
                  openLink(headerFoterData?.data?.footer?.linkedin)
                }
              >
                <BiLogoLinkedin
                  className=" sm:text-xl  text-[5px]"
                  style={{ color: textClr }}
                />
              </div>
              <div
                className="sm:h-[30px] sm:w-[30px] h-[10px] w-[10px] border rounded-full flex justify-center items-center  sm:ml-5 ml-1 cursor-pointer"
                style={{ borderColor: textClr }}
                onClick={() =>
                  openLink(headerFoterData?.data?.footer?.whatsapp)
                }
              >
                <RiWhatsappFill
                  className=" sm:text-xl text-[5px]"
                  style={{ color: textClr }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t lg:h-[8%] h-[10%] lg:w-[100%] md:W-[100%] w-[100%]">
        <div className="flex h-[100%]   sm:ml-[135px] ml-[35px] items-center">
          <h2
            className="font-[500] sm:text-[12px] text-[5px]"
            style={{ fontFamily: "Poppins", color: textClr }}
          >
            2023 Logoipsum Software Inc.
          </h2>

          <div className="w-[1px] sm:h-[25px] h-[15px] bg-[#6B6A6A] sm:ml-5 ml-2"></div>

          <h2
            className="font-[500] sm:text-[12px] text-[5px] sm:ml-5 ml-2"
            style={{ fontFamily: "Poppins", color: textClr }}
          >
            Support
          </h2>

          <div className="w-[1px] sm:h-[25px] h-[15px] bg-[#6B6A6A] sm:ml-5 ml-2"></div>

          <h2
            className="font-[500] sm:text-[12px] text-[5px] sm:ml-5 ml-2"
            style={{ fontFamily: "Poppins", color: textClr }}
          >
            Privacy Policy
          </h2>

          <div className="w-[1px] sm:h-[25px] h-[15px] bg-[#6B6A6A] sm:ml-5 ml-2"></div>

          <h2
            className="font-[500] sm:text-[12px] text-[5px] sm:ml-5 ml-2"
            style={{ fontFamily: "Poppins", color: textClr }}
          >
            Terms of Use
          </h2>

          <div className="w-[1px] sm:h-[25px] h-[15px] bg-[#6B6A6A] sm:ml-5 ml-2"></div>

          <h2
            className="font-[500] sm:text-[12px] text-[5px] sm:ml-5 ml-2"
            style={{ fontFamily: "Poppins", color: textClr }}
          >
            Cookie Policy
          </h2>
        </div>
      </div>
      {/* <div className="w-[1px] h-[32px] bg-[#6B6A6A] ml-5"></div> */}
    </div>
  );
};

export default Footer;
