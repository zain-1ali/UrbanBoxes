import React from "react";
import ecobox from "../imgs/ecofriendlyboxes.png";
import { useMediaQuery } from "react-responsive";

const StaticPageUpper = ({
  img,
  imgTag,
  heading,
  paragraph,
  btnClr,
  hover,
  btnText,
  Btn1lnk,
}) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="mt-[50px] w-[100%] flex flex-col items-center">
      <div className="w-[92%]  lg:h-[350px] md:h-[300px] h-[170px] flex">
        <div className="h-[100%] w-[49%]  flex flex-col items-center justify-center ">
          <h2
            className="lg:font-[600] font-[500] lg:text-[48px] text-[10px] lg:w-[609px]  w-[100%]"
            style={
              isDesktopOrLaptop
                ? { fontFamily: "Poppins", lineHeight: "52px" }
                : { fontFamily: "Poppins" }
            }
          >
            {heading}
          </h2>
          <p
            className="lg:font-[400]  font-[300] lg:text-[24px] text-[10px] w-[100%] lg:w-[609px] lg:mt-[30px] mt-[10px]"
            style={{ fontFamily: "Roboto" }}
          >
            {paragraph}
          </p>
          <div className="lg:w-[609px] lg:mt-[30px] mt-[12px] w-[100%]">
            <button
              className={`lg:w-[201px] w-[90px] h-[31px] lg:h-[51px] hover:bg-[${hover}] rounded-[6px] text-white lg:text-[16px] text-[9px] font-[600]`}
              style={{ backgroundColor: btnClr }}
              onClick={() => window.open(Btn1lnk)}
            >
              {btnText}
            </button>
          </div>
        </div>
        <div className="h-[100%] w-[49%] flex justify-end items-center">
          <img
            src={img}
            alt={imgTag}
            className="lg:w-[539px] lg:h-[338px] lg:rounded-[33px] rounded-[13px]"
          />
        </div>
      </div>
    </div>
  );
};

export default StaticPageUpper;
