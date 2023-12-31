import React from "react";
import box from "../../imgs/box1.png";

const Coating = ({ specialCapabilities }) => {
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
            Coating & Lamination
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
      <div className="overflow-y-scroll h-[80%] w-[100%] pr-3">
        <div className="flex sm:justify-start justify-center flex-wrap overflow-y-scroll scrollbar-hide mt-[30px] w-[100%] sm:h-[350px] ">
          {specialCapabilities?.map((elm) => {
            return (
              <div className="sm:w-[23%] w-[75%] sm:mt-0 mt-5 h-[320px] shadow-lg  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer sm:ml-7">
                <div className="w-[100%] h-[60%]  flex justify-center items-center">
                  <div className="h-[87%] shadow-md w-[90%] bg-white ">
                    <img
                      src={elm?.image}
                      alt=""
                      className="h-[100%] w-[100%] "
                    />
                  </div>
                </div>
                <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
                  <h2
                    className="font-[500] text-xl"
                    style={{ fontFamily: "Roboto" }}
                  >
                    {elm?.title}
                  </h2>
                  <p
                    className="font-[400] mt-1 w-[92%] text-[12px]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    {elm?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <br />
      </div>
    </div>
  );
};

export default Coating;
