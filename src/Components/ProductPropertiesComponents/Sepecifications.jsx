import React from "react";
import { RxDimensions } from "react-icons/rx";
import { BsListOl, BsOption } from "react-icons/bs";
import { HiArrowPathRoundedSquare, HiOutlineSparkles } from "react-icons/hi2";
import { TfiPrinter } from "react-icons/tfi";
import { GiSandsOfTime } from "react-icons/gi";
import { RiFilePaper2Line } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";

const Sepecifications = ({ specifications }) => {
  return (
    <div className="sm:p-2 w-[100%] h-[100%] flex justify-center items-center flex-col">
      <div className="w-[100%]  flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center  ">
          <div className="sm:w-[40%] w-[18%] h-[1px]  bg-[#696262] mr-2"></div>
          <h2
            className="sm:text-2xl text-[15px] sm:font-[600] font-[500]"
            style={{ fontFamily: "Poppins" }}
          >
            {/* {isDesktopOrLaptop
              ? "Get Discounted Price Quickly"
              : "Get Discounted Price"} */}
            Specification
          </h2>
          <div className="sm:w-[40%] w-[18%] h-[1px]  bg-[#696262] ml-2 "></div>
        </div>

        <p
          className="sm:w-[90%] w-[90%] text-center sm:mt-[20px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          // w-[70%] text-center mt-[25px] font-[400] text-xl text-[#2C2C2C]
          style={{ fontFamily: "Roboto" }}
        >
          We strive to provide superior services and solutions that surpass your
          expectations. Let us find the ideal packaging solution for your
          project.
        </p>
      </div>

      <div className="w-[100%] h-[75%] border-[1px] border-[#449F5A] mt-[30px]">
        <div className="w-[100%] h-[33%] border-b-[1px] border-[#449F5A] flex">
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            {specifications?.[0] && (
              <>
                <img
                  src={specifications?.[0]?.iconImage}
                  alt="icon"
                  className="h-[35px] w-[35px]"
                />
                <h2
                  className="sm:font-[400] font-[500] sm:text-[20px] text-[16px] mt-[2px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {specifications?.[0]?.title}
                </h2>
              </>
            )}

            <p
              className="font-[300] sm:text-[16px] text-[13px] text-center mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              {specifications?.[0]?.description}
            </p>
          </div>
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            {specifications?.[1] && (
              <>
                <img
                  src={specifications?.[1]?.iconImage}
                  alt="icon"
                  className="h-[35px] w-[35px]"
                />
                <h2
                  className="sm:font-[400] font-[500] sm:text-[20px] text-[16px] mt-[2px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {specifications?.[1]?.title}
                </h2>
              </>
            )}
          </div>
          <div className="h-[100%] w-[34%]  flex justify-center items-center flex-col">
            {specifications?.[2] && (
              <>
                <img
                  src={specifications?.[2]?.iconImage}
                  alt="icon"
                  className="h-[35px] w-[35px]"
                />
                <h2
                  className="sm:font-[400] font-[500] sm:text-[20px] text-[16px] mt-[2px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {specifications?.[2]?.title}
                </h2>
              </>
            )}
          </div>
        </div>
        <div className="w-[100%] h-[33%] border-b-[1px] border-[#449F5A] flex">
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            {specifications?.[3] && (
              <>
                <img
                  src={specifications?.[3]?.iconImage}
                  alt="icon"
                  className="h-[35px] w-[35px]"
                />
                <h2
                  className="sm:font-[400] font-[500] sm:text-[20px] text-[16px] mt-[2px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {specifications?.[3]?.title}
                </h2>
              </>
            )}
          </div>
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            {specifications?.[4] && (
              <>
                <img
                  src={specifications?.[4]?.iconImage}
                  alt="icon"
                  className="h-[35px] w-[35px]"
                />
                <h2
                  className="sm:font-[400] font-[500] sm:text-[20px] text-[16px] mt-[2px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {specifications?.[4]?.title}
                </h2>
              </>
            )}
          </div>
          <div className="h-[100%] w-[34%]   flex justify-center items-center flex-col">
            {specifications?.[5] && (
              <>
                <img
                  src={specifications?.[5]?.iconImage}
                  alt="icon"
                  className="h-[35px] w-[35px]"
                />
                <h2
                  className="sm:font-[400] font-[500] sm:text-[20px] text-[16px] mt-[2px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {specifications?.[5]?.title}
                </h2>
              </>
            )}
          </div>
        </div>
        <div className="w-[100%] h-[34%] flex">
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            {specifications?.[6] && (
              <>
                <img
                  src={specifications?.[6]?.iconImage}
                  alt="icon"
                  className="h-[35px] w-[35px]"
                />
                <h2
                  className="sm:font-[400] font-[500] sm:text-[20px] text-[16px] mt-[2px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {specifications?.[6]?.title}
                </h2>
              </>
            )}
          </div>
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            {specifications?.[7] && (
              <>
                <img
                  src={specifications?.[7]?.iconImage}
                  alt="icon"
                  className="h-[35px] w-[35px]"
                />
                <h2
                  className="sm:font-[400] font-[500] sm:text-[20px] text-[16px] mt-[2px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {specifications?.[7]?.title}
                </h2>
              </>
            )}
          </div>
          <div className="h-[100%] w-[34%]  flex justify-center items-center flex-col">
            {specifications?.[8] && (
              <>
                <img
                  src={specifications?.[8]?.iconImage}
                  alt="icon"
                  className="h-[35px] w-[35px]"
                />
                <h2
                  className="sm:font-[400] font-[500] sm:text-[20px] text-[16px] mt-[2px]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {specifications?.[8]?.title}
                </h2>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sepecifications;
