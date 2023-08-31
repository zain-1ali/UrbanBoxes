import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import box from "../../imgs/herobox.png";

const CategoryUpper = ({
  heading,
  paragraph,
  imgUrl,
  bgClr,
  smtext,
  bottomParagraph,
  bottomHeading,
}) => {
  return (
    <div className="lg:mt-[15px] mt-[10px] w-[100%] flex flex-col items-center justify-center">
      <div className="lg:w-[87%] w-[90%] md:w-[93%]">
        {/* <div className="flex items-center ml-2">
          <Link to="/">
            <h2
              style={{ fontFamily: "Roboto" }}
              className="font-[400] text-[14px] cursor-pointer"
            >
              Home
            </h2>
          </Link>
          <LiaGreaterThanSolid className="ml-1 text-sm" />
          <h2
            style={{ fontFamily: "Roboto" }}
            className="font-[400] text-[14px] ml-1 cursor-pointer text-[#449F5A]"
          >
            Category
          </h2>
        </div> */}

        <div
          className="w-[100%] sm:h-[302px] h-[150px]  rounded-2xl mt-[15px] flex border"
          style={{ backgroundColor: bgClr }}
        >
          <div className="lg:w-[50%] md:w-[55%] w-[50%] h-[100%] flex justify-center items-center flex-col">
            <h2
              style={{ fontFamily: "Poppins", lineHeight: "44px" }}
              className={`lg:font-[600] md:font-[600] font-[600]  lg:text-[40px] md:text-[40px] text-[${smtext}] w-[80%] lg:w-[80%] md:w-[80%] `}
            >
              {heading}
            </h2>
            <p
              className="lg:font-[400] md:font-[400] lg:text-[20px] md:text-[16px] text-[9px] lg:w-[80%] md:w-[80%] w-[80%] lg:mt-[20px] md:mt-[10px] mt-[-5px]"
              style={{ fontFamily: "Roboto" }}
            >
              {paragraph}
            </p>
          </div>
          <div className="md:w-[45%] lg:w-[50%] w-[50%] h-[100%] flex justify-center items-center">
            <img
              src={imgUrl}
              alt=""
              className="sm:h-[270px] sm:w-[270px] h-[90%] w-[90%]"
            />
          </div>
        </div>
      </div>

      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="lg:w-[32%] md:w-[30%] w-[25%]  h-[1px]  bg-[#696262] mr-2 "></div>
          <h2
            className={`lg:text-2xl md:text-lg text-[${smtext}] text-center font-[600] `}
            style={{ fontFamily: "Poppins" }}
          >
            {bottomHeading}
          </h2>
          <div className="lg:w-[32%] md:w-[30%] w-[25%]   h-[1px]  bg-[#696262] ml-2"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          style={{ fontFamily: "Roboto" }}
        >
          {bottomParagraph}
        </p>
      </div>
    </div>
  );
};

export default CategoryUpper;
