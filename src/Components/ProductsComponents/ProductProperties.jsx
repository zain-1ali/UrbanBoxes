import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";
import { SiMoleculer } from "react-icons/si";
import { BsInboxesFill, BsFillClipboardCheckFill } from "react-icons/bs";
import {
  openSepecification,
  openDetails,
  openCapabilities,
  openSpecialCapabilities,
  openCoating,
} from "../../redux/productpropertySlice";
import { useDispatch, useSelector } from "react-redux";
import Sepecifications from "../ProductPropertiesComponents/Sepecifications";
import Details from "../ProductPropertiesComponents/Details";
import Capabilities from "../ProductPropertiesComponents/Capabilities";
import Coating from "../ProductPropertiesComponents/Coating";
import SepecialCapabilities from "../ProductPropertiesComponents/SepecialCapabilities";

const ProductSepecification = () => {
  let dispatch = useDispatch();
  const isDetails = useSelector(
    (state) => state.productpropertyHandeler.isDetails
  );

  const isSepecification = useSelector(
    (state) => state.productpropertyHandeler.isSepecification
  );

  const isCapabilities = useSelector(
    (state) => state.productpropertyHandeler.isCapabilities
  );

  const isCoating = useSelector(
    (state) => state.productpropertyHandeler.isCoating
  );

  const isSpecialCapabilities = useSelector(
    (state) => state.productpropertyHandeler.isSpecialCapabilities
  );

  console.log(isDetails);
  return (
    <div className="w-[100%] mt-[60px]">
      <div className="w-[100%] flex justify-center">
        <div className="w-[87%] h-[1060px]  flex justify-between">
          <div className="h-[100%] w-[15%] border">
            <div
              className={`w-[100%] h-[212px] border cursor-pointer ${
                isSepecification ? `bg-[#A6EAB8] shadow-xl ` : `bg-[#449F5A]`
              }  flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openSepecification())}
            >
              <FaClipboardList className="text-[80px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] text-[20px] text-white mt-2"
              >
                {" "}
                Specifications
              </p>
            </div>
            <div
              className={`w-[100%] h-[212px] border cursor-pointer ${
                isDetails ? `bg-[#A6EAB8] shadow-xl ` : `bg-[#449F5A]`
              } flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openDetails())}
            >
              {" "}
              <BiSolidDetail className="text-[80px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] text-[20px] text-white mt-2"
              >
                {" "}
                Details
              </p>{" "}
            </div>
            <div
              className={`w-[100%] h-[212px] border cursor-pointer ${
                isCapabilities ? `bg-[#A6EAB8] shadow-xl ` : `bg-[#449F5A]`
              } flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openCapabilities())}
            >
              {" "}
              <SiMoleculer className="text-[80px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] text-[20px] text-white mt-2 text-center"
              >
                {" "}
                Special Capabilities
              </p>{" "}
            </div>
            <div
              className={`w-[100%] h-[212px] border cursor-pointer ${
                isCoating ? `bg-[#A6EAB8] shadow-xl ` : `bg-[#449F5A]`
              } flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openCoating())}
            >
              {" "}
              <BsInboxesFill className="text-[80px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] text-[20px] text-white mt-2 text-center"
              >
                {" "}
                Coating & Lamination
              </p>{" "}
            </div>
            <div
              className={`w-[100%] h-[212px] border cursor-pointer ${
                isSpecialCapabilities
                  ? `bg-[#A6EAB8] shadow-xl `
                  : `bg-[#449F5A]`
              } flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openSpecialCapabilities())}
            >
              {" "}
              <BsFillClipboardCheckFill className="text-[80px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] text-[20px] text-white mt-2 text-center"
              >
                {" "}
                Special Capabilities
              </p>{" "}
            </div>
          </div>

          <div className="h-[100%] w-[83%] ">
            {isSepecification && <Sepecifications />}
            {isDetails && <Details />}
            {isCapabilities && <Capabilities />}
            {isCoating && <Coating />}
            {isSpecialCapabilities && <SepecialCapabilities />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSepecification;
