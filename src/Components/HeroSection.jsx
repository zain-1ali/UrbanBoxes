import React from "react";
import herobox from "../imgs/herobox.png";
import { Typewriter } from "react-simple-typewriter";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  // , lineHeight: "70px"
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="sm:h-[558px] sm:mt-0  h-[300px] border w-[100%] bg-[#F3FFF6] flex">
      <div
        className=" sm:w-[57%] w-[55%]  flex flex-col justify-center items-end 
      "
      >
        {/* <div className="w-[100%] flex justify-end"> */}
        <h2
          className="sm:text-[64px] text-[24px] font-bold  sm:w-[651px] w-[96%] "
          style={
            isDesktopOrLaptop
              ? { fontFamily: "Poppins", lineHeight: "70px" }
              : { fontFamily: "Poppins" }
          }
        >
          Custom Printed
        </h2>

        <h2
          className="sm:text-[64px] text-[20px] font-bold  w-[96%] sm:w-[651px]"
          style={
            isDesktopOrLaptop
              ? { fontFamily: "Poppins", lineHeight: "70px" }
              : { fontFamily: "Poppins" }
          }
        >
          <Typewriter
            words={[
              "Boxes & Packaging",
              "Inspiring Designs",
              "Premium Finishes",
            ]}
            loop={5}
            cursor
            cursorBlinking={true}
            // cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* </div> */}
        <p
          className="  sm:w-[651px] w-[96%] sm:text-2xl text-sm sm:mt-5 mt-2 text-[#1B1C1B]"
          style={{ fontFamily: "Roboto" }}
        >
          One-step Solution for All Your Packaging Needs.
        </p>
        <div className="sm:w-[651px] flex sm:mt-6 mt-[14px] w-[96%]">
          <div
            className="hover:bg-[#449F5A] hover:text-white sm:w-[201px] sm:h-[51px] w-[85px] h-[30px]  border rounded-md mr-3 border-black flex justify-center items-center cursor-pointer sm:text-[16px] text-[9px] font-[600] text-[#333434]"
            style={{ fontFamily: "Roboto" }}
          >
            Chose Packaging
          </div>

          <div
            className="sm:w-[201px] sm:h-[51px] w-[85px] h-[30px] border rounded-md ml-3 bg-black hover:bg-[#333333]  text-white flex justify-center items-center cursor-pointer sm:text-[16px] text-[9px] sm:font-[600] font-[500]"
            style={{ fontFamily: "Roboto" }}
          >
            Order Packaging
          </div>
        </div>
      </div>

      <div className=" w-[45%] flex justify-center items-center ">
        <img
          src={herobox}
          alt=""
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </div>
    </div>
  );
};

export default HeroSection;
