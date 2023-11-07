import React from "react";
import Qrscan from "../../imgs/Qrscan.png";

const WhatWeDo = ({ Box3heding, Box3desc, Box3image, Box3imageTag }) => {
  const renderHTML = (string) => {
    return { __html: string };
  };
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
          <div className="w-[50%] h-[100%] flex  justify-center flex-col">
            <h2
              className="sm:text-[64px] text-[12px] font-[700] text-[#449F5A] "
              style={{ fontFamily: "Roboto" }}
            >
              {Box3heding}
            </h2>

            <p
              className="font-[400] text-[20px] sm:h-[340px] overflow-y-scroll  mt-2 text-[#746F6F]"
              style={{ fontFamily: "Roboto" }}
            >
              <div dangerouslySetInnerHTML={renderHTML(Box3desc)} />
            </p>
          </div>
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            {/* <div className="flex justify-between w-[458px] h-[184px]">
  <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
  <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
</div> */}
            <img
              src={Box3image}
              alt={Box3imageTag}
              className="h-[457px] w-[464px]"
            />
            {/* <div className="flex justify-between w-[458px] h-[184px] rounded-[19px] bg-[#FDF3DB] mt-[20px]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
