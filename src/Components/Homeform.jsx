import React, { useState } from "react";
import "../App.css";
import {
  BsFillPersonFill,
  BsTelephoneFill,
  BsBuildingsFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import MediaQuery from "react-responsive";

import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";

// import MediaQuery from "react-responsive/types/Component";

const Homeform = ({
  getDiscPricDesc,
  getDiscPricBoxHeding,
  getDiscPricBoxText,
  getDiscPricFormHeding,
  getDiscPricFormText,
}) => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = mm + "/" + dd + "/" + yyyy;
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  let baseUrl = import.meta.env.VITE_BASE_URL;
  let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    orderType: "quote",
    boxType: "",
    dimentions: "",
    quantity: "",
    deliveryDate: "",
    company: "",
    artImg: null,
    printing: " ",
    units: "inches",
    comment: "",
  });

  // -----------------------------------------------save data to db----------------------------------------

  let saveToDb = async () => {
    console.log("testing");
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("boxType", data.boxType);
    formData.append("orderType", "quote");
    formData.append("dimentions", data.dimentions);
    formData.append("deliveryDate", data.deliveryDate);
    formData.append("quantity", data.quantity);
    formData.append("printing", data.printing);
    formData.append("units", data.units);
    formData.append("image", data.artImg);

    try {
      await axios.post(`${baseUrl}/api/submitOrder`, formData).then((resp) => {
        console.log("testing2");
        // console.log(resp?.response?.data?.message);
        toast.success(resp?.data?.message);
        setData({
          name: "",
          email: "",
          phone: "",
          orderType: "quote",
          boxType: "",
          dimentions: "",
          quantity: "",
          company: "",
          deliveryDate: "",
        });
      });

      // console.log(res);
    } catch (error) {
      // console.log(error.response.data.message);
      toast.error(error?.response?.data?.message);
    }
  };

  let reset = () => {
    setData({
      name: "",
      email: "",
      phone: "",
      orderType: "quote",
      boxType: "",
      dimentions: "",
      quantity: "",
      company: "",
      deliveryDate: "",
    });
  };
  const renderHTML = (string) => {
    return { __html: string };
  };
  return (
    <div className="w-[100%] sm:mt-[50px] mt-[20px]">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px]">
          <div className="sm:w-[35%] w-[22%] h-[1px]  bg-[#696262] mr-2"></div>
          <h2
            className="sm:text-2xl text-[16px] sm:font-[600] font-[500] text-center"
            style={{ fontFamily: "Poppins" }}
          >
            {/* {isDesktopOrLaptop
              ? "Get Discounted Price Quickly"
              : "Get Discounted Price"} */}
            {/* Get Discounted Price */}
            Get Wholesale Prices for Custom Printed Boxes
          </h2>
          <div className="sm:w-[35%] w-[22%] h-[1px]  bg-[#696262] ml-2 "></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          // w-[70%] text-center mt-[25px] font-[400] text-xl text-[#2C2C2C]
          style={{ fontFamily: "Roboto" }}
        >
          <div dangerouslySetInnerHTML={renderHTML(getDiscPricDesc)} />
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
                {getDiscPricBoxHeding}
              </h2>
              <p
                className="text-center w-[90%] text-white text-[20px] mt-3"
                style={{ fontFamily: "Roboto" }}
              >
                <div dangerouslySetInnerHTML={renderHTML(getDiscPricBoxText)} />
              </p>
            </div>
          </MediaQuery>
          <div className="sm:w-[65%] w-[95%] sm:h-[833px] h-[910px]  rounded-2xl shadow-2xl flex sm:justify-end justify-center items-center">
            <div className="sm:h-[80%]  sm:w-[80%] w-[90%] h-[95%]  sm:mr-[35px] ">
              <div className="w-[100%] ">
                <h2
                  className=" sm:text-[36px] text-lg font-bold"
                  style={{ fontFamily: "Roboto" }}
                >
                  {getDiscPricFormHeding}
                </h2>
                <p
                  className="sm:mt-3 mt-1 sm:text-[16px] text-[14px]  font-[300]"
                  style={{ fontFamily: "Roboto" }}
                >
                  <div
                    dangerouslySetInnerHTML={renderHTML(getDiscPricFormText)}
                  />
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
                    <div className="sm:w-[47%] w-[90%] h-[47px] border rounded-md border-[#c4c4c4] flex justify-end items-center">
                      <BsFillPersonFill className="text-[#449F5A] text-2xl " />
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="outline-none p-2 w-[88%] placeholder:text-sm"
                        onChange={(e) =>
                          setData({ ...data, name: e.target.value })
                        }
                        value={data?.name}
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] border rounded-md border-[#c4c4c4] flex justify-end items-center"
                      style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      <MdEmail className="text-[#449F5A] text-2xl " />
                      <input
                        type="text"
                        placeholder="Email"
                        className="outline-none p-2 w-[85%] placeholder:text-sm mr-1"
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                        value={data?.email}
                      />
                    </div>
                  </div>

                  <div className="sm:mt-[25px] mt-[14px] w-[100%] flex sm:justify-between items-center sm:flex-row flex-col">
                    <div className="sm:w-[47%] w-[90%] border rounded-md border-[#c4c4c4] flex justify-end items-center">
                      <BsTelephoneFill className="text-[#449F5A] text-2xl " />
                      <input
                        type="text"
                        placeholder="Phone"
                        className="outline-none p-2 w-[85%]  placeholder:text-sm mr-1"
                        onChange={(e) =>
                          setData({ ...data, phone: e.target.value })
                        }
                        value={data?.phone}
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] border rounded-md border-[#c4c4c4] flex justify-end items-center"
                      style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      <BsBuildingsFill className="text-[#449F5A] text-2xl " />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="outline-none p-2 w-[85%] placeholder:text-sm mr-1"
                        onChange={(e) =>
                          setData({ ...data, company: e.target.value })
                        }
                        value={data?.company}
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
                <div
                  className="sm:w-[95%] w-[87%]  sm:mt-[35px] mt-[20px] sm:h-[200px] pr-2"
                  style={{ overflowY: "scroll", overflowX: "hidden" }}
                >
                  <div className="w-[100%]  flex sm:justify-between items-center sm:flex-row flex-col">
                    <div className="sm:w-[47%] w-[90%]  ">
                      {/* <BsFillPersonFill className="text-[#449F5A] text-2xl " /> */}
                      <div>
                        <p
                          className="font-[400] sm:text-[12px]  text-[10px]"
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                        >
                          Name or Box Type{" "}
                          <span className="text-red-500 ">*</span>
                        </p>
                      </div>
                      <input
                        type="text"
                        // placeholder="Name or Box Type *"
                        className="outline-none p-2  w-[100%] border rounded-md border-[#c4c4c4] placeholder:text-sm  mt-1"
                        onChange={(e) =>
                          setData({ ...data, boxType: e.target.value })
                        }
                        value={data?.boxType}
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] "
                      style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      <div>
                        <p
                          className="font-[400] sm:text-[12px]  text-[10px]"
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                        >
                          Required Size <span className="text-red-500 ">*</span>
                        </p>
                      </div>
                      <input
                        type="text"
                        placeholder="(LxWxH)"
                        className="outline-none p-2 w-[100%] border rounded-md border-[#c4c4c4] placeholder:text-sm mt-1"
                        onChange={(e) =>
                          setData({ ...data, dimentions: e.target.value })
                        }
                        value={data?.dimentions}
                      />
                    </div>
                  </div>

                  <div className="sm:mt-[25px] mt-[14px] w-[100%] flex sm:justify-between items-center sm:flex-row flex-col">
                    <div className="sm:w-[47%] w-[90%] ">
                      <div>
                        <p
                          className="font-[400] sm:text-[12px]  text-[10px]"
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                        >
                          Required Quantity{" "}
                          <span className="text-red-500 ">*</span>
                        </p>
                      </div>

                      <input
                        type="text"
                        // placeholder="Required Quantity *"
                        className="outline-none p-2 w-[100%] border rounded-md border-[#c4c4c4] placeholder:text-sm mt-1 "
                        onChange={(e) =>
                          setData({ ...data, quantity: e.target.value })
                        }
                        value={data?.quantity}
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] "
                      style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      <div>
                        <p
                          className="font-[400] sm:text-[12px]  text-[10px]"
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                        >
                          Delivery Date <span className="text-red-500 ">*</span>
                        </p>
                      </div>

                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          slotProps={{
                            textField: { size: "small", error: false },
                          }}
                          onChange={(e) =>
                            setData({ ...data, deliveryDate: e.target.value })
                          }
                          value={
                            data?.deliveryDate
                            //     ? data?.deliveryDate
                            //     : formattedToday
                          }
                          sx={{
                            width: isDesktopOrLaptop ? "100%" : "100%",
                            marginTop: "4px",
                            outline: "none",
                            borderRadius: "8px",
                          }}
                        />
                      </LocalizationProvider>
                      <div></div>
                    </div>
                  </div>

                  <div className="sm:mt-[25px] mt-[14px] w-[100%] flex sm:justify-between items-center sm:flex-row flex-col">
                    <div className="sm:w-[47%] w-[90%] ">
                      <div>
                        <p
                          className="font-[400] sm:text-[12px]  text-[10px]"
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                        >
                          Select Units <span className="text-red-500 ">*</span>
                        </p>
                      </div>
                      <div className="  w-[100%] h-[42px] border rounded-md border-[#c4c4c4] placeholder:text-sm mt-1 flex justify-center items-center">
                        <select
                          name=""
                          id=""
                          className="w-[94%] h-[95%] outline-none"
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          onChange={(e) =>
                            setData({ ...data, units: e.target.value })
                          }
                          value={data?.units}
                        >
                          <option
                            value=""
                            disabled
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            Select unit
                          </option>
                          <option
                            value="inches"
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            inches
                          </option>
                          <option
                            value="mm"
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            mm
                          </option>
                          <option
                            value="cm"
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            cm
                          </option>
                        </select>
                      </div>

                      {/* <input
                        type="text"
                      
                        className="outline-none p-2 w-[100%] border rounded-md border-[#c4c4c4] placeholder:text-sm mt-1 "
                        onChange={(e) =>
                          setData({ ...data, quantity: e.target.value })
                        }
                        value={data?.quantity}
                      /> */}
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] "
                      style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      <div>
                        <p
                          className="font-[400] sm:text-[12px]  text-[10px]"
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                        >
                          Printing <span className="text-red-500 ">*</span>
                        </p>
                      </div>

                      <div className="  w-[100%] h-[42px] border rounded-md border-[#c4c4c4] placeholder:text-sm mt-1 flex justify-center items-center">
                        <select
                          name=""
                          id=""
                          className="w-[94%] h-[95%] outline-none"
                          onChange={(e) =>
                            setData({ ...data, printing: e.target.value })
                          }
                          value={data.printing}
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                        >
                          <option
                            value=""
                            disabled
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            Select printing color
                          </option>
                          <option
                            value="1 Color"
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            1 Color
                          </option>
                          <option
                            value="2 Color"
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            2 Color
                          </option>
                          <option
                            value="3 Color"
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            3 Color
                          </option>
                          <option
                            value="Full Color"
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            Full Color
                          </option>
                          <option
                            value="Not Sure"
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            Not Sure
                          </option>
                        </select>
                      </div>

                      <div></div>
                    </div>
                  </div>

                  <div className="sm:mt-[25px] mt-[14px] w-[100%] flex sm:justify-between items-center sm:flex-row flex-col">
                    <div className="sm:w-[47%] w-[90%] ">
                      <div>
                        <p
                          className="font-[400] sm:text-[12px]  text-[10px]"
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                        >
                          Upload Artwork
                        </p>
                      </div>
                      <div className="  w-[100%] h-[42px] border rounded-md border-[#c4c4c4] placeholder:text-sm mt-1 flex justify-center items-center">
                        <input
                          type="file"
                          className="w-[94%]  outline-none"
                          onChange={(e) =>
                            setData({ ...data, artImg: e.target.files[0] })
                          }
                        />
                      </div>

                      {/* <input
                        type="text"
                      
                        className="outline-none p-2 w-[100%] border rounded-md border-[#c4c4c4] placeholder:text-sm mt-1 "
                        onChange={(e) =>
                          setData({ ...data, quantity: e.target.value })
                        }
                        value={data?.quantity}
                      /> */}
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%]"
                      style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      {/* <div>
                        <p
                          className="font-[400] sm:text-[12px]  text-[10px]"
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                        >
                          Printing <span className="text-red-500 ">*</span>
                        </p>
                      </div> */}

                      <div className="  w-[100%] h-[92px] rounded-md border-[#c4c4c4] placeholder:text-sm mt-1 flex justify-center items-center">
                        {/* <select
                          name=""
                          id=""
                          className="w-[94%] h-[95%] outline-none"
                          style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                        >
                          <option
                            value=""
                            disabled
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            Select printing color
                          </option>
                          <option
                            value=""
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            1 Color
                          </option>
                          <option
                            value=""
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            2 Color
                          </option>
                          <option
                            value=""
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            3 Color
                          </option>
                          <option
                            value=""
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            Full Color
                          </option>
                          <option
                            value=""
                            style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                          >
                            Not Sure
                          </option>
                        </select> */}
                        <img
                          src={
                            data?.artImg
                              ? data?.artImg
                              : `https://placehold.co/130x90`
                          }
                          alt=""
                          className="h-[90px] w-[130px] rounded-md"
                        />
                      </div>

                      <div></div>
                    </div>
                  </div>

                  <div className="sm:mt-[25px] mt-[14px] w-[100%] ">
                    <div>
                      <p
                        className="font-[400] sm:text-[12px]  text-[10px]"
                        style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                      >
                        Additional Comment
                      </p>
                    </div>
                    <textarea
                      name=""
                      id=""
                      onChange={(e) =>
                        setData({ ...data, comment: e.target.value })
                      }
                      value={data.comment}
                      className="outline-none p-2 sm:h-[150px] w-[100%] border rounded-md border-[#c4c4c4] placeholder:text-sm  mt-1"
                    ></textarea>
                  </div>
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
                  onClick={() => reset()}
                >
                  Reset
                </div>
                <div
                  className="sm:w-[155px] sm:h-[55px] w-[100px] h-[40px] sm:text-[20px] text-[14px] rounded-md flex justify-center items-center bg-[#449F5A] hover:bg-[#6AD37F] font-[600] text-white cursor-pointer"
                  style={{ fontFamily: "Inter" }}
                  onClick={() => saveToDb()}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={1500} />
      <br />
    </div>
  );
};

export default Homeform;
