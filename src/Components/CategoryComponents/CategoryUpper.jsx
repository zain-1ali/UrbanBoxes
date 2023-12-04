import React from "react";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import box from "../../imgs/herobox.png";

const CategoryUpper = ({
  heading,
  paragraph,
  imgUrl,
  bgClr,
  smtext,
  bottomParagraph,
  bottomHeading,
  imageTag,
}) => {
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="lg:w-[100%] w-[90%] md:w-[93%]">
        {/* <div className="flex items-center ml-2">
          <Link to="/">
            <h2
              style={{ fontFamily: "Roboto" }}
              className="font-[400] text-[14px] cursor-pointer"
            >
              Home
            </h2>
          </Link>
          <LiaGreaterThanSolid className="ml-1 text-sm" />
          <h2
            style={{ fontFamily: "Roboto" }}
            className="font-[400] text-[14px] ml-1 cursor-pointer text-[#449F5A]"
          >
            Category
          </h2>
        </div> */}

        <div
          className="w-[100%] sm:h-[402px] h-[150px]  flex items-center "
          style={{ backgroundColor: bgClr }}
        >
          <div className="lg:w-[50%] md:w-[55%] w-[50%] h-[90%]  flex justify-center  items-center flex-col  ">
            <h2
              style={{ fontFamily: "Poppins", lineHeight: "44px" }}
              className={`lg:font-[600] md:font-[600] font-[600]  lg:text-[40px] md:text-[40px] text-[${smtext}] w-[80%] lg:w-[80%] md:w-[80%] `}
            >
              {heading}
            </h2>
            <p
              className="lg:font-[400] md:font-[400] lg:text-[17px] max-h-[300px] overflow-y-scroll scrollbar-hide md:text-[16px] text-[9px] lg:w-[80%] md:w-[80%] w-[80%] lg:mt-[10px] md:mt-[10px] mt-[-5px]"
              style={{ fontFamily: "Roboto" }}
            >
              {paragraph}
            </p>
          </div>
          <div className="md:w-[45%] lg:w-[50%] w-[50%] h-[100%] flex justify-center items-center">
            <img
              src={imgUrl}
              alt={imageTag}
              className=" max-h-[95%] max-w-[95%] "
              // sm:h-[270px] sm:w-[270px]
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryUpper;
