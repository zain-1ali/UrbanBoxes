import React, { useState } from "react";

const PremiumBox = ({ img, w, h, yaxixVal, left, bg, yaxix }) => {
  const [isHovered, setIsHovered] = useState(false);

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
        <div
          className=" relative  rounded-xl flex justify-center items-center h-[100%] w-[100%] cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={img} alt="" />
          {isHovered && (
            <h2 className="absolute bottom-[20px] font-medium text-[24px] text-[#A4A2A2] ">
              Box
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default PremiumBox;