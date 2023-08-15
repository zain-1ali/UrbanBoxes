import React from "react";
import greenworld from "../../imgs/metalic.png";

const Metalic = () => {
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
          <div className="w-[50%] h-[100%] flex  justify-center flex-col">
            <h2
              className="sm:text-[36px] text-[12px] font-[600]  "
              style={{ fontFamily: "Inter" }}
            >
              Metallic Foiling
            </h2>
            <p
              className="w-[100%] sm:text-[20px] text-[6px] font-[400] sm:mt-[10px] mt-[5px]"
              style={{ fontFamily: "Inter" }}
            >
              You can choose from a variety of metallic foiling alternatives at
              Custom Boxes Hub, such as gold, silver, copper foil, and others.
              Each metallic foil has unique qualities that make it suitable for
              a variety of uses and help your product to become extremely
              attractive. Silver and gold, for instance, both reflect light
              well. This means that while gold will work well to create
              eye-catching packaging for high-end goods, silver would be a
              better option if you want something that will endure longer and be
              more reasonably priced.
            </p>

            <div
              className="sm:w-[155px] sm:h-[53px]  w-[75px] h-[25px] bg-[#E8C86B] hover:bg-[#FFD164] flex justify-center items-center text-white font-[600] sm:text-[20px] text-[10px] rounded-[6px] sm:mt-[30px] mt-[10px] cursor-pointer"
              style={{ fontFamily: "Inter" }}
            >
              Shop Now
            </div>
          </div>
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            {/* <div className="flex justify-between w-[458px] h-[184px]">
          <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
          <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
        </div> */}
            <img src={greenworld} alt="" className="h-[310px] w-[306px]" />
            {/* <div className="flex justify-between w-[458px] h-[184px] rounded-[19px] bg-[#FDF3DB] mt-[20px]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metalic;
