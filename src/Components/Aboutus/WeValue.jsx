import React from "react";
import weValue from "../../imgs/weValue.png";

const WeValue = () => {
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            <img src={weValue} alt="" className="w-[457px] h-[410px]" />
          </div>
          <div className="w-[50%] h-[100%] flex  justify-center items-end flex-col">
            <h2
              className="sm:text-[64px] text-[12px] font-[700]   w-[90%] text-end text-[#449F5A]"
              style={{ fontFamily: "Roboto" }}
            >
              We Value Our Clients!
            </h2>
            <p
              className=" sm:text-[20px] text-[6px] font-[400] sm:mt-[10px] mt-[5px]  w-[90%] text-end"
              style={{ fontFamily: "Inter" }}
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
        </div>
      </div>
    </div>
  );
};

export default WeValue;
