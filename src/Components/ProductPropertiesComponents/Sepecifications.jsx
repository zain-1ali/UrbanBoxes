import React from "react";
import { RxDimensions } from "react-icons/rx";
import { BsListOl, BsOption } from "react-icons/bs";
import { HiArrowPathRoundedSquare, HiOutlineSparkles } from "react-icons/hi2";
import { TfiPrinter } from "react-icons/tfi";
import { GiSandsOfTime } from "react-icons/gi";
import { RiFilePaper2Line } from "react-icons/ri";
import { AiOutlineProfile } from "react-icons/ai";

const Sepecifications = () => {
  return (
    <div className="p-2 w-[100%] h-[100%] flex justify-center items-center flex-col">
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
          we strive to provide superior services and solutions that surpass your
          expectations. Let us find the ideal packaging solution for your
          project.
        </p>
      </div>

      <div className="w-[100%] h-[75%] border-[1px] border-[#449F5A] mt-[30px]">
        <div className="w-[100%] h-[33%] border-b-[1px] border-[#449F5A] flex">
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            <RxDimensions className="text-4xl" />
            <h2
              className="font-[400] text-[20px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              Dimensions
            </h2>
            <p
              className="font-[300] text-[18px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              All custom sizes & shapes
            </p>
          </div>
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            <BsListOl className="text-4xl" />
            <h2
              className="font-[400] text-[20px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              Min. quantity
            </h2>
            <p
              className="font-[300] text-[18px] mt-[2px] text-center"
              style={{ fontFamily: "Roboto" }}
            >
              50 Boxes ( Hardproof Sample Option Available )
            </p>
          </div>
          <div className="h-[100%] w-[34%]  flex justify-center items-center flex-col">
            <HiArrowPathRoundedSquare className="text-4xl" />
            <h2
              className="font-[400] text-[20px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              Default process
            </h2>
            <p
              className="font-[300] text-[18px] mt-[2px] text-center"
              style={{ fontFamily: "Roboto" }}
            >
              Die cutting, gluing, scoring, perforation
            </p>
          </div>
        </div>
        <div className="w-[100%] h-[33%] border-b-[1px] border-[#449F5A] flex">
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            <TfiPrinter className="text-4xl" />
            <h2
              className="font-[400] text-[20px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              Printing
            </h2>
            <p
              className="font-[300] text-[18px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              Cmyk, pms, no printing
            </p>
          </div>
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            <BsOption className="text-4xl" />
            <h2
              className="font-[400] text-[20px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              Options
            </h2>
            <p
              className="font-[300] text-[18px] mt-[2px] text-center"
              style={{ fontFamily: "Roboto" }}
            >
              Custom window cut out, gold/silver foiling, raised ink, sheet.
            </p>
          </div>
          <div className="h-[100%] w-[34%]  flex justify-center items-center flex-col">
            <GiSandsOfTime className="text-4xl" />
            <h2
              className="font-[400] text-[20px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              Turn around time
            </h2>
            <p
              className="font-[300] text-[18px] mt-[2px] text-center "
              style={{ fontFamily: "Roboto" }}
            >
              10-12 business days , rush
            </p>
          </div>
        </div>
        <div className="w-[100%] h-[34%] flex">
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            <RiFilePaper2Line className="text-4xl" />
            <h2
              className="font-[400] text-[20px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              Paper stock
            </h2>
            <p
              className="font-[300] text-[17px] mt-[2px] text-center"
              style={{ fontFamily: "Roboto" }}
            >
              10pt to 28pt (60lb to 400lb) eco- friendly Kraft, bux board,
              cardstock
            </p>
          </div>
          <div className="h-[100%] w-[33%]  border-r-[1px] border-[#449F5A] flex justify-center items-center flex-col">
            <AiOutlineProfile className="text-4xl" />
            <h2
              className="font-[400] text-[20px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              Proof
            </h2>
            <p
              className="font-[300] text-[18px] mt-[2px] text-center"
              style={{ fontFamily: "Roboto" }}
            >
              Flat view, 3d mock-up, physical sampling (on Request)
            </p>
          </div>
          <div className="h-[100%] w-[34%]  flex justify-center items-center flex-col">
            <HiOutlineSparkles className="text-4xl" />
            <h2
              className="font-[400] text-[20px] mt-[2px]"
              style={{ fontFamily: "Roboto" }}
            >
              Finishes
            </h2>
            <p
              className="font-[300] text-[18px] mt-[2px] text-center"
              style={{ fontFamily: "Roboto" }}
            >
              Top off your packaging with a finish option that completes your
              package.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sepecifications;
