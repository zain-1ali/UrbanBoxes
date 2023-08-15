import React from "react";
import Navbar from "../Components/Navbar";
import StaticPageUpper from "../Components/StaticPageUpper";
import luxurybox from "../imgs/luxuryboxes.png";
import LuxuryStats from "../Components/LuxuryFinishs/LuxuryStats";
import Metalic from "../Components/LuxuryFinishs/Metalic";
import Holographic from "../Components/LuxuryFinishs/Holographic";
import Uv from "../Components/LuxuryFinishs/Uv";
import Aqueous from "../Components/LuxuryFinishs/Aqueous";
import HomeOptions from "../Components/HomeOptions";
import Footer from "../Components/Footer";

const LuxuryFinishes = () => {
  return (
    <div className="w-[100%]">
      <Navbar />

      <StaticPageUpper
        img={luxurybox}
        heading="Luxury Finishing"
        paragraph="Exquisite and Rich Packaging that reflects your brand's excellence and complements
        your products"
        btnClr="black"
        hover=""
        btnText="Shop Luxury"
      />
      <div className="w-[100%] flex flex-col items-center lg:mt-[30px] mt-[10px]">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[35%] w-[28%] h-[1px]  bg-[#696262] mr-4"></div>
          <h2
            className="sm:text-3xl text-[16px] sm:font-[600] font-[500]"
            style={{ fontFamily: "Poppins" }}
          >
            {/* {isDesktopOrLaptop
              ? "Get Discounted Price Quickly"
              : "Get Discounted Price"} */}
            Luxury Finishes
          </h2>
          <div className="sm:w-[35%] w-[28%] h-[1px]  bg-[#696262] ml-4 "></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          // w-[70%] text-center mt-[25px] font-[400] text-xl text-[#2C2C2C]
          style={{ fontFamily: "Roboto" }}
        >
          Our custom boxes are inclusive of everything that you require to
          package your products, ranging from small boxes to customized luxury
          packaging.
        </p>
      </div>
      <LuxuryStats />
      <Metalic />
      <Holographic />
      <Uv />
      <Aqueous />
      <HomeOptions bg="#FFF9EA" btnClr="#EFCE6F" />
      <Footer bg="#EFCE6F" textClr="black" />
    </div>
  );
};

export default LuxuryFinishes;
