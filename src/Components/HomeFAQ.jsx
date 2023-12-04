import React from "react";
import idea from "../imgs/Idea.png";
import { useMediaQuery } from "react-responsive";

const HomeFAQ = ({ faqDesc, faqs, isHome }) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  const renderHTML = (string) => {
    return { __html: string };
  };
  let faqsLength = faqs?.length;

  return (
    <div className="w-[100%] mt-[50px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px] ">
          <div className="w-[38%] h-[1px]  bg-[#696262] mr-3"></div>
          <h2
            className="sm:text-2xl text-[16px] font-[600] text-center"
            style={{ fontFamily: "Poppins" }}
          >
            {/* FAQ'S */}
            People Also Ask (FAQs)
          </h2>
          <div className="w-[38%]  h-[1px]  bg-[#696262] ml-3"></div>
        </div>

        {isHome && (
          <p
            className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
            style={{ fontFamily: "Roboto", lineHeight: "24px" }}
          >
            <div dangerouslySetInnerHTML={renderHTML(faqDesc)} />
          </p>
        )}
      </div>

      <div
        className="w-[100%]  mt-[45px] flex justify-center"
        //
      >
        <div className="w-[80%]  grid grid-cols-2 gap-x-16">
          {/* <div className="w-[50%]"> */}
          {faqs?.map((faq) => {
            return (
              <div className="w-[100%] flex items-center  mt-[30px] ml-3">
                {/* {isDesktopOrLaptop && (
                  <div className="border h-[100%] w-[100px]">
                    <img src={idea} alt="" className="" />
                  </div>
                )} */}
                <div className="ml-2  min-h-[200px]">
                  <div className="flex">
                    {isDesktopOrLaptop && (
                      <img src={idea} alt="" className="h-[50px] w-[50px]" />
                    )}
                    <h2
                      className="sm:text-[22px] text-[15px] sm:ml-2  font-medium h-[70px] overflow-y-scroll scrollbar-hide"
                      style={{ fontFamily: "Roboto", lineHeight: "34px" }}
                    >
                      {faq?.question}
                    </h2>
                  </div>

                  <p
                    className="sm:text-[18px] text-[12px] ml-[60px] w-[80%] font-[400] text-[#605B5B] max-h-[100px] h-[100%] overflow-y-scroll scrollbar-hide mt-[10px]"
                    style={{ fontFamily: "Roboto", lineHeight: "24px" }}
                  >
                    <div dangerouslySetInnerHTML={renderHTML(faq?.answer)} />
                    {/* {faq?.answer} */}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeFAQ;
