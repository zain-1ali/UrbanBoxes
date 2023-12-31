import React from "react";
import truck from "../../imgs/InTransit3x.png";
import timer from "../../imgs/sandTimer3x.png";
import box from "../../imgs/OrthogonalView3x.png";
import tablet from "../../imgs/WacomTablet3x.png";
import allout from "../../imgs/AllOut3x.png";
import dollar from "../../imgs/LowPrice3x.png";
import { useSelector } from "react-redux";

const ProductServices = () => {
  let singleProduct = useSelector(
    (state) => state.ApiSlice.singleProduct?.data
  );
  const renderHTML = (string) => {
    return { __html: string };
  };
  return (
    <div className="mt-[40px] w-[100%]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[35%] w-[20%] h-[1px]  bg-[#696262] mr-2"></div>
          <h2
            className="sm:text-2xl text-[14px] sm:font-[600] font-[500] text-center "
            style={{ fontFamily: "Poppins" }}
          >
            Get your Custom Packaging
          </h2>
          <div className="sm:w-[35%] w-[20%]  h-[1px]  bg-[#696262] ml-2"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[12px] font-[400] sm:text-xl text-[12px] text-[#0f0707]"
          style={{ fontFamily: "Roboto" }}
        >
          <div
            dangerouslySetInnerHTML={renderHTML(
              singleProduct?.productPage?.customPkgDesc
            )}
          />
        </p>
      </div>

      <div className="w-[100%] flex justify-center mt-[25px]">
        <div className="w-[85%] flex justify-between items-center flex-wrap">
          <div className="sm:w-[170px] w-[49%]  sm:h-[168px] h-[178px]  flex flex-col sm:justify-between justify-evenly items-center">
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
              className="font-[500] sm:text-[16px] text-[14px]"
              style={{ fontFamily: "Roboto" }}
            >
              Fast Turn Around
            </p>
          </div>

          <div className="sm:w-[170px] w-[49%]  sm:h-[168px] h-[178px]  flex flex-col sm:justify-between justify-evenly items-center">
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
              className="font-[500] sm:text-[16px] text-[14px]"
              style={{ fontFamily: "Roboto" }}
            >
              Free Shipping
            </p>
          </div>

          <div className="sm:w-[170px] w-[49%]  sm:h-[168px] h-[178px]  flex flex-col sm:justify-between justify-evenly items-center">
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
              className="font-[500] sm:text-[16px] text-[14px]"
              style={{ fontFamily: "Roboto" }}
            >
              Low MOQ
            </p>
          </div>

          <div className="sm:w-[170px] w-[49%]  sm:h-[168px] h-[178px]  flex flex-col sm:justify-between justify-evenly items-center">
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
              className="font-[500] sm:text-[16px] text-[14px]"
              style={{ fontFamily: "Roboto" }}
            >
              Free Graphic Designing
            </p>
          </div>

          <div className="sm:w-[170px] w-[49%]  sm:h-[168px] h-[178px]  flex flex-col sm:justify-between justify-evenly items-center">
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
              className="font-[500] sm:text-[16px] text-[14px]"
              style={{ fontFamily: "Roboto" }}
            >
              Low Price Guarantee
            </p>
          </div>

          <div className="sm:w-[170px] w-[49%]  sm:h-[168px] h-[178px]  flex flex-col sm:justify-between justify-evenly items-center">
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
              className="font-[500] sm:text-[16px] text-[14px]"
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
