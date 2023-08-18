import React from "react";
import greenShop from "../../imgs/holographic.png";

const Holographic = () => {
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            <img src={greenShop} alt="" className="w-[457px] h-[410px]" />
          </div>
          <div className="w-[50%] h-[100%] flex  justify-center items-end flex-col">
            <h2
              className="sm:text-[36px] text-[12px] font-[600]   w-[90%] text-end"
              style={{ fontFamily: "Inter" }}
            >
              Holographic Foiling
            </h2>
            <p
              className=" sm:text-[20px] text-[6px] font-[400] sm:mt-[10px] mt-[5px]  w-[90%] text-end"
              style={{ fontFamily: "Inter" }}
            >
              We offer Holographic Foils, which are thin, transparent films that
              may be put directly over your printed image. The foil is available
              in a variety of hues and designs, such as gold, silver, and
              rainbow, in matte or gloss finishes. Notably, the cosmetic
              industry widely makes considerable use of holographic foiling to
              create beautiful packaging. This kind of packaging boosts your
              product's perceived worth also adding glitz and style. They are
              ideal to provide more conceptual clarity and initiate effective
              communication between customer and brand.
            </p>

            <div
              className="sm:w-[155px] sm:h-[53px]  w-[75px] h-[25px] bg-[#E8C86B] hover:bg-[#FFD164] flex justify-center items-center text-white font-[600] sm:text-[20px] text-[10px] rounded-[6px] sm:mt-[30px] mt-[10px] cursor-pointer"
              style={{ fontFamily: "Inter" }}
            >
              Shop Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holographic;