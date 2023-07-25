import React from "react";
import idea from "../imgs/Idea.png";
import { useMediaQuery } from "react-responsive";

const HomeFAQ = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="w-[100%] mt-[50px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px] ">
          <div className="w-[38%] h-[1px]  bg-[#696262] mr-3"></div>
          <h2
            className="sm:text-2xl text-[16px] font-[600] "
            style={{ fontFamily: "Poppins" }}
          >
            FAQ'S
          </h2>
          <div className="w-[38%]  h-[1px]  bg-[#696262] ml-3"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          style={{ fontFamily: "Roboto", lineHeight: "24px" }}
        >
          we strive to provide superior services and solutions that surpass your
          expectations. Let us find the ideal packaging solution for your
          project.
        </p>
      </div>

      <div
        className="w-[100%] flex justify-center mt-[45px]
      "
      >
        <div className="w-[70%] flex justify-around">
          <div className="w-[50%]">
            <div className="w-[100%] flex items-center">
              {isDesktopOrLaptop && <img src={idea} alt="" />}
              <div className="ml-2">
                <h2
                  className="sm:text-[25px] text-[15px]  font-medium"
                  style={{ fontFamily: "Roboto" }}
                >
                  Can I get Wholesale price?
                </h2>
                <p
                  className="sm:text-[20px] text-[12px] w-[90%] font-[400] text-[#605B5B]"
                  style={{ fontFamily: "Roboto", lineHeight: "24px" }}
                >
                  we strive to provide superior services and solutions
                </p>
              </div>
            </div>

            <div className="w-[100%] flex items-center mt-[30px]">
              {isDesktopOrLaptop && <img src={idea} alt="" />}
              <div className="ml-2">
                <h2
                  className="sm:text-[25px] text-[15px] font-medium"
                  style={{ fontFamily: "Roboto" }}
                >
                  Can I get Wholesale price?
                </h2>
                <p
                  className="sm:text-[20px] text-[12px] w-[90%] font-[400] text-[#605B5B]"
                  style={{ fontFamily: "Roboto", lineHeight: "24px" }}
                >
                  we strive to provide superior services and solutions
                </p>
              </div>
            </div>

            <div className="w-[100%] flex items-center mt-[30px]">
              {isDesktopOrLaptop && <img src={idea} alt="" />}
              <div className="ml-2">
                <h2
                  className="sm:text-[25px] text-[15px] font-medium"
                  style={{ fontFamily: "Roboto" }}
                >
                  Can I get Wholesale price?
                </h2>
                <p
                  className="sm:text-[20px] text-[12px] w-[90%] font-[400] text-[#605B5B]"
                  style={{ fontFamily: "Roboto", lineHeight: "24px" }}
                >
                  we strive to provide superior services and solutions
                </p>
              </div>
            </div>

            <div className="w-[100%] flex items-center mt-[30px]">
              {isDesktopOrLaptop && <img src={idea} alt="" />}
              <div className="ml-2">
                <h2
                  className="sm:text-[25px] text-[15px] font-medium"
                  style={{ fontFamily: "Roboto" }}
                >
                  Can I get Wholesale price?
                </h2>
                <p
                  className="sm:text-[20px] text-[12px] w-[90%] font-[400] text-[#605B5B]"
                  style={{ fontFamily: "Roboto", lineHeight: "24px" }}
                >
                  we strive to provide superior services and solutions
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%]  flex flex-col items-end ">
            <div className="sm:w-[85%] w-[100%] flex items-center ">
              {isDesktopOrLaptop && <img src={idea} alt="" />}
              <div className="ml-2">
                <h2
                  className="sm:text-[25px] text-[15px] font-medium"
                  style={{ fontFamily: "Roboto" }}
                >
                  Can I get Wholesale price?
                </h2>
                <p
                  className="sm:text-[20px] text-[12px] w-[95%] font-[400] text-[#605B5B]"
                  style={{ fontFamily: "Roboto", lineHeight: "24px" }}
                >
                  we strive to provide superior services and solutions
                </p>
              </div>
            </div>

            <div className="sm:w-[85%] w-[100%] flex items-center mt-[30px]">
              {isDesktopOrLaptop && <img src={idea} alt="" />}
              <div className="ml-2">
                <h2
                  className="sm:text-[25px] text-[15px] font-medium"
                  style={{ fontFamily: "Roboto" }}
                >
                  Can I get Wholesale price?
                </h2>
                <p
                  className="sm:text-[20px] text-[12px] w-[90%] font-[400] text-[#605B5B]"
                  style={{ fontFamily: "Roboto", lineHeight: "24px" }}
                >
                  we strive to provide superior services and solutions
                </p>
              </div>
            </div>

            <div className="sm:w-[85%] w-[100%] flex items-center mt-[30px]">
              {isDesktopOrLaptop && <img src={idea} alt="" />}
              <div className="ml-2">
                <h2
                  className="sm:text-[25px] text-[15px] font-medium"
                  style={{ fontFamily: "Roboto" }}
                >
                  Can I get Wholesale price?
                </h2>
                <p
                  className="sm:text-[20px] text-[12px] w-[90%] font-[400] text-[#605B5B]"
                  style={{ fontFamily: "Roboto", lineHeight: "24px" }}
                >
                  we strive to provide superior services and solutions
                </p>
              </div>
            </div>

            <div className="sm:w-[85%] w-[100%] flex items-center mt-[30px]">
              {isDesktopOrLaptop && <img src={idea} alt="" />}
              <div className="ml-2">
                <h2
                  className="sm:text-[25px] text-[15px] font-medium"
                  style={{ fontFamily: "Roboto" }}
                >
                  Can I get Wholesale price?
                </h2>
                <p
                  className="sm:text-[20px] text-[12px] w-[90%] font-[400] text-[#605B5B]"
                  style={{ fontFamily: "Roboto", lineHeight: "24px" }}
                >
                  we strive to provide superior services and solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
