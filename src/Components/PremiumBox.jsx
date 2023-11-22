import React, { useState } from "react";

const PremiumBox = ({ img, boxLayout, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  let { w, h, yaxixVal, left, bg, yaxix } = boxLayout;
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div
        className=" absolute  rounded-xl "
        style={{
          width: w,
          height: h,
          [yaxix]: yaxixVal,
          left: left,
          backgroundColor: bg,
        }}
      >
        {isHovered ? (
          <div
            className=" relative  rounded-xl flex justify-center items-center h-[100%] w-[100%] cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="absolute z-20 top-[40%] font-medium text-[24px] text-[#A4A2A2] ">
              {name}
            </h2>
            <div className="  flex justify-center items-center h-[100%] w-[100%] blur-sm">
              <img src={img} alt="" className="max-h-[90%] max-w-[90%] " />
            </div>
          </div>
        ) : (
          <div
            className=" relative  rounded-xl flex justify-center items-center h-[100%] w-[100%] cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={img} alt="" className="max-h-[90%] max-w-[90%]" />
            {isHovered && (
              <h2 className="absolute bottom-[20px] font-medium text-[24px] text-[#A4A2A2] ">
                Box
              </h2>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default PremiumBox;
