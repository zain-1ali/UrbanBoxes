import React from "react";
import Navbar from "../Components/Navbar";
import { Link, useParams, useNavigate } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import ProductMailBox from "../Components/ProductsComponents/ProductMailBox";
import ProductServices from "../Components/ProductsComponents/ProductServices";
import ProductSepecification from "../Components/ProductsComponents/ProductProperties";
import RelatedProducts from "../Components/ProductsComponents/RelatedProducts";
import HomeOptions from "../Components/HomeOptions";
import Footer from "../Components/Footer";

const SinglePorduct = () => {
  const params = useParams();
  const category = params.categoryid;
  const product = params.productid;
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
            <Link to="/category">
              <h2
                style={{ fontFamily: "Roboto" }}
                className="font-[400] text-[14px] ml-1 cursor-pointer "
              >
                Category
              </h2>
            </Link>
            <LiaGreaterThanSolid className="ml-1 text-sm" />
            <h2
              style={{ fontFamily: "Roboto" }}
              className="font-[400] text-[14px] ml-1 cursor-pointer "
              onClick={() => navigate(-1)}
            >
              {category}
            </h2>
            <LiaGreaterThanSolid className="ml-1 text-sm" />

            <h2
              style={{ fontFamily: "Roboto" }}
              className="font-[400] text-[14px] ml-1 cursor-pointer text-[#449F5A]"
            >
              {product}
            </h2>
          </div>
        </div>
      </div>
      <ProductMailBox />
      <ProductServices />
      <ProductSepecification />
      <RelatedProducts />
      <HomeOptions />
      <Footer />
    </div>
  );
};

export default SinglePorduct;
