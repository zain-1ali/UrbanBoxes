import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import MobileNavbar from "../Components/MobileNavbar";
import { useMediaQuery } from "react-responsive";
import CategoryUpper from "../Components/CategoryComponents/CategoryUpper";
import { Link } from "react-router-dom";
import box from "../imgs/herobox.png";
import StyleCategories from "../Components/ByStyle/StyleCategories";
import HomeOptions from "../Components/HomeOptions";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { byStylePage, getGallaryData } from "../redux/ApiSlice";
import { Helmet } from "react-helmet";
import ProductsModal from "../Components/ProductsModal";

const ByStyle = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  let dispatch = useDispatch();
  let byStyleData = useSelector((state) => state.ApiSlice.byStyleData);
  let gallaryData = useSelector((state) => state.ApiSlice.gallaryData);
  let seoInfo = byStyleData?.data?.seo;
  console.log(byStyleData);
  useEffect(() => {
    dispatch(byStylePage());
    dispatch(getGallaryData());
  }, []);



  console.log(gallaryData);

  return (
    <div className="w-[100%]">
      <Helmet>
        {/* Page Name Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${seoInfo?.pageName}"
            }
          `}
        </script>

        {/* Meta Title */}
        <title>{seoInfo?.metaTitle}</title>

        {/* Meta Tags */}

        <meta name="keywords" content={seoInfo?.metaTag} />

        {/* Meta Description */}
        <meta name="description" content={seoInfo?.metaDescription} />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
            ${seoInfo?.breadcrumbSchema}
          `}
        </script>
      </Helmet>
     
      {isDesktopOrLaptop ? (
        <Navbar />
      ) : (
        <>
          <MobileNavbar />
          <br />
        </>
      )}

      <CategoryUpper
        heading={byStyleData?.data?.banner?.heading}
        paragraph={byStyleData?.data?.banner?.text}
        imgUrl={byStyleData?.data?.banner?.image}
        bgClr={byStyleData?.data?.banner?.color}
        imageTag={byStyleData?.data?.banner?.imageTag}
        smtext="18px"
        bottomParagraph={byStyleData?.data?.chooseBoxStyleDesc}
        bottomHeading="Choose Your Boxes Styles"
      />

      <StyleCategories gallaryProduct={gallaryData?.data} />
      <HomeOptions bg="#EAFFEF" btnClr="#449F5A" />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default ByStyle;
