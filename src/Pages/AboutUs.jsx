import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { aboutPage } from "../redux/ApiSlice";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  let dispatch = useDispatch();
  let aboutData = useSelector((state) => state.ApiSlice.aboutData);
  console.log(aboutData);
  let seoInfo = aboutData?.data?.seo;
  useEffect(() => {
    dispatch(aboutPage());
  }, []);
  const renderHTML = (string) => {
    return { __html: string };
  };

  let location = useLocation();
  let { pathname } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-[100%]">
      <Helmet>
        {/* Page Name Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${seoInfo?.pageName}"
            }
          `}
        </script>

        {/* Meta Title */}
        <title>{seoInfo?.metaTitle}</title>

        {/* Meta Tags */}

        <meta name="keywords" content={seoInfo?.metaTag} />

        {/* Meta Description */}
        <meta name="description" content={seoInfo?.metaDescription} />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
            ${seoInfo?.breadcrumbSchema}
          `}
        </script>
      </Helmet>
      {isDesktopOrLaptop ? (
        <Navbar />
      ) : (
        <>
          <MobileNavbar />
          <br />
        </>
      )}
      <StaticPageUpper
        img={aboutData?.data?.banner?.image}
        imgTag={aboutData?.data?.banner?.imageTag}
        heading={aboutData?.data?.banner?.heading}
        paragraph={aboutData?.data?.banner?.text}
        btnClr="#449F5A"
        hover="#6AD37F"
        btnText={aboutData?.data?.banner?.Btn1txt}
        Btn1lnk={aboutData?.data?.banner?.Btn1link}
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
          <div
            dangerouslySetInnerHTML={renderHTML(
              aboutData?.data?.aboutUrbanBoxDesc
            )}
          />
          {/* Our custom boxes are inclusive of everything that you require to
          package your products, ranging from small boxes to customized luxury
          packaging. */}
        </p>
      </div>

      <WhoWeAre
        Box1heding={aboutData?.data?.boxes?.Box1heding}
        Box1desc={aboutData?.data?.boxes?.Box1desc}
        Box1image={aboutData?.data?.boxes?.Box1image}
        Box1imageTag={aboutData?.data?.boxes?.Box1imageTag}
      />
      <OurHistory
        Box2heding={aboutData?.data?.boxes?.Box2heding}
        Box2desc={aboutData?.data?.boxes?.Box2desc}
        Box2image={aboutData?.data?.boxes?.Box2image}
        Box2imageTag={aboutData?.data?.boxes?.Box2imageTag}
      />
      <WhatWeDo
        Box3heding={aboutData?.data?.boxes?.Box3heding}
        Box3desc={aboutData?.data?.boxes?.Box3desc}
        Box3image={aboutData?.data?.boxes?.Box3image}
        Box3imageTag={aboutData?.data?.boxes?.Box3imageTag}
      />
      <WeValue
        Box4heding={aboutData?.data?.boxes?.Box4heding}
        Box4desc={aboutData?.data?.boxes?.Box4desc}
        Box4image={aboutData?.data?.boxes?.Box4image}
        Box4imageTag={aboutData?.data?.boxes?.Box4imageTag}
      />
      <HomeBrandTrust />
      <HomeOptions bg="#EAFFEF" btnClr="#449F5A" />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default AboutUs;
