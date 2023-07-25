import React from "react";
import "../App.css";
import {
  BsFillPersonFill,
  BsTelephoneFill,
  BsBuildingsFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import MediaQuery from "react-responsive";

import { useMediaQuery } from "react-responsive";
// import MediaQuery from "react-responsive/types/Component";
const Homeform = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="w-[100%] sm:mt-[50px] mt-[20px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[35%] w-[22%] h-[1px]  bg-[#696262] mr-2"></div>
          <h2
            className="sm:text-2xl text-[16px] sm:font-[600] font-[500]"
            style={{ fontFamily: "Poppins" }}
          >
            {/* {isDesktopOrLaptop
              ? "Get Discounted Price Quickly"
              : "Get Discounted Price"} */}
            Get Discounted Price
          </h2>
          <div className="sm:w-[35%] w-[22%] h-[1px]  bg-[#696262] ml-2 "></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          // w-[70%] text-center mt-[25px] font-[400] text-xl text-[#2C2C2C]
          style={{ fontFamily: "Roboto" }}
        >
          we strive to provide superior services and solutions that surpass your
          expectations. Let us find the ideal packaging solution for your
          project.
        </p>
      </div>

      <div className="w-[100%] flex justify-center sm:mt-[50px] mt-[20px]">
        <div
          className="flex w-[92%] items-center "
          style={isDesktopOrLaptop ? null : { justifyContent: "center" }}
        >
          <MediaQuery minWidth={640}>
            <div className="w-[35%] sm:h-[658px] h-[400px] border rounded-2xl bg-[#449F5A] shadow-lg relative left-[80px] flex flex-col justify-center items-center">
              <h2
                className="text-[36px]  font-bold text-center w-[80%] text-white "
                style={{ fontFamily: "Roboto", lineHeight: "42px" }}
              >
                Your Packaging Success Starts with Urban Boxes!
              </h2>
              <p
                className="text-center w-[90%] text-white text-[20px] mt-3"
                style={{ fontFamily: "Roboto" }}
              >
                we strive to provide superior services and solutions that
                surpass your expectations. Let us find the ideal packaging
                solution for your project.
              </p>
            </div>
          </MediaQuery>
          <div className="sm:w-[65%] w-[95%] sm:h-[833px] h-[850px]  rounded-2xl shadow-2xl flex sm:justify-end justify-center items-center">
            <div className="sm:h-[80%]  sm:w-[80%] w-[90%] h-[90%]  sm:mr-[35px] ">
              <div className="w-[100%] ">
                <h2
                  className=" sm:text-[36px] text-lg font-bold"
                  style={{ fontFamily: "Roboto" }}
                >
                  Request A Quote
                </h2>
                <p
                  className="sm:mt-3 mt-1 sm:text-[16px] text-[14px]  font-[300]"
                  style={{ fontFamily: "Roboto" }}
                >
                  Complete our quote request form or email us at
                  company@urban.com to receive a customized quote from our
                  product specialists.
                </p>
              </div>

              <div className="w-[100%] flex flex-col items-center">
                <div className="w-[100%] flex justify-center items-center mt-[30px]">
                  <div className="sm:w-[38%] w-[27%]   mr-3 h-[1px]  bg-[#696262]"></div>
                  <h2
                    className="sm:text-xl text-[16px]  font-bold text-[#449F5A]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Contact Info
                  </h2>
                  <div className="sm:w-[38%] w-[27%]  ml-3  h-[1px]  bg-[#696262]"></div>
                </div>
              </div>

              <div className="w-[100%] flex justify-center">
                <div className="w-[87%]  sm:mt-[35px] mt-[20px]">
                  <div className="w-[100%] flex sm:justify-between items-center sm:flex-row flex-col">
                    <div className="sm:w-[47%] w-[90%] h-[47px] border rounded-lg flex justify-end items-center">
                      <BsFillPersonFill className="text-[#449F5A] text-2xl " />
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="outline-none p-2 w-[88%] placeholder:text-sm"
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] border rounded-lg flex justify-end items-center"
                      style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      <MdEmail className="text-[#449F5A] text-2xl " />
                      <input
                        type="text"
                        placeholder="Email"
                        className="outline-none p-2 w-[88%] placeholder:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:mt-[25px] mt-[14px] w-[100%] flex sm:justify-between items-center sm:flex-row flex-col">
                    <div className="sm:w-[47%] w-[90%] border rounded-lg flex justify-end items-center">
                      <BsTelephoneFill className="text-[#449F5A] text-2xl " />
                      <input
                        type="text"
                        placeholder="Phone"
                        className="outline-none p-2 w-[88%] placeholder:text-sm"
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] border rounded-lg flex justify-end items-center"
                      style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      <BsBuildingsFill className="text-[#449F5A] text-2xl " />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="outline-none p-2 w-[88%] placeholder:text-sm"
                      />
                    </div>
                  </div>

                  <div className="w-[100%] flex mt-5 items-center">
                    <input
                      type="checkbox"
                      className="h-[18px] w-[18px] rounded-md outline-none border"
                    />
                    <h2
                      className="sm:text-[16px] text-[14px] font-medium ml-3"
                      style={{ fontFamily: "Roboto" }}
                    >
                      Request A Callback
                    </h2>
                  </div>
                </div>
              </div>

              <div className="w-[100%] flex flex-col items-center mt-[40px]">
                <div className="w-[100%] flex justify-center items-center ">
                  <div className="w-[30%]   mr-3 h-[1px]  bg-[#696262]"></div>
                  <h2
                    className="sm:text-xl text-[16px] font-bold text-[#449F5A]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Project Info
                  </h2>
                  <div className="w-[30%]  ml-3 h-[1px]  bg-[#696262]"></div>
                </div>
              </div>

              <div className="w-[100%] flex justify-center">
                <div className="w-[87%]  sm:mt-[35px] mt-[20px]">
                  <div className="w-[100%] flex sm:justify-between items-center sm:flex-row flex-col">
                    <div className="sm:w-[47%] w-[90%] h-[47px] border rounded-lg flex justify-end items-center">
                      {/* <BsFillPersonFill className="text-[#449F5A] text-2xl " /> */}
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="outline-none p-2 w-[98%] placeholder:text-sm"
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] border rounded-lg flex justify-end items-center"
                      style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      {/* <MdEmail className="text-[#449F5A] text-2xl " /> */}
                      <input
                        type="text"
                        placeholder="Email"
                        className="outline-none p-2 w-[98%] placeholder:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:mt-[25px] mt-[14px] w-[100%] flex sm:justify-between items-center sm:flex-row flex-col">
                    <div className="sm:w-[47%] w-[90%] border rounded-lg flex justify-end items-center">
                      {/* <BsTelephoneFill className="text-[#449F5A] text-2xl " /> */}
                      <input
                        type="text"
                        placeholder="Phone"
                        className="outline-none p-2 w-[98%] placeholder:text-sm"
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] border rounded-lg flex justify-end items-center"
                      style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      {/* <BsBuildingsFill className="text-[#449F5A] text-2xl " /> */}
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="outline-none p-2 w-[98%] placeholder:text-sm"
                      />
                    </div>
                  </div>

                  {/* <div className="w-[100%] flex mt-5 items-center">
                    <input
                      type="checkbox"
                      className="h-[18px] w-[18px] rounded-md outline-none border"
                    />
                    <h2
                      className="sm:text-[16px] text-[14px] font-medium ml-3"
                      style={{ fontFamily: "Roboto" }}
                    >
                      Request A Callback
                    </h2>
                  </div> */}
                </div>
              </div>
              {/* <div className="w-[100%] flex justify-center">
                <div className="w-[87%]  mt-[35px]">
                  <div className="w-[100%] flex justify-between">
                    <div className="w-[47%] h-[47px] border rounded-lg flex justify-end items-center">
                      
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="outline-none p-2 w-[88%] placeholder:text-sm"
                      />
                    </div>
                    <div className="w-[47%] h-[47px] border rounded-lg flex justify-end items-center">
                      
                      <input
                        type="text"
                        placeholder="Email"
                        className="outline-none p-2 w-[88%] placeholder:text-sm"
                      />
                    </div>
                  </div>

                  <div className="w-[100%] flex justify-between mt-[25px]">
                    <div className="w-[47%] h-[47px] border rounded-lg flex justify-end items-center">
                     
                      <input
                        type="text"
                        placeholder="Phone"
                        className="outline-none p-2 w-[88%] placeholder:text-sm"
                      />
                    </div>
                    <div className="w-[47%] h-[47px] border rounded-lg flex justify-end items-center">
                     
                      <input
                        type="text"
                        id="mydate"
                        placeholder="Date"
                        className="outline-none p-2 w-[88%] placeholder:text-sm "
                      />
                    </div>
                  </div>

                  <div className="w-[100%] flex mt-[30px] justify-end">
                    <div
                      className="w-[155px] h-[55px]  text-[20px] rounded-md flex justify-center items-center mr-3 border border-[#449F5A]  font-[600] text-[#449F5A]"
                      style={{ fontFamily: "Inter" }}
                    >
                      Reset
                    </div>
                    <div
                      className="w-[155px] h-[55px] text-[20px] rounded-md flex justify-center items-center bg-[#449F5A] hover:bg-[#6AD37F] font-[600] text-white cursor-pointer"
                      style={{ fontFamily: "Inter" }}
                    >
                      Submit
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="w-[100%] flex sm:mt-[30px] mt-[25px] sm:justify-end justify-center">
                <div
                  className="hover:bg-[#F2F2F2] hover:text-[#585656] cursor-pointer hover:border-[#F2F2F2] sm:w-[155px] sm:h-[55px] w-[100px] h-[40px]  sm:text-[20px] text-[14px] rounded-md flex justify-center items-center mr-3 border border-[#449F5A]  font-[600] text-[#449F5A]"
                  style={{ fontFamily: "Inter" }}
                >
                  Reset
                </div>
                <div
                  className="sm:w-[155px] sm:h-[55px] w-[100px] h-[40px] sm:text-[20px] text-[14px] rounded-md flex justify-center items-center bg-[#449F5A] hover:bg-[#6AD37F] font-[600] text-white cursor-pointer"
                  style={{ fontFamily: "Inter" }}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default Homeform;