import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const HomeBrandTrust = () => {
  let therow = [1, 2, 3, 4, 5];
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };
  return (
    <div className="w-[100%] mt-[40px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[29%] w-[12%] h-[1px]  bg-[#696262] mr-2 "></div>
          <h2
            className="sm:text-2xl text-[16px] font-[600] "
            style={{ fontFamily: "Poppins" }}
          >
            Brands That Trust Urban Boxes
          </h2>
          <div className="sm:w-[29%] w-[12%]  h-[1px]  bg-[#696262] ml-2 "></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#0f0707]"
          style={{ fontFamily: "Roboto" }}
        >
          Extravagant custom packaging helps thousands of ambitious customers to
          redefine and refine their businesses and transform their packaging to
          better serve their customers.
        </p>
      </div>

      <div className="w-[100%] flex justify-center sm:mt-[70px] mt-[40px]">
        <div className="w-[87%] ">
          <Splide options={splideOptions}>
            {therow.map((elm, i) => {
              return (
                <SplideSlide key={i} className="mb-0.5">
                  <div className="w-[257px] h-[158px] rounded-[19px] bg-[#EBFCF0]"></div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default HomeBrandTrust;
