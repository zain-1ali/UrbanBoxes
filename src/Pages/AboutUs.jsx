import React from "react";
import Navbar from "../Components/Navbar";
import StaticPageUpper from "../Components/StaticPageUpper";
import about from "../imgs/aboutimg.png";
import WhoWeAre from "../Components/Aboutus/WhoWeAre";
import OurHistory from "../Components/Aboutus/OurHistory";
import WeValue from "../Components/Aboutus/WeValue";
import HomeOptions from "../Components/HomeOptions";
import Footer from "../Components/Footer";
import HomeBrandTrust from "../Components/HomeBrandTrust";
import WhatWeDo from "../Components/Aboutus/WhatWeDo";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";

const AboutUs = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="w-[100%]">
      {isDesktopOrLaptop ? <Navbar /> : <MobileNavbar />}
      <StaticPageUpper
        img={about}
        heading="About Us"
        paragraph="Exquisite and Rich Packaging that reflects your brand's excellence and complements your products"
        btnClr="#449F5A"
        hover="#6AD37F"
        btnText="Shop Now"
      />

      <div className="w-[100%] flex flex-col items-center lg:mt-[30px] mt-[10px]">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[35%] w-[32%] h-[1px]  bg-[#696262] mr-4"></div>
          <h2
            className="sm:text-3xl text-[16px] sm:font-[600] font-[500]"
            style={{ fontFamily: "Poppins" }}
          >
            {/* {isDesktopOrLaptop
              ? "Get Discounted Price Quickly"
              : "Get Discounted Price"} */}
            ABOUT URBAN BOXES
          </h2>
          <div className="sm:w-[35%] w-[32%] h-[1px]  bg-[#696262] ml-4 "></div>
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

      <WhoWeAre />
      <OurHistory />
      <WhatWeDo />
      <WeValue />
      <HomeBrandTrust />
      <HomeOptions bg="#EAFFEF" btnClr="#449F5A" />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default AboutUs;
