import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Homeproducts from "../Components/Homeproducts";
import Homeform from "../Components/Homeform";
import WhyUs from "../Components/WhyUs";
import HomePremium from "../Components/HomePremium";
import HomeGreen from "../Components/HomeGreen";
import HomeOptions from "../Components/HomeOptions";
import HomeFAQ from "../Components/HomeFAQ";
import HomeBrandTrust from "../Components/HomeBrandTrust";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";
import Branding from "../Components/Branding";
import { useDispatch, useSelector } from "react-redux";
import { siteData } from "../redux/SettingsApiSlice";
import { homePage } from "../redux/ApiSlice";

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  let navigate = useNavigate();
  // let dispatch = useDispatch()

  let baseUrl = import.meta.env.VITE_BASE_URL;
  console.log(baseUrl);

  let dispatch = useDispatch();
  let homePageData = useSelector((state) => state.ApiSlice.homePageData);
  // console.log(homePageData);
  useEffect(() => {
    dispatch(homePage());
  }, []);

  return (
    <div className="w-[100%] scrollbar-hide">
      {isDesktopOrLaptop ? (
        <Navbar navigate={navigate} />
      ) : (
        <>
          <MobileNavbar />
          <br />
        </>
      )}
      <HeroSection heroData={homePageData?.data?.banner} />
      <Homeproducts insDesignDesc={homePageData?.data?.insDesignDesc} />
      <Branding
        boxes={homePageData?.data?.boxes}
        brandDesc={homePageData?.data?.prdctBrndDesc}
        brandHeading={homePageData?.data?.prdctBrndHeading}
        brandCircle={homePageData?.data?.prdctBrndCircleTxt}
      />
      <Homeform
        getDiscPricDesc={homePageData?.data?.GetDiscPricDesc}
        getDiscPricBoxHeding={homePageData?.data?.GetDiscPricBoxHeding}
        getDiscPricBoxText={homePageData?.data?.GetDiscPricBoxText}
        getDiscPricFormHeding={homePageData?.data?.GetDiscPricFormHeding}
        getDiscPricFormText={homePageData?.data?.GetDiscPricFormText}
      />
      <WhyUs
        whyUrbnDesc={homePageData?.data?.whyUrbnDesc}
        whyUrbnImg={homePageData?.data?.whyUrbnImg}
        whyUrbnImgTag={homePageData?.data?.whyUrbnImgTag}
        whyUrbnBoxTxt={homePageData?.data?.whyUrbnBoxTxt}
      />
      <HomePremium
        premImgDesc={homePageData?.data?.premImgDesc}
        premiumImages={homePageData?.data?.premiumImages}
      />
      <HomeGreen
        goGrenDesc={homePageData?.data?.goGrenDesc}
        goGrenBoxHeding={homePageData?.data?.goGrenBoxHeding}
        goGrenBoxImg={homePageData?.data?.goGrenBoxImg}
        goGrenBoxTxt={homePageData?.data?.goGrenBoxTxt}
        goGrenBoxImgTag={homePageData?.data?.goGrenBoxImgTag}
        goGrenBtnTxt={homePageData?.data?.goGrenBtnTxt}
        goGrenBoxBtnLink={homePageData?.data?.goGrenBoxBtnLink}
      />
      <HomeBrandTrust trstBrndDesc={homePageData?.data?.trstBrndDesc} />
      <HomeOptions bg="#EAFFEF" btnClr="#449F5A" />
      <HomeFAQ
        faqDesc={homePageData?.data?.faqDesc}
        faqs={homePageData?.data?.faqs}
      />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default Home;
