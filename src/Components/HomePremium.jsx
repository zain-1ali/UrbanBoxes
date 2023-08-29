import React from "react";
import crown from "../imgs/Crown.png";
import box from "../imgs/herobox.png";
import PremiumBox from "./PremiumBox";
import { useMediaQuery } from "react-responsive";

const HomePremium = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="w-[100%] sm:mt-[50px] mt-[30px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[38%] w-[25%] h-[1px]  bg-[#696262] mr-3"></div>
          <h2
            className="sm:text-2xl text-[16px]  font-[600] "
            style={{ fontFamily: "Poppins" }}
          >
            Premium Finishes
          </h2>
          <div className="sm:w-[38%] w-[25%]  h-[1px]  bg-[#696262] ml-3"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          style={{ fontFamily: "Roboto" }}
        >
          Our custom boxes are inclusive of everything that you require to
          package your products, ranging from small boxes to customized luxury
          packaging.
        </p>
      </div>
      {isDesktopOrLaptop ? (
        <div className="w-[100%] h-[600px]   mt-[20px] sm:mt-[45px]">
          <div className="w-[100%]   h-[340px]  relative">
            <PremiumBox
              img={box}
              w="240px"
              h="95%"
              left="140px"
              bg="#191c33"
              yaxix="bottom"
              yaxixVal="-80px"
            />

            <PremiumBox
              img={box}
              w="240px"
              h="60%"
              yaxix="top"
              yaxixVal="30px"
              left="400px"
              bg="#71b9db"
            />

            <PremiumBox
              img={box}
              w="240px"
              h="60%"
              yaxix="top"
              yaxixVal="60px"
              left="660px"
              bg="#8b0039"
            />

            <PremiumBox
              img={box}
              w="240px"
              h="80%"
              yaxix="top"
              yaxixVal="100px"
              left="920px"
              bg="#f3aa8d"
            />

            {/* --------------------------- */}

            <PremiumBox
              img={box}
              w="240px"
              h="40%"
              yaxix="bottom"
              yaxixVal="-240px"
              left="140px"
              bg="#002d44"
            />

            <PremiumBox
              img={box}
              w="240px"
              h="70%"
              yaxix="bottom"
              yaxixVal="-160px"
              left="400px"
              bg="#e1e7eb"
            />

            <PremiumBox
              img={box}
              w="240px"
              h="70%"
              yaxix="bottom"
              yaxixVal="-190px"
              left="660px"
              bg="#f5f5f5"
            />

            <PremiumBox
              img={box}
              w="240px"
              h="40%"
              yaxix="bottom"
              yaxixVal="-190px"
              left="922px"
              bg="#7b5a34"
            />

            {/*<div className="w-[200px] border"></div>
          <div className="w-[200px] border"></div> */}
          </div>
        </div>
      ) : (
        <div className="w-[100%] flex justify-center mt-[20px] sm:mt-[45px]">
          <div className="sm:w-[87%] w-[94%] ">
            <div className="w-[92%] flex justify-end">
              <img src={crown} alt="crown" className="mb-[-8px]" />
            </div>
            <div className="w-[100%]  border-[#EFCE6F] sm:h-[500px] h-[170px]  sm:rounded-[45px] rounded-[25px]  border-[4px] flex justify-evenly ">
              <div className="w-[50%] h-[100%] flex  justify-center flex-col">
                <h2
                  className="sm:text-[36px] text-[14px] sm:font-[600] font-[600] "
                  style={{ fontFamily: "Inter" }}
                >
                  Luxury Finishes
                </h2>
                <p
                  className="w-[95%] sm:text-[20px] text-[8px] font-[400] sm:mt-[10px] mt-[5px]"
                  style={{ fontFamily: "Inter" }}
                >
                  At Urban Boxes we aim to explore the goodness of nature with
                  innovation. We are dedicated to play our role in building a
                  happy & healthy community.
                </p>

                <div
                  className="sm:w-[184px] sm:h-[53px] w-[95px] h-[30px] bg-[#EFCE6F] hover:bg-[#FFD164] flex justify-center items-center text-white font-[600] sm:text-[20px] text-[10px] rounded-[8px] sm:mt-[60px] mt-[10px] cursor-pointer"
                  style={{ fontFamily: "Inter" }}
                >
                  View Collection
                </div>
              </div>
              <div className="w-[39%] h-[100%] flex justify-center items-center flex-col">
                <div className="flex justify-between sm:w-[458px] w-[130px] sm:h-[184px] h-[65px] ">
                  <div className="w-[48%] h-[100%] rounded-[15px] sm:rounded-[19px] bg-[#FDF3DB]"></div>
                  <div className="w-[48%] h-[100%] rounded-[15px] sm:rounded-[19px] bg-[#FDF3DB]"></div>
                </div>
                <div className="flex justify-between w-[130px] h-[65px] sm:w-[458px] sm:h-[184px] sm:rounded-[19px] rounded-[15px] bg-[#FDF3DB] sm:mt-[20px] mt-[10px]"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePremium;
