import React, { useEffect } from "react";
import { CgNotes } from "react-icons/cg";
import { BiLogoZoom } from "react-icons/bi";
import { LuFileClock } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { scheduleMeetings } from "../redux/ApiSlice";

const HomeOptions = ({ bg, btnClr }) => {
  let btnStyle = {
    fontFamily: "Roboto",
    backgroundColor: btnClr,
    // ":hover": {
    //   backgroundColor: "green",

    // },
  };

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(scheduleMeetings());
  }, []);

  let scheduleMeetingsData = useSelector(
    (state) => state.ApiSlice.scheduleMeetingsData
  );

  console.log(scheduleMeetingsData);

  return (
    <div
      className={`w-[100%] sm:h-[342px] h-[200px]   mt-[50px] flex items-center justify-around`}
      style={{ backgroundColor: bg }}
    >
      <div className="sm:h-[224px] h-[150px]  flex items-center flex-col justify-between">
        <div
          className="sm:h-[77px] sm:w-[77px] h-[40px] w-[40px] rounded-full flex justify-center items-center "
          style={{ backgroundColor: btnClr }}
        >
          <CgNotes className="sm:text-[40px] text-[15px]  text-white" />
        </div>
        <h2
          className="sm:text-xl text-[12px] font-medium sm:mt-[10px] mt-[5px]"
          style={{ fontFamily: "Roboto" }}
        >
          {scheduleMeetingsData?.data?.meeting1name}
        </h2>
        <p
          className="  mt-1 w-[80%] text-center sm:text-[16px] text-[9px] sm:font-[400]"
          style={{ fontFamily: "Roboto" }}
        >
          {scheduleMeetingsData?.data?.meeting1text}
        </p>
        <div
          className="sm:w-[153px] sm:h-[42px] w-[80px] h-[25px] bg-[#449F5A] hover:bg-[#6AD37F] sm:mt-[10px] mt-[7px]  sm:rounded-lg rounded-md flex justify-center items-center text-white font-medium sm:text-[16px] text-[10px] cursor-pointer"
          style={btnStyle}
          onClick={() =>
            window.open(scheduleMeetingsData?.data?.meeting1btnTxt)
          }
        >
          {scheduleMeetingsData?.data?.meeting1btnTxt}
        </div>
      </div>

      <div className="sm:h-[224px]  h-[150px]  flex items-center flex-col justify-between">
        <div
          className="sm:h-[77px] sm:w-[77px] h-[40px] w-[40px] rounded-full flex justify-center items-center "
          style={{ backgroundColor: btnClr }}
        >
          <LuFileClock className="sm:text-[40px] text-[15px]  text-white" />
        </div>
        <h2
          className="sm:text-xl text-[12px] font-medium sm:mt-[10px] mt-[5px]"
          style={{ fontFamily: "Roboto" }}
        >
          {scheduleMeetingsData?.data?.meeting2name}
        </h2>
        <p
          className="  mt-1 w-[80%] text-center sm:text-[16px] text-[9px] sm:font-[400]"
          style={{ fontFamily: "Roboto" }}
        >
          {scheduleMeetingsData?.data?.meeting2text}
        </p>
        <div
          className="sm:w-[153px] sm:h-[42px] w-[80px] h-[25px]  sm:mt-[10px] mt-[7px]  sm:rounded-lg rounded-md flex justify-center items-center text-white font-medium sm:text-[16px] text-[10px] cursor-pointer"
          style={{ fontFamily: "Roboto", backgroundColor: btnClr }}
          onClick={() =>
            window.open(scheduleMeetingsData?.data?.meeting2btnTxt)
          }
        >
          {scheduleMeetingsData?.data?.meeting2btnTxt}
        </div>
      </div>

      <div className="sm:h-[224px]  h-[150px]  flex items-center flex-col justify-between">
        <div
          className="sm:h-[77px] sm:w-[77px] h-[40px] w-[40px] rounded-full flex justify-center items-center "
          style={{ fontFamily: "Roboto", backgroundColor: btnClr }}
        >
          <BiLogoZoom className="sm:text-[40px] text-[15px]  text-white" />
        </div>
        <h2
          className="sm:text-xl text-[10px] font-medium sm:mt-[10px] mt-[5px]"
          style={{ fontFamily: "Roboto" }}
        >
          {scheduleMeetingsData?.meeting3name}
        </h2>
        <p
          className="  mt-1 w-[80%] text-center sm:text-[16px] text-[9px] sm:font-[400]"
          style={{ fontFamily: "Roboto" }}
        >
          {scheduleMeetingsData?.data?.meeting3text}
        </p>
        <div
          className="sm:w-[153px] sm:h-[42px] w-[80px] h-[25px]   sm:mt-[10px] mt-[7px]  sm:rounded-lg rounded-md flex justify-center items-center text-white font-medium sm:text-[16px] text-[10px] cursor-pointer"
          // hover:bg-[#6AD37F]
          style={{ fontFamily: "Roboto", backgroundColor: btnClr }}
          onClick={() =>
            window.open(scheduleMeetingsData?.data?.meeting3btnTxt)
          }
        >
          {scheduleMeetingsData?.data?.meeting3btnTxt}
        </div>
      </div>

      {/* <div className="h-[224px] flex items-center flex-col justify-between">
        <div className="h-[77px] w-[77px] rounded-full flex justify-center items-center bg-[#449F5A]">
          <LuFileClock className="text-[40px] text-white" />
        </div>
        <h2
          className="text-xl font-medium mt-[10px]"
          style={{ fontFamily: "Roboto" }}
        >
          Schedule a call
        </h2>
        <p
          className="  mt-1 w-[80%] text-center text-[16px] font-[400]"
          style={{ fontFamily: "Roboto" }}
        >
          Seamless way to reach Via Schedule call at desired time.
        </p>
        <div
          className="w-[153px] h-[42px] bg-[#449F5A] hover:bg-[#6AD37F] mt-[10px] rounded-lg flex justify-center items-center text-white font-medium text-[16px] cursor-pointer"
          style={{ fontFamily: "Roboto" }}
        >
          Call Now
        </div>
      </div>

      <div className="h-[224px] flex items-center flex-col justify-between">
        <div className="h-[77px] w-[77px] rounded-full flex justify-center items-center bg-[#449F5A]">
          <BiLogoZoom className="text-[40px] text-white" />
        </div>
        <h2
          className="text-xl font-medium mt-[10px]"
          style={{ fontFamily: "Roboto" }}
        >
          Schedule a zoom meeting
        </h2>
        <p
          className="  mt-1 w-[80%] text-center text-[16px] font-[400]"
          style={{ fontFamily: "Roboto" }}
        >
          Enhance your trust in us by getting more clarity in your designs.
        </p>
        <div
          className="w-[153px] h-[42px] bg-[#449F5A] hover:bg-[#6AD37F] mt-[10px] rounded-lg flex justify-center items-center text-white font-medium text-[16px] cursor-pointer"
          style={{ fontFamily: "Roboto" }}
        >
          Call Now
        </div>
      </div> */}
    </div>
  );
};

export default HomeOptions;
