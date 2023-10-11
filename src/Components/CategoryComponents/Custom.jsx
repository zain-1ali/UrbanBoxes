import React from "react";
import box from "../../imgs/herobox.png";
import { useMediaQuery } from "react-responsive";
import { CiBoxes } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Custom = ({ heading, bgClr, paragraph, path, imgUrl, imgTag }) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  let navigate = useNavigate();
  return (
    <div className="lg:mt-[50px] md:mt-[30px] mt-[20px] flex w-[100%] justify-center">
      <div className="w-[87%] lg:h-[518px] md:h-[348px] h-[220px] rounded-[19px] shadow-md">
        <div
          className="w-[100%] lg:h-[418px] md:h-[270px] h-[170px] border rounded-[19px] bg-[#FEF3FE] flex"
          style={{ backgroundColor: bgClr }}
        >
          <div className="lg:w-[50%] md:w-[55%] w-[50%] h-[100%] flex justify-center items-center flex-col">
            <h2
              style={
                isDesktopOrLaptop
                  ? { fontFamily: "Poppins", lineHeight: "44px" }
                  : { fontFamily: "Poppins" }
              }
              className="lg:font-[600] md:font-[600] font-[600]  lg:text-[40px] md:text-[40px] text-[12px] w-[80%] lg:w-[80%] md:w-[80%] "
            >
              {heading}
            </h2>
            <p
              className="lg:font-[400] md:font-[400] font-[300] lg:text-[20px] md:text-[16px] text-[9px] lg:w-[80%] md:w-[80%] w-[80%] lg:mt-[20px] md:mt-[10px] mt-[5px]"
              style={{ fontFamily: "Roboto" }}
            >
              {paragraph}
            </p>
          </div>
          <div className="md:w-[45%] lg:w-[50%] w-[50%] h-[100%] flex justify-center items-center">
            <img
              src={imgUrl}
              alt={imgTag}
              className="lg:h-[380px] lg:w-[380px] h-[90%] w-[90%]"
            />
          </div>
        </div>
        <div className="w-[100%] flex justify-center  lg:h-[100px] md:h-[78px] h-[50px] items-center">
          <div
            className="lg:w-[300px] md:w-[220px] lg:text-lg md:text-[16px] text-[10px] lg:h-[69px] md:h-[50px] h-[30px] w-[150px] bg-[#449F5A] hover:bg-[#6AD37F]  md:rounded-[12px] lg:rounded-[12px] rounded-[6px] flex justify-center items-center text-white  lg:font-[600] font-[500] cursor-pointer "
            style={{ fontFamily: "Roboto" }}
            onClick={() =>
              navigate(path, {
                state: {
                  heading,
                  paragraph,
                  imgUrl,
                  bgClr,
                },
              })
            }
          >
            <CiBoxes className="sm:text-[35px] text-[20px] ml-1" />
            View all products
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Custom;
