import React from "react";
import Navbar from "../Components/Navbar";
import CategoryUpper from "../Components/CategoryComponents/CategoryUpper";
import Custom from "../Components/CategoryComponents/Custom";
import HomeOptions from "../Components/HomeOptions";
import Footer from "../Components/Footer";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import cosmeticboxes from "../imgs/cosmeticboxes.png";
import box from "../imgs/herobox.png";
const Category = () => {
  let navigate = useNavigate();
  return (
    <div className="w-[100%]">
      <Navbar />
      <div className="w-[100%] flex justify-center items-center">
        <div className="lg:w-[87%] w-[90%] md:w-[93%] lg:mt-[40px] mt-[20px]">
          <div className="flex items-center ml-2">
            <Link to="/">
              <h2
                style={{ fontFamily: "Roboto" }}
                className="font-[400] text-[14px] cursor-pointer"
              >
                Home
              </h2>
            </Link>
            <LiaGreaterThanSolid className="ml-1 text-sm" />
            <h2
              style={{ fontFamily: "Roboto" }}
              className="font-[400] text-[14px] ml-1 cursor-pointer text-[#449F5A]"
            >
              Category
            </h2>
          </div>
        </div>
      </div>

      <CategoryUpper
        heading="All Categories"
        paragraph="Our custom boxes are inclusive of everything that you require to
              package your products, ranging from small boxes to customized
              luxury packaging."
        imgUrl={box}
        bgClr="#CDF6D8"
        smtext="18px"
      />
      <Custom
        heading="Cosmetics Packaging"
        bgClr="#FEF3FE"
        paragraph="Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging."
        path="/singlecategory/Cosmetics"
        imgUrl={cosmeticboxes}
      />
      <Custom
        heading="Eco Friendly Packaging"
        bgClr="#E8FFB6"
        paragraph="Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging."
        path="/singlecategory/EcoFriendly"
        imgUrl={box}
      />
      <Custom
        heading="Special Products"
        bgClr="#E4EFFF"
        paragraph="Our custom boxes are inclusive of everything that you require to package your products, ranging from small boxes to customized luxury packaging."
        path="/singlecategory/SpecialProduct"
        imgUrl={box}
      />
      <HomeOptions />
      <Footer />
    </div>
  );
};

export default Category;
