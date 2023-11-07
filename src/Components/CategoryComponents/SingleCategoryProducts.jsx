import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsByCategoryId } from "../../redux/ApiSlice";
import { useDispatch, useSelector } from "react-redux";

const SingleCategoryProducts = ({ id }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let Products = useSelector((state) => state.ApiSlice.Products?.data);

  console.log(Products);

  // let [Products, setProducts] = useState([]);
  let baseUrl = import.meta.env.VITE_BASE_URL;
  // useEffect(() => {
  //   dispatch(ProductsByCategoryId);
  // }, []);

  console.log(Products);

  let reduceText = (text) => {
    let theText = text?.slice(0, 126);
    return theText;
  };
  const renderHTML = (string) => {
    return { __html: string };
  };
  return (
    <div className="lg:mt-[50px] md:mt-[40px] mt-[25px] w-[100%] flex flex-col items-center">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="lg:w-[32%] md:w-[30%] w-[25%]  h-[1px]  bg-[#696262] mr-2 "></div>
          <h2
            className={`lg:text-2xl md:text-lg text-sm text-center font-[600] `}
            style={{ fontFamily: "Poppins" }}
          >
            Single Category
          </h2>
          <div className="lg:w-[32%] md:w-[30%] w-[25%]   h-[1px]  bg-[#696262] ml-2"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          style={{ fontFamily: "Roboto" }}
        >
          <div
            dangerouslySetInnerHTML={renderHTML(Products?.singleCategoryDesc)}
          />
        </p>
      </div>
      <div className="lg:w-[85%] w-[85%] md:w-[87%] grid sm:grid-cols-3 grid-cols-1 gap-4 ">
        {/* flex justify-around md:justify-between flex-wrap */}
        {Products?.products?.map((elm, i) => {
          return (
            <div
              className="lg:w-[337px] lg:h-[415px] md:w-[337px] md:h-[415px] w-[300px] h-[400px] rounded-[19px] shadow-md mt-[35px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
              onClick={() => navigate(`/singleproduct/${elm?.id}`)}
              key={i}
            >
              <div className="lg:h-[279px] md:h-[279px] h-[250px] rounded-[19px] bg-[#FEF3FE] flex justify-center items-center">
                <img
                  src={
                    elm?.images[0]?.image
                      ? elm?.images[0]?.image
                      : "https://placehold.co/200x200"
                  }
                  alt=""
                  className="h-[200px] w-[200px]"
                />
              </div>
              <div className="w-[100%] flex justify-center">
                <div className="w-[85%] mt-3">
                  <h2
                    className="font-[500] text-[24px]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    {elm?.name}
                  </h2>
                  <p
                    className="font-[400] text-[13px]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    {/* A collapsible version of a magnetic lid box where the tray
                    is glued to the base and the lid has magnets to securely
                    close the box. */}
                    {elm?.details[0]?.description?.length <= 125
                      ? elm?.details[0]?.description
                      : reduceText(elm?.details[0]?.description)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div
          className="lg:w-[337px] lg:h-[415px] md:w-[337px] md:h-[415px] w-[300px] h-[400px] rounded-[19px] shadow-md mt-[35px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          onClick={() =>
            navigate("/singleproduct/SingleCategory/SingleProduct")
          }
        >
          <div className="lg:h-[279px] md:h-[279px] h-[250px] rounded-[19px] bg-[#FEF3FE]"></div>
          <div className="w-[100%] flex justify-center">
            <div className="w-[85%] mt-3">
              <h2
                className="font-[500] text-[24px]"
                style={{ fontFamily: "Roboto" }}
              >
                Lipsticks Boxes
              </h2>
              <p
                className="font-[400] text-[13px]"
                style={{ fontFamily: "Roboto" }}
              >
                A collapsible version of a magnetic lid box where the tray is
                glued to the base and the lid has magnets to securely close the
                box.
              </p>
            </div>
          </div>
        </div> */}
        {/* <div
          className="lg:w-[337px] lg:h-[415px] md:w-[337px] md:h-[415px] w-[300px] h-[400px] rounded-[19px] shadow-md mt-[35px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          onClick={() =>
            navigate("/singleproduct/SingleCategory/SingleProduct")
          }
        >
          <div className="lg:h-[279px] md:h-[279px] h-[250px] rounded-[19px] bg-[#FEF3FE]"></div>
          <div className="w-[100%] flex justify-center">
            <div className="w-[85%] mt-3">
              <h2
                className="font-[500] text-[24px]"
                style={{ fontFamily: "Roboto" }}
              >
                Lipsticks Boxes
              </h2>
              <p
                className="font-[400] text-[13px]"
                style={{ fontFamily: "Roboto" }}
              >
                A collapsible version of a magnetic lid box where the tray is
                glued to the base and the lid has magnets to securely close the
                box.
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:w-[337px] lg:h-[415px] md:w-[337px] md:h-[415px] w-[300px] h-[400px] rounded-[19px] shadow-md mt-[35px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          onClick={() =>
            navigate("/singleproduct/SingleCategory/SingleProduct")
          }
        >
          <div className="lg:h-[279px] md:h-[279px] h-[250px] rounded-[19px] bg-[#FEF3FE]"></div>
          <div className="w-[100%] flex justify-center">
            <div className="w-[85%] mt-3">
              <h2
                className="font-[500] text-[24px]"
                style={{ fontFamily: "Roboto" }}
              >
                Lipsticks Boxes
              </h2>
              <p
                className="font-[400] text-[13px]"
                style={{ fontFamily: "Roboto" }}
              >
                A collapsible version of a magnetic lid box where the tray is
                glued to the base and the lid has magnets to securely close the
                box.
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:w-[337px] lg:h-[415px] md:w-[337px] md:h-[415px] w-[300px] h-[400px] rounded-[19px] shadow-md mt-[35px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          onClick={() =>
            navigate("/singleproduct/SingleCategory/SingleProduct")
          }
        >
          <div className="lg:h-[279px] md:h-[279px] h-[250px] rounded-[19px] bg-[#FEF3FE]"></div>
          <div className="w-[100%] flex justify-center">
            <div className="w-[85%] mt-3">
              <h2
                className="font-[500] text-[24px]"
                style={{ fontFamily: "Roboto" }}
              >
                Lipsticks Boxes
              </h2>
              <p
                className="font-[400] text-[13px]"
                style={{ fontFamily: "Roboto" }}
              >
                A collapsible version of a magnetic lid box where the tray is
                glued to the base and the lid has magnets to securely close the
                box.
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:w-[337px] lg:h-[415px] md:w-[337px] md:h-[415px] w-[300px] h-[400px] rounded-[19px] shadow-md mt-[35px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          onClick={() =>
            navigate("/singleproduct/SingleCategory/SingleProduct")
          }
        >
          <div className="lg:h-[279px] md:h-[279px] h-[250px] rounded-[19px] bg-[#FEF3FE]"></div>
          <div className="w-[100%] flex justify-center">
            <div className="w-[85%] mt-3">
              <h2
                className="font-[500] text-[24px]"
                style={{ fontFamily: "Roboto" }}
              >
                Lipsticks Boxes
              </h2>
              <p
                className="font-[400] text-[13px]"
                style={{ fontFamily: "Roboto" }}
              >
                A collapsible version of a magnetic lid box where the tray is
                glued to the base and the lid has magnets to securely close the
                box.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SingleCategoryProducts;
