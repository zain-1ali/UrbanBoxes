import React from "react";
import whowe from "../../imgs/whower.png";

const WhoWeAre = () => {
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
          <div className="w-[50%] h-[100%] flex  justify-center flex-col">
            <h2
              className="sm:text-[64px] text-[12px] font-[700] text-[#449F5A] "
              style={{ fontFamily: "Roboto" }}
            >
              Who We Are
            </h2>
            <p
              className="w-[100%] sm:text-[20px] text-[6px] font-[400] sm:mt-[10px] mt-[5px]"
              style={{ fontFamily: "Roboto" }}
            >
              Custom Boxes Hub is a first-rate packaging solution platform
              dedicated to assisting small and large business owners with the
              highest quality, well-designed, and highly affordable packaging
              needs. Select from the largest packaging range of premium material
              boxes to satisfy your products' requirements or order printed
              custom packaging boxes in any shape, size, color, design, and
              luxury finishing, we will manufacture them for you. Our in-house
              designing, manufacturing, and printing facilities allow us to make
              packaging easier for you!
            </p>
          </div>
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            {/* <div className="flex justify-between w-[458px] h-[184px]">
      <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
      <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
    </div> */}
            <img src={whowe} alt="" className="h-[487px] w-[452px]" />
            {/* <div className="flex justify-between w-[458px] h-[184px] rounded-[19px] bg-[#FDF3DB] mt-[20px]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
