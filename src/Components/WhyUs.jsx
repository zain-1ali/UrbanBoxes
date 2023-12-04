import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const WhyUs = ({ whyUrbnBoxTxt, whyUrbnImgTag, whyUrbnImg, whyUrbnDesc }) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  const data = useSelector((state) => state.siteDetails.data);
  const renderHTML = (string) => {
    return { __html: string };
  };
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
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-lg text-[14px] text-[#2C2C2C]"
          style={{ fontFamily: "Roboto" }}
        >
          <div dangerouslySetInnerHTML={renderHTML(whyUrbnDesc)} />
        </p>
      </div>

      <div className="w-[100%] flex justify-center sm:mt-[50px] mt-[30px]">
        <div className="w-[87%] flex justify-between">
          <div className="w-[50%] overflow-y-scroll sm:h-[432px] h-[200px] pr-4">
            <p
              className="font-[400] sm:text-lg text-[14px] "
              style={{ fontFamily: "Roboto" }}
            >
              <div dangerouslySetInnerHTML={renderHTML(whyUrbnBoxTxt)} />
            </p>
          </div>

          <div className="w-[48%] sm:h-[432px] h-[200px] rounded-lg bg-[#EBFCF0]">
            <img src={whyUrbnImg} alt={whyUrbnImgTag} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
