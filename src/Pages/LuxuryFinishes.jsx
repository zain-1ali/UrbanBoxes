import React, { useEffect } from "react";
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
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { luxuryFinishPage } from "../redux/ApiSlice";

const LuxuryFinishes = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  let dispatch = useDispatch();
  let luxuryFinishData = useSelector(
    (state) => state.ApiSlice.luxuryFinishData
  );
  console.log(luxuryFinishData);
  useEffect(() => {
    dispatch(luxuryFinishPage());
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
        img={luxuryFinishData?.data?.banner?.image}
        imgTag={luxuryFinishData?.data?.banner?.imageTag}
        heading={luxuryFinishData?.data?.banner?.heading}
        paragraph={luxuryFinishData?.data?.banner?.text}
        btnClr="black"
        hover=""
        btnText={luxuryFinishData?.data?.banner?.Btn1txt}
        Btn1lnk={luxuryFinishData?.data?.banner?.Btn1link}
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
          <div
            dangerouslySetInnerHTML={renderHTML(
              luxuryFinishData?.data?.circle?.sectionDescription
            )}
          />
        </p>
      </div>
      <LuxuryStats
        circle1number={luxuryFinishData?.data?.circle?.circle1number}
        circle1text={luxuryFinishData?.data?.circle?.circle1text}
        circle2number={luxuryFinishData?.data?.circle?.circle2number}
        circle2text={luxuryFinishData?.data?.circle?.circle2text}
        circle3number={luxuryFinishData?.data?.circle?.circle3number}
        circle3text={luxuryFinishData?.data?.circle?.circle3text}
        circle4number={luxuryFinishData?.data?.circle?.circle4number}
        circle4text={luxuryFinishData?.data?.circle?.circle4text}
      />
      <Metalic
        Box1heding={luxuryFinishData?.data?.boxes?.Box1heding}
        Box1desc={luxuryFinishData?.data?.boxes?.Box1desc}
        Box1image={luxuryFinishData?.data?.boxes?.Box1image}
        Box1imageTag={luxuryFinishData?.data?.boxes?.Box1imageTag}
      />
      <Holographic
        Box2heding={luxuryFinishData?.data?.boxes?.Box2heding}
        Box2desc={luxuryFinishData?.data?.boxes?.Box2desc}
        Box2image={luxuryFinishData?.data?.boxes?.Box2image}
        Box2imageTag={luxuryFinishData?.data?.boxes?.Box2imageTag}
      />
      <Uv
        Box3heding={luxuryFinishData?.data?.boxes?.Box3heding}
        Box3desc={luxuryFinishData?.data?.boxes?.Box3desc}
        Box3image={luxuryFinishData?.data?.boxes?.Box3image}
        Box3imageTag={luxuryFinishData?.data?.boxes?.Box3imageTag}
      />
      <Aqueous
        Box4heding={luxuryFinishData?.data?.boxes?.Box4heding}
        Box4desc={luxuryFinishData?.data?.boxes?.Box4desc}
        Box4image={luxuryFinishData?.data?.boxes?.Box4image}
        Box4imageTag={luxuryFinishData?.data?.boxes?.Box4imageTag}
      />
      <HomeOptions bg="#FFF9EA" btnClr="#EFCE6F" />
      <Footer bg="#EFCE6F" textClr="black" />
    </div>
  );
};

export default LuxuryFinishes;
