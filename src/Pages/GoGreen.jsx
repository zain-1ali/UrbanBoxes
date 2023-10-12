import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { goGreenPage } from "../redux/ApiSlice";
const GoGreen = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  let dispatch = useDispatch();
  let goGreenData = useSelector((state) => state.ApiSlice.goGreenData);
  console.log(goGreenData);
  useEffect(() => {
    dispatch(goGreenPage());
  }, []);
  const renderHTML = (string) => {
    return { __html: string };
  };
  return (
    <div className="w-[100%]">
      {isDesktopOrLaptop ? (
        <Navbar />
      ) : (
        <>
          <MobileNavbar />
          <br />
        </>
      )}
      <StaticPageUpper
        img={goGreenData?.data?.banner?.image}
        imgTag={goGreenData?.data?.banner?.imageTag}
        heading={goGreenData?.data?.banner?.heading}
        paragraph={goGreenData?.data?.banner?.text}
        btnClr="#449F5A"
        hover="#6AD37F"
        btnText={goGreenData?.data?.banner?.Btn1txt}
        Btn1lnk={goGreenData?.data?.banner?.Btn1link}
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
          <div
            dangerouslySetInnerHTML={renderHTML(
              goGreenData?.data?.circle?.sectionDescription
            )}
          />
        </p>
      </div>
      <GreenStats
        circle1number={goGreenData?.data?.circle?.circle1number}
        circle1text={goGreenData?.data?.circle?.circle1text}
        circle2number={goGreenData?.data?.circle?.circle2number}
        circle2text={goGreenData?.data?.circle?.circle2text}
        circle3number={goGreenData?.data?.circle?.circle3number}
        circle3text={goGreenData?.data?.circle?.circle3text}
        circle4number={goGreenData?.data?.circle?.circle4number}
        circle4text={goGreenData?.data?.circle?.circle4text}
      />

      <GreenSustainable
        Box1heding={goGreenData?.data?.boxes?.Box1heding}
        Box1desc={goGreenData?.data?.boxes?.Box1desc}
        Box1image={goGreenData?.data?.boxes?.Box1image}
        Box1imageTag={goGreenData?.data?.boxes?.Box1imageTag}
      />
      <GreenImpact
        Box2heding={goGreenData?.data?.boxes?.Box2heding}
        Box2desc={goGreenData?.data?.boxes?.Box2desc}
        Box2image={goGreenData?.data?.boxes?.Box2image}
        Box2imageTag={goGreenData?.data?.boxes?.Box2imageTag}
      />
      <DifferenceGreen
        Box3heding={goGreenData?.data?.boxes?.Box3heding}
        Box3desc={goGreenData?.data?.boxes?.Box3desc}
        Box3image={goGreenData?.data?.boxes?.Box3image}
        Box3imageTag={goGreenData?.data?.boxes?.Box3imageTag}
      />
      <InvestGreen
        Box4heding={goGreenData?.data?.boxes?.Box4heding}
        Box4desc={goGreenData?.data?.boxes?.Box4desc}
        Box4image={goGreenData?.data?.boxes?.Box4image}
        Box4imageTag={goGreenData?.data?.boxes?.Box4imageTag}
      />
      <HomeOptions bg="#EAFFEF" btnClr="#449F5A" />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default GoGreen;
