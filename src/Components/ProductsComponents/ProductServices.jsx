import React from "react";
import { GiSandsOfTime } from "react-icons/gi";
import truck from "../../imgs/InTransit3x.png";
import timer from "../../imgs/sandTimer3x.png";
import box from "../../imgs/OrthogonalView3x.png";
import tablet from "../../imgs/WacomTablet3x.png";
import allout from "../../imgs/AllOut3x.png";
import dollar from "../../imgs/LowPrice3x.png";

const ProductServices = () => {
  return (
    <div className="mt-[40px] w-[100%]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[35%] w-[23%] h-[1px]  bg-[#696262] mr-2"></div>
          <h2
            className="sm:text-2xl text-[16px] sm:font-[600] font-[500] "
            style={{ fontFamily: "Poppins" }}
          >
            Get your Custom Packaging
          </h2>
          <div className="sm:w-[35%] w-[23%]  h-[1px]  bg-[#696262] ml-2"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#0f0707]"
          style={{ fontFamily: "Roboto" }}
        >
          Our custom boxes are inclusive of everything that you require to
          package your products, ranging from small boxes to customized luxury
          packaging.
        </p>
      </div>

      <div className="w-[100%] flex justify-center mt-[25px]">
        <div className="w-[85%] flex justify-between items-center">
          <div className="w-[170px]  h-[168px]  flex flex-col justify-between items-center">
            <div
              className="w-[123px] h-[123px] rounded-full border-[6px] border-gray-50  shadow-md flex justify-center items-center"
              style={{
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* <GiSandsOfTime className="text-5xl" /> */}
              <img src={timer} alt="" className="h-[65px] w-[65px]" />
            </div>
            <p
              className="font-[500] text-[16px]"
              style={{ fontFamily: "Roboto" }}
            >
              Fast Turn Around
            </p>
          </div>

          <div className="w-[170px]  h-[168px]  flex flex-col justify-between items-center">
            <div
              className="w-[123px] h-[123px] rounded-full border-[6px] border-gray-50  shadow-md flex justify-center items-center"
              style={{
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* <GiSandsOfTime className="text-5xl" /> */}
              <img src={truck} alt="" className="h-[65px] w-[65px]" />
            </div>
            <p
              className="font-[500] text-[16px]"
              style={{ fontFamily: "Roboto" }}
            >
              Free Shipping
            </p>
          </div>

          <div className="w-[170px]  h-[168px]  flex flex-col justify-between items-center">
            <div
              className="w-[123px] h-[123px] rounded-full border-[6px] border-gray-50  shadow-md flex justify-center items-center"
              style={{
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* <GiSandsOfTime className="text-5xl" />
               */}
              <img src={box} alt="" className="h-[65px] w-[65px]" />
            </div>
            <p
              className="font-[500] text-[16px]"
              style={{ fontFamily: "Roboto" }}
            >
              Low MOQ
            </p>
          </div>

          <div className="w-[170px]  h-[168px]  flex flex-col justify-between items-center">
            <div
              className="w-[123px] h-[123px] rounded-full border-[6px] border-gray-50  shadow-md flex justify-center items-center"
              style={{
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* <GiSandsOfTime className="text-5xl" /> */}
              <img src={tablet} alt="" className="h-[65px] w-[65px]" />
            </div>
            <p
              className="font-[500] text-[16px]"
              style={{ fontFamily: "Roboto" }}
            >
              Free Graphic Designing
            </p>
          </div>

          <div className="w-[170px]  h-[168px]  flex flex-col justify-between items-center">
            <div
              className="w-[123px] h-[123px] rounded-full border-[6px] border-gray-50  shadow-md flex justify-center items-center"
              style={{
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* <GiSandsOfTime className="text-5xl" /> */}
              <img src={dollar} alt="" className="h-[65px] w-[65px]" />
            </div>
            <p
              className="font-[500] text-[16px]"
              style={{ fontFamily: "Roboto" }}
            >
              Custom Size & Style
            </p>
          </div>

          <div className="w-[170px]  h-[168px]  flex flex-col justify-between items-center">
            <div
              className="w-[123px] h-[123px] rounded-full border-[6px] border-gray-50  shadow-md flex justify-center items-center"
              style={{
                boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* <GiSandsOfTime className="text-5xl" />
               */}
              <img src={allout} alt="" className="h-[65px] w-[65px]" />
            </div>
            <p
              className="font-[500] text-[16px]"
              style={{ fontFamily: "Roboto" }}
            >
              Custom Size & Style
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductServices;
