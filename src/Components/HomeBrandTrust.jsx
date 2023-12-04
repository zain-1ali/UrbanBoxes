import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const HomeBrandTrust = ({ trstBrndDesc }) => {
  let therow = [
    { img: "https://customboxeshub.com/public/uploads/1681721373.VALKEN.svg" },
    { img: "https://customboxeshub.com/public/uploads/1681721484.WALLCUR.svg" },
    { img: "https://customboxeshub.com/public/uploads/1681720407.IBM.svg" },
    { img: "https://customboxeshub.com/public/uploads/1681720430.KROM.svg" },
    {
      img: "https://customboxeshub.com/public/uploads/1681720753.OREGON_STATE.svg",
    },
    { img: "https://customboxeshub.com/public/uploads/1681721141.UNITED.svg" },
  ];
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
  const renderHTML = (string) => {
    return { __html: string };
  };
  return (
    <div className="w-[100%] mt-[40px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[29%] w-[12%] h-[1px]  bg-[#696262] mr-2 "></div>
          <h2
            className="sm:text-2xl text-[16px] font-[600] text-center"
            style={{ fontFamily: "Poppins" }}
          >
            A Few of the Many Brands That Trust Us
          </h2>
          <div className="sm:w-[29%] w-[12%]  h-[1px]  bg-[#696262] ml-2 "></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-lg text-[14px] text-[#0f0707]"
          style={{ fontFamily: "Roboto" }}
        >
          <div dangerouslySetInnerHTML={renderHTML(trstBrndDesc)} />
        </p>
      </div>

      <div className="w-[100%] flex justify-center sm:mt-[70px] mt-[40px]">
        <div className="w-[87%] ">
          <Splide options={splideOptions}>
            {therow.map((elm, i) => {
              return (
                <SplideSlide key={i} className="mb-0.5">
                  <div className="w-[257px] h-[158px] rounded-[19px] object-cover flex justify-center items-center">
                    <img src={elm?.img} alt="" />
                  </div>
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
