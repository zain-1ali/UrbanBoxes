import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import CategoryUpper from "../Components/CategoryComponents/CategoryUpper";
import Custom from "../Components/CategoryComponents/Custom";
import HomeOptions from "../Components/HomeOptions";
import Footer from "../Components/Footer";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import cosmeticboxes from "../imgs/cosmeticboxes.png";
import box from "../imgs/herobox.png";
import axios from "axios";
import MobileNavbar from "../Components/MobileNavbar";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { categoryPage } from "../redux/ApiSlice";
const Category = () => {
  let navigate = useNavigate();

  // let [category, setCategory] = useState([]);
  // let baseUrl = import.meta.env.VITE_BASE_URL;
  // useEffect(() => {
  //   let getcategory = async () => {
  //     let res = await axios.get(`${baseUrl}/api/getAllCategories`);
  //     setCategory(res.data.data);
  //   };
  //   getcategory();
  // }, []);

  // console.log(category);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });

  let dispatch = useDispatch();
  let categoryData = useSelector((state) => state.ApiSlice.categoryData);
  console.log(categoryData);
  useEffect(() => {
    dispatch(categoryPage());
  }, []);

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
      <div className="w-[100%] flex justify-center items-center sm:mt-0 mt-3">
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
        heading={categoryData?.data?.banner?.heading}
        paragraph={categoryData?.data?.banner?.text}
        imgUrl={categoryData?.data?.banner?.image}
        bgClr={categoryData?.data?.banner?.color}
        imageTag={categoryData?.data?.banner?.imageTag}
        smtext="18px"
        bottomParagraph={categoryData?.data?.allCategoriesDesc}
        bottomHeading="All Categories"
      />

      {categoryData?.data?.categories?.map((elm) => {
        return (
          <Custom
            heading={elm?.name}
            bgClr={elm?.color}
            paragraph={elm?.description}
            path={`/singlecategory/${elm?.id}`}
            imgUrl={elm?.image}
            imgTag={elm?.imageTag}
          />
        );
      })}

      {/* <Custom
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
      /> */}
      <HomeOptions bg="#EAFFEF" btnClr="#449F5A" />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default Category;
