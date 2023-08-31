import React from "react";
import { FaClipboardList } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";
import { SiMoleculer } from "react-icons/si";
import {
  BsInboxesFill,
  BsFillClipboardCheckFill,
  BsInboxFill,
} from "react-icons/bs";
import { CgStyle } from "react-icons/cg";
import {
  openSepecification,
  openDetails,
  openCapabilities,
  openSpecialCapabilities,
  openCoating,
  openAvailbaleStyle,
} from "../../redux/productpropertySlice";
import { useDispatch, useSelector } from "react-redux";
import Sepecifications from "../ProductPropertiesComponents/Sepecifications";
import Details from "../ProductPropertiesComponents/Details";
import Capabilities from "../ProductPropertiesComponents/Capabilities";
import Coating from "../ProductPropertiesComponents/Coating";
import SepecialCapabilities from "../ProductPropertiesComponents/SepecialCapabilities";
import AvalableStyle from "../ProductPropertiesComponents/AvalableStyle";
import { RiBox1Fill } from "react-icons/ri";

const ProductSepecification = ({ details }) => {
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
  const isAvailbaleStyle = useSelector(
    (state) => state.productpropertyHandeler.isAvailbaleStyle
  );

  // console.log(details);
  return (
    <div className="w-[100%] mt-[60px]">
      <div className="w-[100%] flex justify-center">
        <div className="sm:w-[85%] w-[98%] h-[730px]  flex sm:justify-between  sm:flex-row flex-col">
          <div className="sm:h-[100%] sm:w-[13%] w-[100%] h-[150px] border flex sm:flex-col">
            <div
              className={`sm:w-[100%] sm:h-[130px] w-[20%] border cursor-pointer ${
                isSepecification ? `bg-[#A6EAB8] shadow-2xl ` : `bg-[#449F5A]`
              }  flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openSepecification())}
            >
              <FaClipboardList className="sm:text-[50px] text-[25px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] sm:text-[16px] text-[9px] text-white mt-2"
              >
                {""}
                Specifications
              </p>
            </div>
            <div
              className={`sm:w-[100%] sm:h-[130px] w-[20%] border cursor-pointer ${
                isDetails ? `bg-[#A6EAB8] shadow-xl ` : `bg-[#449F5A]`
              } flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openDetails())}
            >
              {" "}
              <BiSolidDetail className="sm:text-[50px] text-[25px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] text-[16px] text-white mt-2"
              >
                {" "}
                Details
              </p>{" "}
            </div>
            <div
              className={`sm:w-[100%] sm:h-[130px] w-[20%] border cursor-pointer ${
                isCapabilities ? `bg-[#A6EAB8] shadow-xl ` : `bg-[#449F5A]`
              } flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openCapabilities())}
            >
              {" "}
              <SiMoleculer className="sm:text-[50px] text-[25px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] sm:text-[16px] text-[10px] text-white mt-2 text-center"
              >
                {" "}
                Special Capabilities
              </p>{" "}
            </div>
            <div
              className={`sm:w-[100%] sm:h-[130px] w-[20%] border cursor-pointer ${
                isCoating ? `bg-[#A6EAB8] shadow-xl ` : `bg-[#449F5A]`
              } flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openCoating())}
            >
              {" "}
              <BsInboxFill className="sm:text-[50px] text-[25px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] sm:text-[16px] text-[10px] text-white mt-2 text-center"
              >
                {" "}
                Coating & Lamination
              </p>{" "}
            </div>

            <div
              className={`sm:w-[100%] sm:h-[130px] w-[20%] border cursor-pointer ${
                isAvailbaleStyle ? `bg-[#A6EAB8] shadow-xl ` : `bg-[#449F5A]`
              } flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openAvailbaleStyle())}
            >
              {" "}
              <CgStyle className="sm:text-[50px] text-[25px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] sm:text-[16px] text-[10px] text-white mt-2 text-center"
              >
                {" "}
                Available Styles
              </p>{" "}
            </div>

            <div
              className={`sm:w-[100%] sm:h-[130px] w-[20%] border cursor-pointer ${
                isSpecialCapabilities
                  ? `bg-[#A6EAB8] shadow-xl `
                  : `bg-[#449F5A]`
              } flex justify-center items-center flex-col hover:bg-[#A6EAB8]`}
              onClick={() => dispatch(openSpecialCapabilities())}
            >
              {" "}
              <BsFillClipboardCheckFill className="sm:text-[50px] text-[25px] text-white" />
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-[600] sm:text-[16px] text-[10px] text-white mt-2 text-center"
              >
                {" "}
                Special Finishes
              </p>{" "}
            </div>
          </div>

          <div className="h-[100%] sm:w-[85%] w-[100%]">
            {isSepecification && <Sepecifications />}
            {isDetails && <Details details={details} />}
            {isCapabilities && <Capabilities />}
            {isCoating && <Coating />}
            {isSpecialCapabilities && <SepecialCapabilities />}
            {isAvailbaleStyle && <AvalableStyle />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSepecification;
