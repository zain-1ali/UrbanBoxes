import React from "react";
import herobox from "../imgs/herobox.png";
import { Typewriter } from "react-simple-typewriter";
import { useMediaQuery } from "react-responsive";

const HeroSection = ({ heroData }) => {
  // , lineHeight: "70px"
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  console.log(heroData);

  let getLastTwoWords = (inputString) => {
    // Split the input string into words
    const words = inputString?.split(" ");

    // If there's only one word or no words, return the input string
    if (words?.length <= 1) {
      return [inputString];
    }

    // If there are more than two words, return the last two
    return words?.slice(-2);
  };

  let getInitialWords = (inputString) => {
    // Split the input string into words
    const words = inputString?.split(" ");

    if (words?.length >= 3) {
      let wordsLength = words?.length - 2;
      let initialWords = words.slice(0, wordsLength);
      return initialWords?.join(" ");
    } else {
      return null;
    }
  };

  return (
    <div
      className="sm:h-[558px] sm:mt-0  h-[300px] border w-[100%] flex"
      style={{ backgroundColor: heroData?.color ? heroData?.color : "#F3FFF6" }}
    >
      <div
        className=" sm:w-[57%] w-[55%]  flex flex-col justify-center items-end 
      "
      >
        {/* <div className="w-[100%] flex justify-end"> */}
        <h2
          className="sm:text-[44px] text-[24px] font-bold  sm:w-[651px] w-[96%] "
          style={
            isDesktopOrLaptop
              ? { fontFamily: "Poppins", lineHeight: "70px" }
              : { fontFamily: "Poppins" }
          }
        >
          {getInitialWords(heroData?.heading)}
          {/* Sustainable & Eco-friendly Box Printing Company */}
        </h2>

        <h2
          className="sm:text-[44px] text-[20px] font-bold  w-[96%] sm:w-[651px]"
          style={
            isDesktopOrLaptop
              ? { fontFamily: "Poppins", lineHeight: "70px" }
              : { fontFamily: "Poppins" }
          }
        >
          <Typewriter
            words={getLastTwoWords(heroData?.heading)}
            // words={[
            //   "No Minimum",
            //   "Personalized Styling",
            //   "Premium & Luxury Finishes",
            //   "Made in the USA",
            //   "FSC Approved Sourcing",
            // ]}
            loop={10}
            cursor
            cursorBlinking={true}
            // cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* </div> */}
        <p
          className="  sm:w-[651px] w-[96%] sm:text-2xl text-sm sm:mt-5 mt-2 text-[#1B1C1B]"
          style={{ fontFamily: "Roboto" }}
        >
          {heroData?.text}
        </p>
        <div className="sm:w-[651px] flex sm:mt-6 mt-[14px] w-[96%]">
          <div
            className="hover:bg-[#449F5A] hover:text-white sm:w-[201px] sm:h-[51px] w-[85px] h-[30px]  border rounded-md mr-3 border-black flex justify-center items-center cursor-pointer sm:text-[16px] text-[9px] font-[600] text-[#333434]"
            style={{ fontFamily: "Roboto" }}
            onClick={() => window.open(Btn1link)}
          >
            {/* Chose Packaging */}
            {heroData?.Btn1txt}
          </div>

          <div
            className="sm:w-[201px] sm:h-[51px] w-[85px] h-[30px] border rounded-md ml-3 bg-black hover:bg-[#333333]  text-white flex justify-center items-center cursor-pointer sm:text-[16px] text-[9px] sm:font-[600] font-[500]"
            style={{ fontFamily: "Roboto" }}
            onClick={() => window.open(Btn2link)}
          >
            {/* Order Packaging
             */}
            {heroData?.Btn2txt}
          </div>
        </div>
      </div>

      <div className=" w-[45%] flex justify-center items-center  ">
        <img
          src={heroData?.image}
          alt={heroData?.imageTag}
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 max-h-[90%] max-w-[90%]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
