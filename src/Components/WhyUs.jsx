import React from "react";
import { useMediaQuery } from "react-responsive";

const WhyUs = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="w-[100%] mt-[40px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[35%] w-[25%] h-[1px]  bg-[#696262] mr-3"></div>
          <h2
            className="sm:text-2xl text-[16px]  font-[600] "
            style={{ fontFamily: "Poppins" }}
          >
            {/* {isDesktopOrLaptop ? "Why Urban Boxes Company?" : "Why Urban Boxes"} */}
            Why Urban Boxes
          </h2>
          <div className="sm:w-[35%] w-[25%] h-[1px]  bg-[#696262] ml-3"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          style={{ fontFamily: "Roboto" }}
        >
          Extravagant custom packaging helps thousands of ambitious customers to
          redefine and refine their businesses and transform their packaging to
          better serve their customers.
        </p>
      </div>

      <div className="w-[100%] flex justify-center sm:mt-[50px] mt-[30px]">
        <div className="w-[87%] flex justify-between">
          <div className="w-[50%] overflow-y-scroll sm:h-[432px] h-[200px] pr-4">
            <p
              className="font-[400] sm:text-xl text-[14px] "
              style={{ fontFamily: "Roboto" }}
            >
              Lorem ipsum dolor sit amet consectetur. Augue a posuere lobortis
              mattis nisl at. Bibendum pretium posuere imperdiet diam dolor
              tincidunt aliquam tellus ut. Ridiculus id blandit quis dignissim
              pharetra vel. At ut pretium duis ut non malesuada. Nisi ut
              pharetra feugiat nullam est mi consectetur vulputate dui. At enim
              sollicitudin enim tortor accumsan ornare. Et magna et senectus
              commodo. Sit venenatis non egestas arcu porta vitae. Id leo sit
              morbi sed sit nec quam massa nibh. Mi mi faucibus sem donec
              aliquam in netus sit purus. Quis auctor rutrum eget ridiculus
              egestas. Libero consectetur massa amet commodo eget.Lorem ipsum
              dolor sit amet consectetur. Augue a posuere lobortis mattis nisl
              at. Bibendum pretium posuere imperdiet diam dolor tincidunt
              aliquam tellus ut. Ridiculus id blandit quis dignissim pharetra
              vel. At ut pretium duis ut non malesuada. Nisi ut pharetra feugiat
              nullam est mi consectetur vulputate dui. At enim sollicitudin enim
              tortor accumsan ornare. Et magna et senectus commodo. Sit
              venenatis non egestas arcu porta vitae. Id leo sit morbi sed sit
              nec quam massa nibh. Mi mi faucibus sem donec aliquam in netus sit
              purus. Quis auctor rutrum eget ridiculus egestas. Libero.
            </p>
          </div>

          <div className="w-[48%] sm:h-[432px] h-[200px] rounded-lg bg-[#EBFCF0]"></div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
