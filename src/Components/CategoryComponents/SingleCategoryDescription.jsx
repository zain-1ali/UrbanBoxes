import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const SingleCategoryDescription = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  let Products = useSelector((state) => state.ApiSlice.Products?.data);
  const renderHTML = (string) => {
    return { __html: string };
  };
  return (
    <div className="w-[100%] mt-[70px]">
      <div className="w-[100%] flex justify-center sm:mt-[50px] mt-[30px]">
        <div className="w-[87%] flex justify-between">
          <div className="w-[65%] overflow-y-scroll sm:h-[432px] h-[200px]  pr-4">
            {/* <h2
              className="font-[600] text-[16px] lg:text-[40px] md:text-[30px]"
              style={{ fontFamily: "Roboto" }}
            >
              Category Description:
            </h2> */}
            <p
              className="font-[400] lg:text-xl md:text-xl text-[14px] md:mt-[10px] lg:mt-[10px] mt-[5px]"
              style={{ fontFamily: "Roboto" }}
            >
              <div
                dangerouslySetInnerHTML={renderHTML(
                  Products?.category?.longDescription
                )}
              />
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
