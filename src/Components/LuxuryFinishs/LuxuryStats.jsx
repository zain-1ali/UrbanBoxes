import React from "react";

const LuxuryStats = () => {
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[30px] flex justify-center items-center">
      <div className="lg:w-[93%] w-[95%] lg:h-[320px] h-[140px] lg:rounded-[160px] rounded-full bg-[#F1E4C0] flex justify-evenly items-center">
        <div className="lg:w-[219px] lg:h-[219px] w-[75px] h-[75px] rounded-full border-[#EFCE6F] lg:border-[4px] border-[2px] flex flex-col  justify-center items-center">
          <h2
            className="font-[700] lg:text-3xl text-xs"
            style={{ fontFamily: "Poppins" }}
          >
            37%
          </h2>
          <p
            className="font-[500] lg:text-sm text-[4px] text-center mt-[5px]"
            style={{ fontFamily: "Poppins" }}
          >
            Package Waste
          </p>
        </div>
        <div className="lg:w-[219px] lg:h-[219px] w-[75px] h-[75px] rounded-full border-[#EFCE6F] lg:border-[4px] border-[2px] flex flex-col  justify-center items-center">
          <h2
            className="font-[700] lg:text-3xl text-xs"
            style={{ fontFamily: "Poppins" }}
          >
            3.7%
          </h2>
          <p
            className="font-[500] lg:text-sm text-[4px] text-center mt-[5px]"
            style={{ fontFamily: "Poppins" }}
          >
            Global Carbon Omission Packaging Share
          </p>
        </div>
        <div className="lg:w-[219px] lg:h-[219px] w-[75px] h-[75px] rounded-full border-[#EFCE6F] lg:border-[4px] border-[2px] flex  flex-col justify-center items-center">
          <h2
            className="font-[700] lg:text-3xl text-xs"
            style={{ fontFamily: "Poppins" }}
          >
            8M TON
          </h2>
          <p
            className="font-[500]  lg:text-sm text-[5px] text-center mt-[5px]"
            style={{ fontFamily: "Poppins" }}
          >
            Contaminating Marine Life Per Year
          </p>
        </div>
        <div className="lg:w-[219px] lg:h-[219px] w-[75px] h-[75px] rounded-full border-[#EFCE6F] lg:border-[4px] border-[2px] flex  flex-col justify-center items-center">
          <h2
            className="font-[700] lg:text-3xl text-xs"
            style={{ fontFamily: "Poppins" }}
          >
            10.45M
          </h2>
          <p
            className="font-[500]  lg:text-sm text-[4px] text-center mt-[5px]"
            style={{ fontFamily: "Poppins" }}
          >
            Raised in 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuxuryStats;
