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
        <div className="w-[100%] h-[260px]   mt-[20px] sm:mt-[45px] ">
          <div className="w-[100%]   h-[150px]  relative">
            <PremiumBox
              img={box}
              w="22%"
              h="95%"
              left="3%"
              bg="#191c33"
              yaxix="bottom"
              yaxixVal="-30px"
            />

            <PremiumBox
              img={box}
              w="22%"
              h="60%"
              yaxix="top"
              yaxixVal="20px"
              left="27%"
              bg="#71b9db"
            />

            <PremiumBox
              img={box}
              w="22%"
              h="60%"
              yaxix="top"
              yaxixVal="40px"
              left="51%"
              bg="#8b0039"
            />

            <PremiumBox
              img={box}
              w="22%"
              h="80%"
              yaxix="top"
              yaxixVal="55px"
              left="75%"
              bg="#f3aa8d"
            />

            {/* --------------------------- */}

            <PremiumBox
              img={box}
              w="22%"
              h="40%"
              yaxix="bottom"
              yaxixVal="-95px"
              left="3%"
              bg="#002d44"
            />

            <PremiumBox
              img={box}
              w="22%"
              h="70%"
              yaxix="bottom"
              yaxixVal="-72px"
              left="27%"
              bg="#e1e7eb"
            />

            <PremiumBox
              img={box}
              w="22%"
              h="70%"
              yaxix="bottom"
              yaxixVal="-92px"
              left="51%"
              bg="#f5f5f5"
            />

            <PremiumBox
              img={box}
              w="22%"
              h="40%"
              yaxix="bottom"
              yaxixVal="-90px"
              left="75%"
              bg="#7b5a34"
            />

            {/*<div className="w-[200px] border"></div>
          <div className="w-[200px] border"></div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePremium;
