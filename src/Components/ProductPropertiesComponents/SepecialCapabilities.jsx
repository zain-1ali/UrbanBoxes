import React from "react";
import box from "../../imgs/box1.png";

const SepecialCapabilities = () => {
  return (
    <div className="p-1 w-[100%] h-[100%] flex  items-center flex-col justify-center ">
      <div className="w-[100%]  flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center  ">
          <div className="sm:w-[30%] w-[22%] h-[1px]  bg-[#696262] mr-2"></div>
          <h2
            className="sm:text-2xl text-[16px] sm:font-[600] font-[500]"
            style={{ fontFamily: "Poppins" }}
          >
            {/* {isDesktopOrLaptop
          ? "Get Discounted Price Quickly"
          : "Get Discounted Price"} */}
            Special Finishes
          </h2>
          <div className="sm:w-[30%] w-[22%] h-[1px]  bg-[#696262] ml-2 "></div>
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
      <div className="overflow-y-scroll h-[80%] w-[100%] ">
        <div className="flex justify-around mt-[30px] w-[100%] ">
          <div className="w-[23%] h-[320px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%]  w-[90%] bg-white rounded-[19px]">
                <img
                  src={box}
                  alt=""
                  className="h-[100%] w-[100%] rounded-[19px]"
                />
              </div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Spot UV Spot Gloss
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                UV gloss coating cured on specific areas.
              </p>
            </div>
          </div>
          <div className="w-[23%] h-[320px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%]  w-[90%] bg-white rounded-[19px]">
                <img
                  src={box}
                  alt=""
                  className="h-[100%] w-[100%] rounded-[19px]"
                />
              </div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Window Patching
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Special technique with a transparent plastic film covering the
                cut-out.
              </p>
            </div>
          </div>
          <div className="w-[23%] h-[320px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%]  w-[90%] bg-white rounded-[19px]">
                <img
                  src={box}
                  alt=""
                  className="h-[100%] w-[100%] rounded-[19px]"
                />
              </div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Window Patching
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Special technique with a transparent plastic film covering the
                cut-out.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-around mt-[30px] w-[100%] ">
          <div className="w-[23%] h-[320px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%]  w-[90%] bg-white rounded-[19px]">
                <img
                  src={box}
                  alt=""
                  className="h-[100%] w-[100%] rounded-[19px]"
                />
              </div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Window Cut-Out
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Special process where a cut-out is created on the packaging
                surface.
              </p>
            </div>
          </div>
          <div className="w-[23%] h-[320px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%]  w-[90%] bg-white rounded-[19px]">
                <img
                  src={box}
                  alt=""
                  className="h-[100%] w-[100%] rounded-[19px]"
                />
              </div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Metallic Coating
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Add an extra metallic sheen to your box surface.
              </p>
            </div>
          </div>
          <div className="w-[23%] h-[320px] shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%]  w-[90%] bg-white rounded-[19px]">
                <img
                  src={box}
                  alt=""
                  className="h-[100%] w-[100%] rounded-[19px]"
                />
              </div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Window Patching
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Special technique with a transparent plastic film covering the
                cut-out.
              </p>
            </div>
          </div>
          {/* <div className="w-[23%] h-[320px] shadow-sm rounded-[19px] bg-[#CDF6D8]">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]"></div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Pearlescent Coating
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Special technique with a transparent plastic film covering the
                cut-out.
              </p>
            </div>
          </div> */}
        </div>
        <br />
      </div>
    </div>
  );
};

export default SepecialCapabilities;
