import React from "react";
import Navbar from "../Components/Navbar";
import MobileNavbar from "../Components/MobileNavbar";
import { useMediaQuery } from "react-responsive";
import CategoryUpper from "../Components/CategoryComponents/CategoryUpper";
import { Link } from "react-router-dom";
import box from "../imgs/herobox.png";
import StyleCategories from "../Components/ByStyle/StyleCategories";
import HomeOptions from "../Components/HomeOptions";
import Footer from "../Components/Footer";

const ByStyle = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="w-[100%]">
      {isDesktopOrLaptop ? (
        <Navbar />
      ) : (
        <>
          <MobileNavbar />
          <br />
        </>
      )}

      <CategoryUpper
        heading="By Style"
        paragraph="Elevate your brand image with customizable box style to match your vision."
        imgUrl={box}
        bgClr="#CDF6D8"
        smtext="18px"
        bottomHeading="Choose Your Boxes Styles"
        bottomParagraph="We offer a wide range of custom box styles so you may find the exact product as per your custom requirements."
      />

      <StyleCategories />
      <HomeOptions bg="#EAFFEF" btnClr="#449F5A" />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default ByStyle;
