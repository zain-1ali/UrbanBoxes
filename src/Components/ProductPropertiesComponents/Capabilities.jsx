import React from "react";
import box from "../../imgs/box1.png";

const Capabilities = () => {
  return (
    <div className="p-1 w-[100%] h-[100%] flex  items-center flex-col justify-center">
      <div className="w-[100%]  flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center  ">
          <div className="sm:w-[35%] w-[22%] h-[1px]  bg-[#696262] mr-2"></div>
          <h2
            className="sm:text-2xl text-[16px] sm:font-[600] font-[500]"
            style={{ fontFamily: "Poppins" }}
          >
            Special Capabilities
          </h2>
          <div className="sm:w-[35%] w-[22%] h-[1px]  bg-[#696262] ml-2 "></div>
        </div>

        <p
          className="sm:w-[90%] w-[90%] text-center sm:mt-[10px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          // w-[70%] text-center mt-[25px] font-[400] text-xl text-[#2C2C2C]
          style={{ fontFamily: "Roboto" }}
        >
          Our custom boxes are inclusive of everything that you require to
          package your products, ranging from small boxes to customized luxury
          packaging.
        </p>
      </div>

      <div className="flex sm:justify-between justify-center mt-[50px] w-[100%] flex-wrap overflow-y-scroll scrollbar-hide">
        <div className="sm:w-[23%] w-[80%] sm:mt-0 mt-7 h-[320px] shadow-lg rounded-[19px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <div className="w-[100%] h-[60%]  flex justify-center items-center">
            <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]">
              <img
                src={box}
                alt=""
                className="h-[100%] w-[100%] rounded-[19px]"
              />
            </div>
          </div>
          <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
            <h2 className="font-[500] text-xl" style={{ fontFamily: "Roboto" }}>
              Custom Structure
            </h2>
            <p
              className="font-[400] mt-1 w-[92%] text-[12px]"
              style={{ fontFamily: "Roboto" }}
            >
              Fully customized structures tailored to your specifications.
            </p>
          </div>
        </div>
        <div className="sm:w-[23%] w-[80%] sm:mt-0 mt-7 h-[320px] shadow-lg rounded-[19px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <div className="w-[100%] h-[60%]  flex justify-center items-center">
            <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]">
              <img
                src={box}
                alt=""
                className="h-[100%] w-[100%] rounded-[19px]"
              />
            </div>
          </div>
          <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
            <h2 className="font-[500] text-xl" style={{ fontFamily: "Roboto" }}>
              Leather Wooden
            </h2>
            <p
              className="font-[400] mt-1 w-[92%] text-[12px]"
              style={{ fontFamily: "Roboto" }}
            >
              Meticulously crafted premium custom leather and wooden boxes.
            </p>
          </div>
        </div>
        <div className="sm:w-[23%] w-[80%] sm:mt-0 mt-7 h-[320px] shadow-lg rounded-[19px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <div className="w-[100%] h-[60%]  flex justify-center items-center">
            <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]">
              <img
                src={box}
                alt=""
                className="h-[100%] w-[100%] rounded-[19px]"
              />
            </div>
          </div>
          <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
            <h2 className="font-[500] text-xl" style={{ fontFamily: "Roboto" }}>
              Diversified Papers
            </h2>
            <p
              className="font-[400] mt-1 w-[92%] text-[12px]"
              style={{ fontFamily: "Roboto" }}
            >
              Unlimited selection of textured and colored paper.
            </p>
          </div>
        </div>
        <div className="sm:w-[23%] w-[80%] sm:mt-0 mt-7 h-[320px] shadow-lg rounded-[19px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          <div className="w-[100%] h-[60%]  flex justify-center items-center">
            <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]">
              <img
                src={box}
                alt=""
                className="h-[100%] w-[100%] rounded-[19px]"
              />
            </div>
          </div>
          <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
            <h2 className="font-[500] text-xl" style={{ fontFamily: "Roboto" }}>
              Custom Inserts
            </h2>
            <p
              className="font-[400] mt-1 w-[92%] text-[12px]"
              style={{ fontFamily: "Roboto" }}
            >
              Meticulously crafted premium custom leather and wooden boxes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
