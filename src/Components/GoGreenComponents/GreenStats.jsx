import React from "react";

const GreenStats = ({
  circle1number,
  circle1text,
  circle2number,
  circle2text,
  circle3number,
  circle3text,
  circle4number,
  circle4text,
}) => {
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[30px] flex justify-center items-center">
      <div className="lg:w-[93%] w-[95%] lg:h-[320px] h-[140px] lg:rounded-[160px] rounded-full bg-[#CDF6D8] flex justify-evenly items-center">
        <div className="lg:w-[219px] lg:h-[219px] w-[75px] h-[75px] rounded-full border-[#449F5A] lg:border-[4px] border-[2px] flex flex-col  justify-center items-center">
          <h2
            className="font-[700] lg:text-3xl text-xs"
            style={{ fontFamily: "Poppins" }}
          >
            {circle1number}
          </h2>
          <p
            className="font-[500] lg:text-sm text-[4px] text-center mt-[5px]"
            style={{ fontFamily: "Poppins" }}
          >
            {circle1text}
          </p>
        </div>
        <div className="lg:w-[219px] lg:h-[219px] w-[75px] h-[75px] rounded-full border-[#449F5A] lg:border-[4px] border-[2px] flex flex-col  justify-center items-center">
          <h2
            className="font-[700] lg:text-3xl text-xs"
            style={{ fontFamily: "Poppins" }}
          >
            {circle2number}
          </h2>
          <p
            className="font-[500] lg:text-sm text-[4px] text-center mt-[5px]"
            style={{ fontFamily: "Poppins" }}
          >
            {circle2text}
          </p>
        </div>
        <div className="lg:w-[219px] lg:h-[219px] w-[75px] h-[75px] rounded-full border-[#449F5A] lg:border-[4px] border-[2px] flex  flex-col justify-center items-center">
          <h2
            className="font-[700] lg:text-3xl text-xs"
            style={{ fontFamily: "Poppins" }}
          >
            {circle3number}
          </h2>
          <p
            className="font-[500]  lg:text-sm text-[5px] text-center mt-[5px]"
            style={{ fontFamily: "Poppins" }}
          >
            {circle3text}
          </p>
        </div>
        <div className="lg:w-[219px] lg:h-[219px] w-[75px] h-[75px] rounded-full border-[#449F5A] lg:border-[4px] border-[2px] flex  flex-col justify-center items-center">
          <h2
            className="font-[700] lg:text-3xl text-xs"
            style={{ fontFamily: "Poppins" }}
          >
            {circle4number}
          </h2>
          <p
            className="font-[500]  lg:text-sm text-[4px] text-center mt-[5px]"
            style={{ fontFamily: "Poppins" }}
          >
            {circle4text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreenStats;
