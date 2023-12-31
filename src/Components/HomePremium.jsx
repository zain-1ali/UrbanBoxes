import React from "react";
import crown from "../imgs/Crown.png";
import box from "../imgs/herobox.png";
import PremiumBox from "./PremiumBox";
import { useMediaQuery } from "react-responsive";

const HomePremium = ({ premImgDesc, premiumImages }) => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  const renderHTML = (string) => {
    return { __html: string };
  };

  console.log(premiumImages);

  let boxLayoutMobile = [
    {
      w: "22%",
      h: "95%",
      left: "3%",
      bg: "#191c33",
      yaxix: "bottom",
      yaxixVal: "-30px",
    },
    {
      w: "22%",
      h: "60%",
      yaxix: "top",
      yaxixVal: "20px",
      left: "27%",
      bg: "#71b9db",
    },
    {
      w: "22%",
      h: "60%",
      yaxix: "top",
      yaxixVal: "40px",
      left: "51%",
      bg: "#8b0039",
    },
    {
      w: "22%",
      h: "80%",
      yaxix: "top",
      yaxixVal: "55px",
      left: "75%",
      bg: "#f3aa8d",
    },
    {
      w: "22%",
      h: "40%",
      yaxix: "bottom",
      yaxixVal: "-95px",
      left: "3%",
      bg: "#002d44",
    },
    {
      w: "22%",
      h: "70%",
      yaxix: "bottom",
      yaxixVal: "-72px",
      left: "27%",
      bg: "#e1e7eb",
    },
    {
      w: "22%",
      h: "70%",
      yaxix: "bottom",
      yaxixVal: "-92px",
      left: "51%",
      bg: "#f5f5f5",
    },
    {
      w: "22%",
      h: "40%",
      yaxix: "bottom",
      yaxixVal: "-90px",
      left: "75%",
      bg: "#7b5a34",
    },
  ];

  let boxLayoutDesktop = [
    {
      w: "240px",
      h: "95%",
      left: "11%",
      bg: "#191c33",
      yaxix: "bottom",
      yaxixVal: "-80px",
    },
    {
      w: "240px",
      h: "60%",
      yaxix: "top",
      yaxixVal: "30px",
      left: "31%",
      bg: "#71b9db",
    },
    {
      w: "240px",
      h: "60%",
      yaxix: "top",
      yaxixVal: "60px",
      left: "51%",
      bg: "#8b0039",
    },
    {
      w: "240px",
      h: "80%",
      yaxix: "top",
      yaxixVal: "100px",
      left: "71%",
      bg: "#f3aa8d",
    },
    {
      w: "240px",
      h: "40%",
      yaxix: "bottom",
      yaxixVal: "-240px",
      left: "11%",
      bg: "#002d44",
    },
    {
      w: "240px",
      h: "70%",
      yaxix: "bottom",
      yaxixVal: "-160px",
      left: "31%",
      bg: "#e1e7eb",
    },
    {
      w: "240px",
      h: "70%",
      yaxix: "bottom",
      yaxixVal: "-190px",
      left: "51%",
      bg: "#f5f5f5",
    },
    {
      w: "240px",
      h: "40%",
      yaxix: "bottom",
      yaxixVal: "-190px",
      left: "71%",
      bg: "#7b5a34",
    },
  ];

  return (
    <div className="w-[100%] sm:mt-[50px] mt-[30px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[38%] w-[25%] h-[1px]  bg-[#696262] mr-3"></div>
          <h2
            className="sm:text-2xl text-[16px]  font-[600] text-center "
            style={{ fontFamily: "Poppins" }}
          >
            {/* Premium Finishes */}
            Premium Finishes at Ryt Box Printing Company
          </h2>
          <div className="sm:w-[38%] w-[25%]  h-[1px]  bg-[#696262] ml-3"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-lg text-[14px] text-[#2C2C2C]"
          style={{ fontFamily: "Roboto" }}
        >
          <div dangerouslySetInnerHTML={renderHTML(premImgDesc)} />
        </p>
      </div>
      {isDesktopOrLaptop ? (
        <div className="w-[100%] h-[600px]   mt-[20px] sm:mt-[45px] flex justify-center">
          <div className="w-[96%] h-[340px] relative">
            {premiumImages?.map((elm, i) => {
              return (
                <PremiumBox
                  img={elm?.imageUrl}
                  boxLayout={boxLayoutDesktop[i]}
                  name={elm?.name}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-[100%] h-[260px]   mt-[20px] sm:mt-[45px] ">
          <div className="w-[100%]   h-[150px]  relative">
            {premiumImages?.map((elm, i) => {
              return (
                <PremiumBox
                  img={elm?.imageUrl}
                  boxLayout={boxLayoutMobile[i]}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePremium;
