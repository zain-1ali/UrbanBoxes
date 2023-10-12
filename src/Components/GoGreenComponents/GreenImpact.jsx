import React from "react";
import greenShop from "../../imgs/greenShop.png";

const GreenImpact = ({ Box2heding, Box2desc, Box2image, Box2imageTag }) => {
  const renderHTML = (string) => {
    return { __html: string };
  };
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            <img src={Box2image} alt={Box2imageTag} />
          </div>
          <div className="w-[50%] h-[100%] flex  justify-center items-end flex-col">
            <h2
              className="sm:text-[36px] text-[12px] font-[600]   w-[90%] text-end"
              style={{ fontFamily: "Inter" }}
            >
              {Box2heding}
            </h2>
            <p
              className=" sm:text-[20px] text-[6px] font-[400] sm:mt-[10px] mt-[5px]  w-[90%] text-end"
              style={{ fontFamily: "Inter" }}
            >
              <div dangerouslySetInnerHTML={renderHTML(Box2desc)} />
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

export default GreenImpact;
