import React, { useEffect, useState } from "react";
import { CiBoxes } from "react-icons/ci";
import axios from "axios";
import box from "../imgs/herobox.png";
import { useNavigate } from "react-router-dom";

const Homeproducts = ({ insDesignDesc }) => {
  // let

  let [latestProducts, setlatestProducts] = useState([]);
  let baseUrl = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    let getLatestProducts = async () => {
      let res = await axios.get(`${baseUrl}/api/latestProduct`);
      setlatestProducts(res.data.data);
    };
    getLatestProducts();
  }, []);

  console.log(latestProducts);

  let navigate = useNavigate();

  const parser = new DOMParser();
  const inspirationalDescription = parser.parseFromString(
    insDesignDesc,
    "text/html"
  );

  const renderHTML = () => {
    return { __html: insDesignDesc };
  };

  return (
    <div className="w-[100%] sm:mt-[50px] mt-[25px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px] ">
          <div className="sm:w-[38%] w-[23%] h-[1px]  bg-[#696262] mr-2"></div>
          <h1
            className="sm:text-2xl text-[16px] sm:font-[600] font-[500] text-center "
            style={{ fontFamily: "Poppins" }}
          >
            {/* Inspirational Designs */}
            Ryt Box: Right Packaging Suppliers of Custom Boxes
          </h1>
          <div className="sm:w-[38%] w-[23%]  h-[1px]  bg-[#696262] ml-2"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#0f0707]"
          style={{ fontFamily: "Roboto" }}
        >
          {/* <div dangerouslySetInnerHTML={{ __html: inspirationalDescription }} /> */}
          <div dangerouslySetInnerHTML={renderHTML()} />

          {/* {inspirationalDescription} */}
        </p>
      </div>
      <div className="w-[100%] flex flex-col items-center">
        <div className="sm:w-[90%] w-[95%]  mt-[30px] flex sm:justify-around justify-evenly flex-wrap">
          {/* grid sm:grid-cols-4 grid-cols-2  gap-x-4 gap-y-2 */}
          {latestProducts?.map((elm) => {
            return (
              <div
                className="sm:h-[240px] sm:w-[250px] w-[160px] h-[140px] rounded-[4px] sm:mt-[20px] mt-[15px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer  relative "
                onClick={() => navigate(`/singleproduct/${elm?.id}`)}
              >
                <img
                  src={elm?.images[0]?.image ? elm?.images[0]?.image : box}
                  alt=""
                  className="h-[100%] w-[100%]"
                />
                <p className="w-[100%] text-center absolute bottom-5 font-medium text-[16px] text-[#A4A2A2] ">
                  {elm?.name}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className="sm:w-[297px] w-[200px] sm:text-lg text-[16px] sm:h-[69px] h-[59px] bg-[#449F5A] hover:bg-[#6AD37F] mt-[45px] rounded-[12px] flex justify-center items-center text-white  sm:font-[600] font-[500] cursor-pointer "
          style={{ fontFamily: "Roboto" }}
          onClick={() => navigate(`/category`)}
        >
          <CiBoxes className="sm:text-[35px] text-[30px] ml-1" />
          View all products
        </div>
      </div>
      <br />
    </div>
  );
};

export default Homeproducts;
