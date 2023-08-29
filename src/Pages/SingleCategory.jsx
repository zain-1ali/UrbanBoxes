import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import { Link, useLocation, useParams } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import CategoryUpper from "../Components/CategoryComponents/CategoryUpper";
import SingleCategoryProducts from "../Components/CategoryComponents/SingleCategoryProducts";
import SingleCategoryDescription from "../Components/CategoryComponents/SingleCategoryDescription";
import HomeOptions from "../Components/HomeOptions";
import Footer from "../Components/Footer";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";

const SingleCategory = () => {
  const params = useParams();
  let location = useLocation();
  let heading = location.state.heading;
  let paragraph = location.state.paragraph;
  let imgUrl = location.state.imgUrl;
  let bgClr = location.state.bgClr;
  const uid = params.categoryid;

  // let location = useLocation();
  let { pathname } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="w-[100%]">
      {isDesktopOrLaptop ? <Navbar /> : <MobileNavbar />}
      <div className="w-[100%] flex justify-center items-center">
        <div className="lg:w-[87%] w-[90%] md:w-[93%] lg:mt-[40px] mt-[20px]">
          <div className="flex items-center ml-2">
            <Link to="/">
              <h2
                style={{ fontFamily: "Roboto" }}
                className="font-[400] text-[14px] cursor-pointer text-[#7E7C7C]"
              >
                Home
              </h2>
            </Link>
            <LiaGreaterThanSolid className="ml-1 text-sm text-[#7E7C7C]" />
            <Link to="/category">
              <h2
                style={{ fontFamily: "Roboto" }}
                className="font-[400] text-[14px] ml-1 cursor-pointer text-[#7E7C7C]"
              >
                Category
              </h2>
            </Link>
            <LiaGreaterThanSolid className="ml-1 text-sm text-[#7E7C7C]" />
            <h2
              style={{ fontFamily: "Roboto" }}
              className="font-[400] text-[14px] ml-1 cursor-pointer text-[#449F5A]"
            >
              Single Category
            </h2>
          </div>
        </div>
      </div>
      <CategoryUpper
        heading={heading}
        paragraph={paragraph}
        imgUrl={imgUrl}
        bgClr={bgClr}
        smtext="12px"
      />
      <SingleCategoryProducts id={uid} />
      <SingleCategoryDescription />
      <HomeOptions bg="#EAFFEF" btnClr="#449F5A" />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default SingleCategory;
