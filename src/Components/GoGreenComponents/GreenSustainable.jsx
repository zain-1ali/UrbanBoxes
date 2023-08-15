import React from "react";
import greenworld from "../../imgs/greenworld.png";

const GreenSustainable = () => {
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
          <div className="w-[50%] h-[100%] flex  justify-center flex-col">
            <h2
              className="sm:text-[36px] text-[12px] font-[600]  "
              style={{ fontFamily: "Inter" }}
            >
              Our Packaging Materials Are Sustainable
            </h2>
            <p
              className="w-[100%] sm:text-[20px] text-[6px] font-[400] sm:mt-[10px] mt-[5px]"
              style={{ fontFamily: "Inter" }}
            >
              Eco-friendly packaging has no parameters to measure; however, we
              plays a vital role to mitigate the issue by using materials during
              the production procedure which reduce the environmental effect, do
              not harm the environment, and promote the health of humans and
              wildlife. Our innovative eco-friendly materials are biodegradable
              and renewable.
            </p>

            <div
              className="sm:w-[155px] sm:h-[53px]  w-[75px] h-[25px] bg-[#449F5A] hover:bg-[#6AD37F] flex justify-center items-center text-white font-[600] sm:text-[20px] text-[10px] rounded-[6px] sm:mt-[60px] mt-[10px] cursor-pointer"
              style={{ fontFamily: "Inter" }}
            >
              Go Green
            </div>
          </div>
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            {/* <div className="flex justify-between w-[458px] h-[184px]">
          <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
          <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
        </div> */}
            <img src={greenworld} alt="" />
            {/* <div className="flex justify-between w-[458px] h-[184px] rounded-[19px] bg-[#FDF3DB] mt-[20px]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenSustainable;
