import React from "react";
import aqueous from "../../imgs/aqueous.png";

const Aqueous = () => {
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            <img src={aqueous} alt="" className="w-[510px] h-[401px]" />
          </div>
          <div className="w-[50%] h-[100%] flex  justify-center items-end flex-col">
            <h2
              className="sm:text-[36px] text-[12px] font-[600]   w-[90%] text-end"
              style={{ fontFamily: "Inter" }}
            >
              Aqueous Coating
            </h2>
            <p
              className=" sm:text-[20px] text-[6px] font-[400] sm:mt-[10px] mt-[5px]  w-[90%] text-end"
              style={{ fontFamily: "Inter" }}
            >
              At Custom Boxes Hub, we believe that your products deserve
              packaging that is both functional and beautiful. That's why we
              offer custom Aqueous Coatings that will not only protect your
              products but also make them stand out from the crowd. So why
              settle for ordinary packaging when you can have extraordinary? Let
              us help you take your product packaging to the next level with our
              custom Aqueous Coatings. We offer a wide variety of quality
              Aqueous Coating including Pencil Receptive Coating, Gloss Coating,
              Matte Coating, Soft Touch Coating, Satin Coating, Dry Erase
              Coating, etc.
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

export default Aqueous;
