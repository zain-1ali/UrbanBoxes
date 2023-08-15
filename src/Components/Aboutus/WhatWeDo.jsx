import React from "react";
import Qrscan from "../../imgs/Qrscan.png";

const WhatWeDo = () => {
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
          <div className="w-[50%] h-[100%] flex  justify-center flex-col">
            <h2
              className="sm:text-[64px] text-[12px] font-[700] text-[#449F5A] "
              style={{ fontFamily: "Roboto" }}
            >
              What WE DO?
            </h2>

            <h2
              className="sm:text-[32px] text-[12px] font-[600] text-[#3C443E] mt-3"
              style={{ fontFamily: "Roboto" }}
            >
              1. Label Claims are Backed By Research:
            </h2>
            <p
              className="font-[400] text-[20px] mt-2 text-[#746F6F]"
              style={{ fontFamily: "Roboto" }}
            >
              Urban Boxes is passionate about our commitment tyour good health
              and promise to provide the highest quality dietary supplements and
              natural products at the best possible price.
            </p>

            <h2
              className="sm:text-[32px] text-[12px] font-[600] text-[#3C443E] mt-3"
              style={{ fontFamily: "Roboto" }}
            >
              2. Authentic and Accurate Information:
            </h2>
            <p
              className="font-[400] text-[20px] mt-2 text-[#746F6F]"
              style={{ fontFamily: "Roboto" }}
            >
              Urban Boxes is passionate about our commitment tyour good health
              and promise to provide the highest quality dietary supplements and
              natural products at the best possible price.
            </p>

            <h2
              className="sm:text-[32px] text-[12px] font-[600] text-[#3C443E] mt-3"
              style={{ fontFamily: "Roboto" }}
            >
              3. New Product Development:
            </h2>
            <p
              className="font-[400] text-[20px] mt-2 text-[#746F6F]"
              style={{ fontFamily: "Roboto" }}
            >
              Urban Boxes is passionate about our commitment tyour good health
              and promise to provide the highest quality dietary supplements and
              natural products at the best possible price.
            </p>
          </div>
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            {/* <div className="flex justify-between w-[458px] h-[184px]">
  <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
  <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
</div> */}
            <img src={Qrscan} alt="" className="h-[457px] w-[464px]" />
            {/* <div className="flex justify-between w-[458px] h-[184px] rounded-[19px] bg-[#FDF3DB] mt-[20px]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
