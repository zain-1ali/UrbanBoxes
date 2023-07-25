import React from "react";
import { useMediaQuery } from "react-responsive";

const SingleCategoryDescription = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="w-[100%] mt-[70px]">
      <div className="w-[100%] flex justify-center sm:mt-[50px] mt-[30px]">
        <div className="w-[87%] flex justify-between">
          <div className="w-[65%] overflow-y-scroll sm:h-[432px] h-[200px]  pr-4">
            <h2
              className="font-[600] text-[16px] lg:text-[40px] md:text-[30px]"
              style={{ fontFamily: "Roboto" }}
            >
              Category Description:
            </h2>
            <p
              className="font-[400] lg:text-xl md:text-xl text-[14px] md:mt-[10px] lg:mt-[10px] mt-[5px]"
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

          <div className="lg:w-[35%] md:w-[45%] w-[42%] sm:h-[432px] h-[200px] rounded-lg  flex flex-col justify-between items-center">
            {/* bg-[#EBFCF0] */}
            <div className="w-[90%]  h-[62px] md:h-[135px] lg:h-[135px] flex justify-between ">
              <div className="w-[47%] h-[100%]  rounded-lg md:rounded-2xl lg:rounded-2xl bg-[#EBFCF0]"></div>

              <div className="w-[47%] h-[100%]  rounded-lg md:rounded-2xl lg:rounded-2xl bg-[#EBFCF0]"></div>
            </div>
            <div className="w-[90%]  h-[62px] md:h-[135px] lg:h-[135px] rounded-lg md:rounded-2xl lg:rounded-2xl bg-[#EBFCF0]"></div>

            <div className="w-[90%]  h-[62px] md:h-[135px] lg:h-[135px] flex justify-between">
              <div className="w-[47%] h-[100%]  rounded-lg md:rounded-2xl lg:rounded-2xl bg-[#EBFCF0]"></div>

              <div className="w-[47%] h-[100%]  rounded-lg md:rounded-2xl lg:rounded-2xl bg-[#EBFCF0]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCategoryDescription;
