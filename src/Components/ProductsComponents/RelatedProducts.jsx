import React from "react";

const RelatedProducts = () => {
  return (
    <div className="w-[100%] mt-[50px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[100%] flex flex-col items-center">
          <div className="w-[95%] flex justify-center items-center mt-[30px]">
            <div className="sm:w-[35%] w-[22%] h-[1px]  bg-[#696262] mr-2"></div>
            <h2
              className="sm:text-2xl text-[16px] sm:font-[600] font-[500]"
              style={{ fontFamily: "Poppins" }}
            >
              {/* {isDesktopOrLaptop
              ? "Get Discounted Price Quickly"
              : "Get Discounted Price"} */}
              Related Products
            </h2>
            <div className="sm:w-[35%] w-[22%] h-[1px]  bg-[#696262] ml-2 "></div>
          </div>

          <p
            className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
            // w-[70%] text-center mt-[25px] font-[400] text-xl text-[#2C2C2C]
            style={{ fontFamily: "Roboto" }}
          >
            we strive to provide superior services and solutions that surpass
            your expectations. Let us find the ideal packaging solution for your
            project.
          </p>
        </div>
        <div className="w-[87%] flex justify-between mt-[30px] ">
          <div className="h-[293px] w-[23%]  rounded-[19px] shadow-lg">
            <div className="w-[100%] h-[224px] rounded-[19px] bg-[#CDF6D8] shadow-md"></div>
            <div className="w-[100%] h-[69px] flex justify-center items-center">
              <p
                className="font-[500] text-[20px]"
                style={{ fontFamily: "Roboto" }}
              >
                Rigid Boxes
              </p>
            </div>
          </div>

          <div className="h-[293px] w-[23%]  rounded-[19px] shadow-lg">
            <div className="w-[100%] h-[224px] rounded-[19px] bg-[#CDF6D8] shadow-md"></div>
            <div className="w-[100%] h-[69px] flex justify-center items-center">
              <p
                className="font-[500] text-[20px]"
                style={{ fontFamily: "Roboto" }}
              >
                Rigid Boxes
              </p>
            </div>
          </div>

          <div className="h-[293px] w-[23%]  rounded-[19px] shadow-lg">
            <div className="w-[100%] h-[224px] rounded-[19px] bg-[#CDF6D8] shadow-md"></div>
            <div className="w-[100%] h-[69px] flex justify-center items-center">
              <p
                className="font-[500] text-[20px]"
                style={{ fontFamily: "Roboto" }}
              >
                Custom Cosmetic Boxes
              </p>
            </div>
          </div>

          <div className="h-[293px] w-[23%]  rounded-[19px] shadow-lg">
            <div className="w-[100%] h-[224px] rounded-[19px] bg-[#CDF6D8] shadow-md"></div>
            <div className="w-[100%] h-[69px] flex justify-center items-center">
              <p
                className="font-[500] text-[20px]"
                style={{ fontFamily: "Roboto" }}
              >
                Custom Mailer Boxes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
