import React from "react";
import greenworld from "../../imgs/cleanGreen.png";
const DifferenceGreen = ({ Box3heding, Box3desc, Box3image, Box3imageTag }) => {
  const renderHTML = (string) => {
    return { __html: string };
  };
  return (
    <div className="w-[100%] lg:mt-[50px] mt-[10px]">
      <div className="w-[100%] lg:mt-[50px] mt-[10px]">
        <div className="w-[100%] flex justify-center items-center">
          <div className="w-[95%]  sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px] ">
            <div className="w-[50%] h-[100%] flex  justify-center flex-col">
              <h2
                className="sm:text-[36px] text-[12px] font-[600]  "
                style={{ fontFamily: "Inter" }}
              >
                {Box3heding}
              </h2>
              <p
                className="w-[100%] sm:text-[20px] text-[6px] sm:h-[340px] overflow-y-scroll scrollbar-hide font-[400] sm:mt-[10px] mt-[5px]"
                style={{ fontFamily: "Inter" }}
              >
                <div dangerouslySetInnerHTML={renderHTML(Box3desc)} />
              </p>
              {/* <ul
                className="w-[100%] sm:text-[20px] text-[6px] font-[400]"
                style={{ fontFamily: "Inter" }}
              >
                <li>Reusable</li>
                <li>Recyclable</li>
                <li>Biodegradable and non-polluting</li>
                <li>Not harmful to humans and animals</li>
                <li>Manufactured with recycled materials</li>
                <li>Made with the lowest energy consumption possible</li>
                <li>Contain no toxic elements or materials</li>
              </ul> */}
              <div
                className="sm:w-[155px] sm:h-[53px]  w-[75px] h-[25px] bg-[#449F5A] hover:bg-[#6AD37F] flex justify-center items-center text-white font-[600] sm:text-[20px] text-[10px] rounded-[6px] sm:mt-[30px] mt-[10px] cursor-pointer"
                style={{ fontFamily: "Inter" }}
              >
                Go Green
              </div>
            </div>
            <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
              {/* <div className="flex justify-between w-[458px] h-[184px]">
          <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
          <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
        </div> */}
              <img src={Box3image} alt={Box3imageTag} />
              {/* <div className="flex justify-between w-[458px] h-[184px] rounded-[19px] bg-[#FDF3DB] mt-[20px]"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferenceGreen;
