import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import user from "../../imgs/user.png";
import { RiDoubleQuotesL } from "react-icons/ri";

const Review = ({ reviews }) => {
  const renderHTML = () => {
    return { __html: longDesc };
  };

  const splideOptions = {
    perPage: 1,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "2rem",
    pagination: true,
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
    <div className="w-[100%] mt-[50px] flex justify-center items-center flex-col ">
      <div
        className="w-[85%] flex justify-center items-center text-center font-[600] text-[40px] text-[#449F5A]"
        style={{ fontFamily: "Poppins" }}
      >
        check out how much setisfied our clients by us!
      </div>
      <div className="w-[100%] flex justify-center sm:mt-[40px] mt-[40px]">
        <div
          className="w-[40%]"
          // style={
          //   reviews?.length === 1
          //     ? { width: "40%" }
          //     : reviews?.length === 2
          //     ? { width: "80%" }
          //     : reviews?.length === 3
          //     ? { width: "90%" }
          //     : { width: "90%" }
          // }
        >
          <Splide options={splideOptions}>
            {reviews?.map((elm, i) => {
              return (
                <SplideSlide key={i}>
                  <div className="w-[300px] h-[350px] rounded-[19px] bg-[#449F5A] object-cover flex items-center  flex-col  ml-3 ">
                    <div className="h-[120px] w-[120px] rounded-full  shadow-xl  bg-[black] mt-3">
                      <img
                        src={user}
                        alt=""
                        className="h-[100%] w-[100%] object-cover"
                      />
                    </div>
                    <h2
                      style={{ fontFamily: "Poppins" }}
                      className="font-[600] sm:text-[16px] text-[9px] text-white mt-2"
                    >
                      User Name
                    </h2>

                    <RiDoubleQuotesL className="text-3xl text-white mt-2" />

                    <p
                      style={{ fontFamily: "Poppins" }}
                      className="text-white text-center"
                    >
                      {elm?.review}
                    </p>
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

export default Review;
