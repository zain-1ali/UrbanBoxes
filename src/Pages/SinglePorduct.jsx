import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { LiaGreaterThanSolid } from "react-icons/lia";
import ProductMailBox from "../Components/ProductsComponents/ProductMailBox";
import ProductServices from "../Components/ProductsComponents/ProductServices";
import ProductSepecification from "../Components/ProductsComponents/ProductProperties";
import RelatedProducts from "../Components/ProductsComponents/RelatedProducts";
import HomeOptions from "../Components/HomeOptions";
import Footer from "../Components/Footer";
import axios from "axios";
import MailboxSkel from "../Components/Skeletons/MailboxSkel";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";
import Branding from "../Components/Branding";
import { getProductById } from "../redux/ApiSlice";
import { useDispatch, useSelector } from "react-redux";

const SinglePorduct = () => {
  const params = useParams();
  const category = params.categoryid;
  const product = params.productid;
  let navigate = useNavigate();
  let location = useLocation();
  let dispatch = useDispatch();
  let { pathname } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  let [Product, setProduct] = useState({});
  let [Products, setProducts] = useState([]);

  console.log(Product?.details);
  let singleProduct = useSelector(
    (state) => state.ApiSlice.singleProduct?.data
  );

  console.log(singleProduct);

  let baseUrl = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    // let getSingleProduct = async () => {
    //   let res = await axios
    //     .get(`${baseUrl}/api/getProductById/${product}`)
    //     .then(async (resp) => {
    //       setProduct(resp.data.data);
    //       let thedata = await axios.get(
    //         `${baseUrl}/api/getProductsByCategoryId/${resp?.data.data.category_id}`
    //       );
    //       setProducts(thedata.data.data);
    //     });
    // };

    // getSingleProduct();
    dispatch(getProductById(product));
  }, []);

  // useEffect(() => {
  //   let getProducts = async () => {
  //     let res = await axios.get(
  //       `${baseUrl}/api/getProductsByCategoryId/${Product?.category_id}`
  //     );
  //     setProducts(res.data.data);
  //   };

  //   getProducts();
  // }, [Product?.category_id]);

  console.log(Product?.images);
  console.log(Product);
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
      {/* <div className="w-[100%] flex justify-center items-center">
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
      </div> */}

      {singleProduct?.product ? <ProductMailBox /> : <MailboxSkel />}
      {/* <MailboxSkel /> */}
      <ProductServices />
      <Branding
        boxes={singleProduct?.boxes}
        brandDesc={singleProduct?.productPage?.featureBoxDesc}
        brandHeading={singleProduct?.boxes?.sectionName}
        brandCircle={singleProduct?.productPage?.featureBoxCircleText}
      />
      <ProductSepecification details={Product?.details} />
      {/* <RelatedProducts relatedProducts={Products} /> */}
      <HomeOptions bg="#EAFFEF" btnClr="#449F5A" />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default SinglePorduct;
