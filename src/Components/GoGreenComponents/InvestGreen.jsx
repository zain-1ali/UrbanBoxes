import React from "react";
import saveEarth from "../../imgs/saveEarth.png";

const InvestGreen = () => {
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            <img src={saveEarth} alt="" />
          </div>
          <div className="w-[50%] h-[100%] flex  justify-center items-end flex-col">
            <h2
              className="sm:text-[36px] text-[12px] font-[600]   w-[90%] text-end"
              style={{ fontFamily: "Inter" }}
            >
              Invest in Eco-Friendly Packaging Today!
            </h2>
            <p
              className=" sm:text-[20px] text-[6px] font-[400] sm:mt-[10px] mt-[5px]  w-[90%] text-end"
              style={{ fontFamily: "Inter" }}
            >
              Each of our products is made with the environment in mind and is
              designed to reduce waste and protect the planet by 'going green'.
              We have the ideal eco-friendly packaging options for you, whether
              you're a small business, a corporate, or an individual.
            </p>

            <div
              className="sm:w-[155px] sm:h-[53px]  w-[75px] h-[25px] bg-[#449F5A] hover:bg-[#6AD37F] flex justify-center items-center text-white font-[600] sm:text-[20px] text-[10px] rounded-[6px] sm:mt-[60px] mt-[10px] cursor-pointer"
              style={{ fontFamily: "Inter" }}
            >
              Go Green
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestGreen;