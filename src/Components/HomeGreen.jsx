import React from "react";
import world from "../imgs/world.png";

const HomeGreen = ({
  goGrenDesc,
  goGrenBoxHeding,
  goGrenBoxImg,
  goGrenBoxTxt,
  goGrenBoxImgTag,
  goGrenBtnTxt,
  goGrenBoxBtnLink,
}) => {
  const renderHTML = (string) => {
    return { __html: string };
  };
  return (
    <div className="w-[100%] mt-[50px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[38%] w-[30%]  h-[1px]  bg-[#696262] mr-2 "></div>
          <h2
            className="sm:text-2xl text-[16px] font-[600] text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Sustainable & Eco-Friendly Packaging Box Manufacturer
          </h2>
          <div className="sm:w-[38%] w-[30%]   h-[1px]  bg-[#696262] ml-2"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-lg text-[14px] text-[#2C2C2C]"
          style={{ fontFamily: "Roboto" }}
        >
          <div dangerouslySetInnerHTML={renderHTML(goGrenDesc)} />
        </p>
      </div>

      <div className="w-[100%] flex justify-center items-center">
        <div className="w-[90%]  bg-[#EAFFEF] sm:h-[500px] h-[170px] sm:rounded-[45px] rounded-[25px] flex justify-evenly mt-[40px]">
          <div className="w-[50%] h-[100%] flex  justify-center flex-col">
            <h2
              className="sm:text-[36px] text-[14px] font-[600]  "
              style={{ fontFamily: "Inter" }}
            >
              OUR MISSION - WELLNESS FOR LIFE!
            </h2>
            <p
              className="w-[100%] sm:text-[16px] sm:h-[42%] text-[8px] font-[400] sm:mt-[10px] mt-[5px] "
              style={{ fontFamily: "Inter" }}
            >
              <div dangerouslySetInnerHTML={renderHTML(goGrenBoxTxt)} />
            </p>

            <div
              className="sm:w-[184px] sm:h-[53px]  w-[95px] h-[30px] bg-[#449F5A] hover:bg-[#6AD37F] flex justify-center items-center text-white font-[600] sm:text-[20px] text-[12px] rounded-[8px] sm:mt-[40px] mt-[10px] cursor-pointer"
              style={{ fontFamily: "Inter" }}
              onClick={() => window.open(goGrenBoxBtnLink)}
            >
              {goGrenBtnTxt}
            </div>
          </div>
          <div className="w-[35%] h-[100%] flex justify-center items-center flex-col">
            {/* <div className="flex justify-between w-[458px] h-[184px]">
              <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
              <div className="w-[48%] h-[100%] rounded-[19px] bg-[#FDF3DB]"></div>
            </div> */}
            <img src={goGrenBoxImg} alt={goGrenBoxImgTag} />
            {/* <div className="flex justify-between w-[458px] h-[184px] rounded-[19px] bg-[#FDF3DB] mt-[20px]"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGreen;
