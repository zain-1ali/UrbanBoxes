import React from "react";
import Navbar from "../Components/Navbar";
import StaticPageUpper from "../Components/StaticPageUpper";
import GreenStats from "../Components/GoGreenComponents/GreenStats";
import GreenSustainable from "../Components/GoGreenComponents/GreenSustainable";
import GreenImpact from "../Components/GoGreenComponents/GreenImpact";
import DifferenceGreen from "../Components/GoGreenComponents/DifferenceGreen";
import InvestGreen from "../Components/GoGreenComponents/InvestGreen";
import HomeOptions from "../Components/HomeOptions";
import Footer from "../Components/Footer";
import ecobox from "../imgs/ecofriendlyboxes.png";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";
const GoGreen = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="w-[100%]">
      {isDesktopOrLaptop ? <Navbar /> : <MobileNavbar />}
      <StaticPageUpper
        img={ecobox}
        heading=" Go Greener with us to Create a Better Future for the Planet"
        paragraph="Create a Better Future for the Planet"
        btnClr="#449F5A"
        hover="#6AD37F"
        btnText="Shop Eco-friendly"
      />
      <div className="w-[100%] flex flex-col items-center lg:mt-[30px] mt-[10px]">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[40%] w-[32%] h-[1px]  bg-[#696262] mr-4"></div>
          <h2
            className="sm:text-3xl text-[16px] sm:font-[600] font-[500]"
            style={{ fontFamily: "Poppins" }}
          >
            {/* {isDesktopOrLaptop
              ? "Get Discounted Price Quickly"
              : "Get Discounted Price"} */}
            Go Green
          </h2>
          <div className="sm:w-[40%] w-[32%] h-[1px]  bg-[#696262] ml-4 "></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          // w-[70%] text-center mt-[25px] font-[400] text-xl text-[#2C2C2C]
          style={{ fontFamily: "Roboto" }}
        >
          we strive to provide superior services and solutions that surpass your
          expectations. Let us find the ideal packaging solution for your
          project.
        </p>
      </div>
      <GreenStats />
      <GreenSustainable />
      <GreenImpact />
      <DifferenceGreen />
      <InvestGreen />
      <HomeOptions bg="#EAFFEF" btnClr="#449F5A" />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default GoGreen;
