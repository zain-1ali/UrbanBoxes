import React, { useEffect, useState } from "react";
import box1 from "../../imgs/box1.png";
import box2 from "../../imgs/box2.png";
import box3 from "../../imgs/box3.png";
import box4 from "../../imgs/box4.png";
import { BsCheck2Circle } from "react-icons/bs";
import { PiClipboardTextLight } from "react-icons/pi";
import "../../App.css";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

const ProductMailBox = () => {
  let [bigDisplay, setBigDisplay] = useState(box1);
  const [checked, setChecked] = useState(false);

  // -------------------------------------------getting all products names from database-----------------------------------------------

  let [ProductsNames, setProductsNames] = useState([]);
  let baseUrl = import.meta.env.VITE_BASE_URL;
  let singleProduct = useSelector(
    (state) => state.ApiSlice.singleProduct?.data
  );
  useEffect(() => {
    let getSingleProduct = async () => {
      let res = await axios.get(`${baseUrl}/api/allProductNames`);
      setProductsNames(res?.data.data);
    };

    getSingleProduct();
  }, []);

  let [data, setData] = useState({
    dimentions: "",
    units: "",
    quantity: "",
    productId: "",
    boxType: "",
    name: "",
    email: "",
    phone: "",
    deliveryDate: "",
    artImg: null,
    comment: "",
    orderType: "product",
    // boxType: "abc",
  });

  // -----------------------------------------------save data to db----------------------------------------

  let saveToDb = async () => {
    const formData = new FormData();

    formData.append("dimentions", data.dimentions);
    formData.append("boxType", singleProduct?.product?.name);
    formData.append("units", data.units);
    formData.append("quantity", data.quantity);
    formData.append("productId", singleProduct?.product?.id);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("orderType", "product");
    formData.append("image", data?.artImg);

    try {
      await axios.post(`${baseUrl}/api/submitOrder`, formData).then((resp) => {
        console.log(resp);
        toast.success(resp?.data?.message);
        setData({
          dimentions: "",
          units: "",
          quantity: "",
          productId: "",
          name: "",
          email: "",
          phone: "",
          orderType: "",
          boxType: "",
        });
        setChecked(false);
      });

      // console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setData({
        ...data,
        productId: ProductsNames[0]?.id,
        units: "inch",
        quantity: "10",
      });
    } else {
      setData({ ...data, productId: "", units: "", quantity: "" });
    }
  };

  const renderHTML = (string) => {
    return { __html: string };
  };

  let stockOptions = [
    "White Card Stock",
    "Brown Kraft Card Stock",
    "Corrugated Cardboard Stock",
    "Linen Stock",
    "Rigid Stock",
    "White Kraft paper",
    "Brown Kraft paper",
    "PVC",
  ];

  let leminationOptions = [
    "Glossy Lamination",
    "Matte Lamination",
    "Silk Touch Lamination",
    "Satin Finish Lamination",
    "Not Sure",
  ];

  return (
    <div className="lg:mt-[50px] md:mt-[50px]  w-[100%]">
      <div className="w-[100%] flex justify-center">
        <div className="w-[90%] sm:h-[630px] h-max flex sm:flex-row flex-col sm:mt-0 mt-[25px]  sm:justify-between  items-center">
          <div className="lg:w-[36%] lg:h-[100%] md:w-[46%] md:h-[100%]  w-[90%]">
            <div className="flex flex-col justify-start items-center w-[100%] h-[100%]">
              <div className=" w-[97%] flex justify-center items-center ">
                <img
                  src={
                    singleProduct?.product?.images[0]?.image
                      ? singleProduct?.product?.images[0]?.image
                      : "https://placehold.co/600x800"
                  }
                  alt=""
                  // className="w-[100%] sm:w-[544px] sm:h-[544px] h-[400px] rounded-3xl"
                  className="sm:h-[420px] sm:w-[420px] h-[300px] w-[300px] rounded-3xl object-cover"
                />
              </div>
              <div
                className="w-[97%] flex justify-between sm:mt-14 mt-[20px]"
                // onClick={() => setBigDisplay(box2)}
              >
                <div
                  className="sm:w-[31%] sm:h-[140px] h-[100px] w-[100px] cursor-pointer "
                  onClick={() => setBigDisplay(box2)}
                >
                  <img
                    src={
                      singleProduct?.product?.images[1]?.image
                        ? singleProduct?.product?.images[1]?.image
                        : "https://placehold.co/130x140"
                    }
                    alt=""
                    className="w-[100%] h-[100%]  sm:rounded-3xl rounded-xl object-cover"
                  />
                </div>
                <div
                  className="sm:w-[31%] sm:h-[140px] h-[100px] w-[100px] cursor-pointer"
                  onClick={() => setBigDisplay(box3)}
                >
                  <img
                    src={
                      singleProduct?.product?.images[2]?.image
                        ? singleProduct?.product?.images[2]?.image
                        : "https://placehold.co/130x140"
                    }
                    alt=""
                    className="w-[100%] h-[100%] sm:rounded-3xl rounded-xl object-cover"
                  />
                </div>
                <div
                  className="sm:w-[31%] sm:h-[140px] h-[100px] w-[100px] cursor-pointer"
                  onClick={() => setBigDisplay(box4)}
                >
                  <img
                    src={
                      singleProduct?.product?.images[3]?.image
                        ? singleProduct?.product?.images[3]?.image
                        : "https://placehold.co/130x140"
                    }
                    alt=""
                    className="w-[100%] h-[100%] sm:rounded-3xl rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[32%] lg:h-[100%] md:w-[52%] md:h-[100%] w-[95%]  sm:mt-0 mt-[35px]">
            <div className="sm:w-[95%] w-[100%] sm:h-[128px] h-[112px]">
              <div className="w-[100%] flex justify-between">
                <h2
                  className="sm:text-4xl text-lg font-bold"
                  style={{ fontFamily: "Roboto" }}
                >
                  {singleProduct?.productPage?.formHeading}
                </h2>
                {/* <button className="sm:w-[138px] w-[100px] sm:h-[40px] h-[30px] bg-[#449F5A] hover:bg-[#6AD37F] rounded-[4px] text-white text-sm font-[500]">
                  Eco-Friendly
                </button> */}
              </div>
              <div className="w-[100%] flex items-center justify-start sm:mt-[4px] mt-[7px] flex-wrap">
                <div className="flex items-center">
                  <BsCheck2Circle className="text-[#449F5A] sm:text-lg text-[8px]" />
                  <h2 className="sm:text-sm text-[7px] font-[500] text-[#449F5A] ml-1">
                    Custom Sizes
                  </h2>
                </div>

                <div className="flex items-center ml-3">
                  <BsCheck2Circle className="text-[#449F5A] sm:text-lg text-[8px]" />
                  <h2 className="sm:text-sm text-[7px] font-[500] text-[#449F5A] ml-1">
                    Personalized
                  </h2>
                </div>

                <div className="flex items-center ml-3">
                  <BsCheck2Circle className="text-[#449F5A] sm:text-lg text-[8px]" />
                  <h2 className="sm:text-sm text-[7px] font-[500] text-[#449F5A] ml-1">
                    Custom Style
                  </h2>
                </div>

                <div className="flex items-center mt-2">
                  <BsCheck2Circle className="text-[#449F5A] sm:text-lg text-[8px]" />
                  <h2 className="sm:text-sm text-[7px] font-[500] text-[#449F5A] ml-1">
                    Free Shipping
                  </h2>
                </div>

                <div className="flex items-center mt-2 ml-3">
                  <BsCheck2Circle className="text-[#449F5A] sm:text-lg text-[8px]" />
                  <h2 className="sm:text-sm text-[7px] font-[500] text-[#449F5A] ml-1">
                    Discounted Prices
                  </h2>
                </div>
              </div>

              <div
                style={{ fontFamily: "Poppins", lineHeight: "18px" }}
                className="font-[400] sm:text-[13px] text-[8px] mt-3"
              >
                {/* {singleProduct?.productPage?.formDescription} */}
                <div
                  // className="border w-[100%] text-center"
                  dangerouslySetInnerHTML={renderHTML(
                    singleProduct?.productPage?.formDescription
                  )}
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] lg:h-[100%] md:w-[52%] md:h-[100%] w-[95%]  sm:mt-0 mt-[35px] ">
            {/* flex flex-col items-center */}

            <div className="w-[100%] h-[100%]  sm:mt-1  bg-[#EEFFF3] rounded-[13px] p-4 ">
              <div className="w-[100%] mt-[20px]">
                <div className="w-[100%] h-[63px] mt-[15px]">
                  <p
                    className="font-[400] text-[12px]"
                    style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                  >
                    Your Name <span className="text-red-500 ">*</span>
                  </p>
                  <input
                    type="text"
                    className="w-[100%] mt-1 h-[43px] rounded-xl p-5 outline-none bg-[#EEFFF3] border border-[#C5BDBD]"
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data?.name}
                  />
                </div>

                <div className="w-[100%] h-[63px] mt-[15px]">
                  <p
                    className="font-[400] text-[12px]"
                    style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                  >
                    Email Address <span className="text-red-500 ">*</span>
                  </p>
                  <input
                    type="text"
                    className="w-[100%] mt-1 h-[43px] rounded-xl p-5 outline-none bg-[#EEFFF3] border border-[#C5BDBD]"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    value={data?.email}
                  />
                </div>

                <div className="w-[100%] h-[63px] mt-[15px]">
                  <p
                    className="font-[400] text-[12px]"
                    style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                  >
                    Phone Number <span className="text-red-500 ">*</span>
                  </p>
                  <input
                    type="text"
                    className="w-[100%] mt-1 h-[43px] rounded-xl p-5 outline-none bg-[#EEFFF3] border border-[#C5BDBD]"
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
                    value={data?.phone}
                  />
                </div>

                <div className="w-[100%] h-[155px] pr-2">
                  <div className="w-[100%] mt-[15px] flex items-center justify-between">
                    {/* <div className="w-[31%] h-[63px] ">
                    <p
                      className="font-[400] sm:text-[12px]  text-[10px]"
                      style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                    >
                      Product Name <span className="text-red-500 ">*</span>
                    </p>

                    <input
                      type="text"
                      className="w-[100%] mt-1 sm:h-[43px] h-[33px] sm:rounded-xl rounded-lg sm:p-5 p-2 outline-none bg-[#EEFFF3] border border-[#C5BDBD] placeholder:sm:text-base placeholder:text-xs"
                      placeholder="LxWxH"
                      disabled
                      
                      value={singleProduct?.product?.name}
                    />
                  </div> */}

                    <div className="w-[48%] h-[63px] ">
                      <p
                        className="font-[400] sm:text-[12px]  text-[10px]"
                        style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                      >
                        Dimensions <span className="text-red-500 ">*</span>
                      </p>

                      <input
                        type="text"
                        className="w-[100%] mt-1 sm:h-[43px] h-[33px] sm:rounded-xl rounded-lg sm:p-5 p-2 outline-none bg-[#EEFFF3] border border-[#C5BDBD] placeholder:sm:text-base placeholder:text-xs"
                        placeholder="LxWxH"
                        onChange={(e) =>
                          setData({ ...data, dimentions: e.target.value })
                        }
                        value={data?.dimentions}
                      />
                    </div>

                    <div className="w-[48%] h-[63px] ">
                      <p
                        className="font-[400] sm:text-[12px] text-[10px]"
                        style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                      >
                        Quantity <span className="text-red-500 ">*</span>
                      </p>
                      <input
                        type="number"
                        min="1"
                        className="w-[100%] mt-1 sm:h-[43px] h-[33px] sm:rounded-xl rounded-lg sm:p-5 p-1 outline-none bg-[#EEFFF3] border border-[#C5BDBD]"
                        onChange={(e) =>
                          setData({ ...data, quantity: e.target.value })
                        }
                        value={data?.quantity}
                      />
                    </div>
                  </div>

                  <div className="w-[100%] mt-[15px] flex items-center justify-between">
                    <div className="w-[48%] h-[63px] ">
                      <p
                        className="font-[400] sm:text-[12px]  text-[10px]"
                        style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                      >
                        Upload Artwork
                      </p>
                      <div className="w-[100%] mt-1 sm:h-[43px] h-[33px] sm:rounded-xl rounded-lg  flex justify-center items-center  outline-none bg-[#EEFFF3] border border-[#C5BDBD] placeholder:sm:text-base placeholder:text-xs">
                        <input
                          type="file"
                          className="h-[75%] w-[90%]"
                          onChange={(e) =>
                            setData({ ...data, artImg: e.target.files[0] })
                          }
                        />
                      </div>
                    </div>
                    <div className="w-[48%] h-[63px] ">
                      <p
                        className="font-[400] sm:text-[12px]  text-[10px]"
                        style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                      >
                        Units <span className="text-red-500 ">*</span>
                      </p>
                      <select
                        className="w-[100%] mt-1 sm:h-[43px] h-[33px] sm:rounded-xl rounded-lg sm:text-base  text-xs p-1 outline-none bg-[#EEFFF3] border border-[#C5BDBD]"
                        onChange={(e) =>
                          setData({ ...data, units: e.target.value })
                        }
                        style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                        value={data?.units}
                      >
                        <option
                          value=""
                          disabled
                          selected
                          style={{ fontFamily: "Poppins" }}
                        >
                          Select unit
                        </option>
                        <option value="inch" style={{ fontFamily: "Poppins" }}>
                          inches
                        </option>
                        <option value="mm" style={{ fontFamily: "Poppins" }}>
                          mm
                        </option>
                        <option value="cm" style={{ fontFamily: "Poppins" }}>
                          cm
                        </option>
                        {/* <option value="abc">abc</option>

                    <option value="abc">abc</option> */}
                      </select>
                    </div>
                    {/* <div className="w-[31%] h-[100px]  flex justify-center items-center">
                    <img
                      src={
                        data?.artImg
                          ? URL.createObjectURL(data?.artImg)
                          : `https://placehold.co/130x90`
                      }
                      alt=""
                      className="h-[90px] w-[130px] rounded-md"
                    />
                  </div> */}
                  </div>
                </div>
                <div className="w-[100%] mt-[2px] flex flex-col  justify-between">
                  <p
                    className="font-[400] sm:text-[12px]  text-[10px]"
                    style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                  >
                    Additional Comment
                  </p>
                  <textarea
                    onChange={(e) =>
                      setData({ ...data, comment: e.target.value })
                    }
                    value={data?.comment}
                    name=""
                    id=""
                    className="h-[70px] w-[100%] sm:rounded-xl rounded-lg sm:text-base  text-xs p-1 outline-none bg-[#EEFFF3] border border-[#C5BDBD] mt-2 "
                  ></textarea>
                </div>
                <div className="flex w-[100%] items-center mt-[10px]">
                  <PiClipboardTextLight />
                  <p
                    className="ml-1 font-[400] text-[12px]"
                    style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                  >
                    Read our{" "}
                    <span className="ml-1 font-[700] text-[12px] underline cursor-pointer">
                      privacy policy
                    </span>{" "}
                    and{" "}
                    <span className="ml-1 font-[700] text-[12px] underline cursor-pointer">
                      Terms.
                    </span>
                  </p>
                </div>

                <button
                  className="w-[129px] h-[51px] bg-[#449F5A] hover:bg-[#6AD37F] rounded-[8px] text-white  font-[500] sm:mt-3 mt-5"
                  onClick={() => saveToDb()}
                >
                  Submit
                </button>
                <ToastContainer position="bottom-right" autoClose={1500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMailBox;
