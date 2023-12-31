import React, { useRef, useState } from "react";
import { VscGraph } from "react-icons/vsc";
import { TbDeviceImacCode, TbDeviceMobileStar } from "react-icons/tb";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";

const SingleDescriptionBox = ({
  number,
  icon,
  heading,
  description,
  tag,
  brandCircle,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const smoothHoverStyle = {
    transition: "transform 0.6s ease-in-out, border 0.6s ease-in-out",
    transform: hovered ? "translateY(-7px)" : "none",
    border: hovered ? "1px solid #ccc" : "1px solid transparent",
  };
  const renderHTML = () => {
    return { __html: description };
  };

  return (
    <div
      className="sm:w-[24%] w-[95%] sm:h-[350px] h-[510px] sm:mt-2 mt-5  flex justify-center items-center relative border transition duration-700 ease-in-out border-transparent hover:border-[#449F5A] cursor-pointer"
      // className="border border-transparent"
      style={smoothHoverStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // key={0}
    >
      <div className="w-[90%] h-[87%] ">
        <div className="flex justify-between items-center">
          <h2
            className="text-[45px] text-black font-[700]"
            // style={{ fontFamily: "Poppins", lineHeight: "50px" }}s
          >
            {number}
          </h2>
          {/* {icon} */}
          <img
            src={icon}
            alt={tag}
            style={{ height: "70px", width: "70px" }}
            className="object-cover"
          />
          {/* <icon className="text-5xl text-[#666]" /> */}
        </div>

        <h2
          className="text-[16px] mt-[7px]  font-[700] text-[#449F5A]"
          style={{ fontFamily: "Poppins", lineHeight: "30px" }}
        >
          {heading}
        </h2>
        <div className="mt-[6px]  h-[60%] overflow-y-scroll scrollbar-hide ">
          <p
            className="text-[14px]  text-[#666] font-normal"
            style={{ fontFamily: "Poppins" }}
          >
            <div dangerouslySetInnerHTML={renderHTML()} />
          </p>
        </div>
      </div>
    </div>
  );
};

const Branding = ({ boxes, brandDesc, brandHeading, brandCircle }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const renderHTML = () => {
    return { __html: brandDesc };
  };
  return (
    <div className="w-[100%] mt-[50px] flex flex-col items-center">
      {/* <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px] ">
          <div className="sm:w-[38%] w-[23%] h-[1px]  bg-[#696262] mr-2"></div>
          <h2
            className="sm:text-2xl text-[16px] sm:font-[600] font-[500] text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Featured Custom Boxes
          </h2>
          <div className="sm:w-[38%] w-[23%]  h-[1px]  bg-[#696262] ml-2"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#0f0707]"
          style={{ fontFamily: "Roboto" }}
        >
          <div dangerouslySetInnerHTML={renderHTML()} />
        </p>
      </div> */}

      <div
        className="sm:w-[60%] w-[95%] flex justify-center items-center text-center font-[600] sm:text-[40px] text-[22px] text-[#449F5A] mt-[0px]"
        style={{ fontFamily: "Poppins" }}
      >
        How to Order Custom Box Packaging with the Ryt Box?
      </div>
      <div className="w-[87%] flex sm:justify-between justify-center flex-wrap sm:mt-[5px] mt-[10px]">
        {/* <div className="sm:w-[33%] w-[95%] sm:h-[459px] h-[150px] mt-2 ">
          <h4
            className="text-[16px] text-[#1d1d1d] font-normal"
            style={{ fontFamily: "Poppins", lineHeight: "16px" }}
          >
            Steps
          </h4>
          <h2
            className="sm:text-[48px] text-[38px] text-[#000] font-[600] mt-[20px] w-[95%] overflow-hidden"
            style={{ fontFamily: "Poppins", lineHeight: "48px" }}
          >
            {brandHeading}
          </h2>
        </div> */}

        <SingleDescriptionBox
          number="01"
          heading={boxes?.Box1heding}
          icon={boxes?.Box1image}
          description={boxes?.Box1desc}
          tag={boxes?.Box1imageTag}
          brandCircle={brandCircle}
        />
        <SingleDescriptionBox
          number="02"
          heading={boxes?.Box2heding}
          icon={boxes?.Box2image}
          description={boxes?.Box2desc}
          tag={boxes?.Box2imageTag}
          brandCircle={brandCircle}
        />
        <SingleDescriptionBox
          number="03"
          heading={boxes?.Box3heding}
          icon={boxes?.Box3image}
          description={boxes?.Box3desc}
          tag={boxes?.Box3imageTag}
          brandCircle={brandCircle}
        />
        <SingleDescriptionBox
          number="04"
          heading={boxes?.Box4heding}
          icon={boxes?.Box4image}
          description={boxes?.Box4desc}
          tag={boxes?.Box4imageTag}
          brandCircle={brandCircle}
        />
        {/* 
        <div className="sm:w-[33%] w-[95%] h-[459px] mt-2  flex justify-center items-center">
          <div className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded-full hover:bg-white group h-[230px] w-[230px] border border-black cursor-pointer ">
         
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10 flex justify-center">
              <h2
                className="text-center w-[70%]"
                style={{ fontFamily: "Poppins", lineHeight: "26px" }}
              >
                {brandCircle}
              </h2>
            </span>
            <span className="w-0 h-0  bg-[#00a15f] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 rounded-full"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Branding;
