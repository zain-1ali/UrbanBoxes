import React, { useState } from "react";
import box1 from "../../imgs/box1.png";
import box2 from "../../imgs/box2.png";
import box3 from "../../imgs/box3.png";
import box4 from "../../imgs/box4.png";
import { BsCheck2Circle } from "react-icons/bs";
import { PiClipboardTextLight } from "react-icons/pi";
const ProductMailBox = () => {
  let [bigDisplay, setBigDisplay] = useState(box1);
  return (
    <div className="lg:mt-[50px] md:mt-[50px] mt-[20px] w-[100%]">
      <div className="w-[100%] flex justify-center">
        <div className="w-[90%] h-[700px]  flex sm:flex-row flex-col  sm:justify-between justify-between  items-center  ">
          <div className="lg:w-[36%] lg:h-[100%] md:w-[46%] md:h-[100%] w-[95%] h-[49%]">
            <div className="flex flex-col justify-between items-center w-[100%] h-[100%]">
              <div className=" w-[97%]">
                <img
                  src={bigDisplay}
                  alt=""
                  className="w-[100%] h-[100%] rounded-3xl"
                />
              </div>
              <div
                className="w-[97%] flex justify-between"
                onClick={() => setBigDisplay(box2)}
              >
                <div className="w-[31%] h-[140px] cursor-pointer">
                  <img
                    src={box2}
                    alt=""
                    className="w-[100%] h-[100%] rounded-3xl"
                  />
                </div>
                <div
                  className="w-[31%] h-[140px] cursor-pointer"
                  onClick={() => setBigDisplay(box3)}
                >
                  <img
                    src={box3}
                    alt=""
                    className="w-[100%] h-[100%] rounded-3xl"
                  />
                </div>
                <div
                  className="w-[31%] h-[140px] cursor-pointer"
                  onClick={() => setBigDisplay(box4)}
                >
                  <img
                    src={box4}
                    alt=""
                    className="w-[100%] h-[100%] rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[63%] lg:h-[100%] md:w-[52%] md:h-[100%] w-[95%] h-[49%]  ">
            {/* flex flex-col items-center */}
            <div className="w-[95%] h-[128px] ">
              <div className="w-[100%] flex justify-between">
                <h2
                  className="text-5xl font-bold"
                  style={{ fontFamily: "Roboto" }}
                >
                  CUSTOM MAILER BOX
                </h2>
                <button className="w-[138px] h-[40px] bg-[#449F5A] hover:bg-[#6AD37F] rounded-[4px] text-white text-sm font-[500]">
                  Eco-Friendly
                </button>
              </div>
              <div className="w-[100%] flex items-center justify-between mt-[4px]">
                <div className="flex items-center">
                  <BsCheck2Circle className="text-[#449F5A]" />
                  <h2 className="text-sm font-[500] text-[#449F5A] ml-1">
                    Custom Sizes
                  </h2>
                </div>

                <div className="flex items-center">
                  <BsCheck2Circle className="text-[#449F5A]" />
                  <h2 className="text-sm font-[500] text-[#449F5A] ml-1">
                    Personalized
                  </h2>
                </div>

                <div className="flex items-center">
                  <BsCheck2Circle className="text-[#449F5A]" />
                  <h2 className="text-sm font-[500] text-[#449F5A] ml-1">
                    Custom Style
                  </h2>
                </div>

                <div className="flex items-center">
                  <BsCheck2Circle className="text-[#449F5A]" />
                  <h2 className="text-sm font-[500] text-[#449F5A] ml-1">
                    Free Shipping
                  </h2>
                </div>

                <div className="flex items-center">
                  <BsCheck2Circle className="text-[#449F5A]" />
                  <h2 className="text-sm font-[500] text-[#449F5A] ml-1">
                    Discounted Prices
                  </h2>
                </div>
              </div>

              <p
                style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                className="font-[600] text-[12px] mt-1"
              >
                Lorem ipsum dolor sit amet consectetur. Quam a dolor tortor
                tincidunt nunc nullam sed. Odio pretium egestas etiam senectus
                at sed. Pharetra eu sed sed massa interdum ut amet nunc cras.
                Elit integer vulputate vitae hac luctus egestas. Mattis
                vestibulum eu mattis tincidunt habitasse eget. More
              </p>
            </div>
            <div className="w-[100%] h-[570px] mt-1 bg-[#EEFFF3] rounded-[13px] p-4">
              <div className="flex w-[100%] items-center">
                <h2
                  className="font-[600]  w-[20%]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Product Information
                </h2>
                <div className="w-[80%] h-[1px] bg-[#C5BDBD]"></div>
              </div>
              <div className="w-[100%] mt-[15px] flex items-center justify-between">
                <div className="w-[31%] h-[63px] ">
                  <p
                    className="font-[400] text-[12px]"
                    style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                  >
                    Dimensions <span className="text-red-500 ">*</span>
                  </p>
                  <select
                    className="w-[100%] mt-1 h-[43px] rounded-xl p-5 outline-none bg-[#EEFFF3] border border-[#C5BDBD]"
                    placeholder="LxWxH"
                  >
                    <option value="abc"></option>
                    {/* <option value="abc">abc</option>

                    <option value="abc">abc</option> */}
                  </select>
                </div>

                <div className="w-[31%] h-[63px] ">
                  <p
                    className="font-[400] text-[12px]"
                    style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                  >
                    Stock <span className="text-red-500 ">*</span>
                  </p>
                  <select
                    className="w-[100%] mt-1 h-[43px] rounded-xl p-5 outline-none bg-[#EEFFF3] border border-[#C5BDBD]"
                    placeholder="LxWxH"
                  >
                    <option value=""></option>
                  </select>
                </div>

                <div className="w-[31%] h-[63px] ">
                  <p
                    className="font-[400] text-[12px]"
                    style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                  >
                    Quantity <span className="text-red-500 ">*</span>
                  </p>
                  <input
                    type="number"
                    className="w-[100%] mt-1 h-[43px] rounded-xl p-5 outline-none bg-[#EEFFF3] border border-[#C5BDBD]"
                  />
                  {/* <select
                    className="w-[100%] mt-1 h-[43px] rounded-xl p-5 outline-none bg-[#EEFFF3] border border-[#C5BDBD]"
                    placeholder="LxWxH"
                  >
                    <option value=""></option>
                  </select> */}
                </div>
              </div>
              <div className="w-[100%] flex items-center mt-[10px] ">
                <div className="w-[31%] h-[63px] ">
                  <p
                    className="font-[400] text-[12px]"
                    style={{ fontFamily: "Poppins", lineHeight: "13px" }}
                  >
                    Units <span className="text-red-500 ">*</span>
                  </p>
                  <select
                    className="w-[100%] mt-1 h-[43px] rounded-xl p-5 outline-none bg-[#EEFFF3] border border-[#C5BDBD]"
                    placeholder="LxWxH"
                  >
                    <option value="abc"></option>
                    {/* <option value="abc">abc</option>

                    <option value="abc">abc</option> */}
                  </select>
                </div>
                <div className=" flex mt-5  items-center ml-8">
                  <input
                    type="checkbox"
                    className="h-[29px] w-[29px] rounded-lg outline-none border bg-[#EEFFF3] border-[#C5BDBD] checked:bg-[#449F5A]"
                  />
                  <h2
                    className="sm:text-[14px] font-[400] text-[14px]  ml-3"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Rush Order
                  </h2>
                </div>
              </div>

              <div className="w-[100%] mt-[20px]">
                <div className="flex w-[100%] items-center">
                  <h2
                    className="font-[600]  w-[20%]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Contact Information
                  </h2>
                  <div className="w-[80%] h-[1px] bg-[#C5BDBD]"></div>
                </div>

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
                  />
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
                <button className="w-[129px] h-[51px] bg-[#449F5A] hover:bg-[#6AD37F] rounded-[8px] text-white  font-[500] mt-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMailBox;
