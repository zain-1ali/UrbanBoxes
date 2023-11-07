import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
// import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import {
  BsBuildingsFill,
  BsFillPersonFill,
  BsTelephoneFill,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { RxCross2 } from "react-icons/rx";
// import { BsPlusLg } from "react-icons/bs";
// import { MdModeEdit } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

const HeaderFormModal = ({ handleHeaderForm, headerForm }) => {
  // console.log(link);

  //   const dispatch = useDispatch();
  //   let navigate = useNavigate();

  // Modal box style
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 640,
    height: 370,
    bgcolor: "white",
    borderRadius: "18px",
    boxShadow: 24,
  };

  return (
    <>
      <Modal
        open={headerForm}
        onClose={() => {
          handleHeaderForm();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <>
            <div className="w-[100%] h-[100%] overflow-y-scroll scrollbar-hide">
              <div className="w-[100%] flex flex-col items-center">
                <div className="w-[90%] flex justify-center items-center mt-[30px]">
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
                        // onChange={(e) =>
                        //   setData({ ...data, name: e.target.value })
                        // }
                        // value={data?.name}
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] border rounded-md border-[#c4c4c4] flex justify-end items-center"
                      //   style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      <MdEmail className="text-[#449F5A] text-2xl " />
                      <input
                        type="text"
                        placeholder="Email"
                        className="outline-none p-2 w-[85%] placeholder:text-sm mr-1"
                        // onChange={(e) =>
                        //   setData({ ...data, email: e.target.value })
                        // }
                        // value={data?.email}
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
                        // onChange={(e) =>
                        //   setData({ ...data, phone: e.target.value })
                        // }
                        // value={data?.phone}
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] border rounded-md border-[#c4c4c4] flex justify-end items-center"
                      //   style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
                    >
                      <BsBuildingsFill className="text-[#449F5A] text-2xl " />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="outline-none p-2 w-[85%] placeholder:text-sm mr-1"
                        // onChange={(e) =>
                        //   setData({ ...data, company: e.target.value })
                        // }
                        // value={data?.company}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[100%] flex justify-center">
                <div
                  className="sm:w-[95%] w-[87%]  sm:mt-[35px] mt-[20px]  pr-2"
                  //   style={{ overflowY: "scroll", overflowX: "hidden" }}
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
                        // onChange={(e) =>
                        //   setData({ ...data, boxType: e.target.value })
                        // }
                        // value={data?.boxType}
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] "
                      //   style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
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
                        // onChange={(e) =>
                        //   setData({ ...data, dimentions: e.target.value })
                        // }
                        // value={data?.dimentions}
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
                        // onChange={(e) =>
                        //   setData({ ...data, quantity: e.target.value })
                        // }
                        // value={data?.quantity}
                      />
                    </div>
                    <div
                      className="sm:w-[47%] w-[90%] "
                      //   style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
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
                          //   onChange={(e) =>
                          //     setData({ ...data, deliveryDate: e.target.value })
                          //   }
                          //   value={
                          //     data?.deliveryDate
                          //   }
                          sx={{
                            width: "100%",
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
                          //   onChange={(e) =>
                          //     setData({ ...data, units: e.target.value })
                          //   }
                          //   value={data?.units}
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
                      //   style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
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
                          //   onChange={(e) =>
                          //     setData({ ...data, printing: e.target.value })
                          //   }
                          //   value={data.printing}
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
                          //   onChange={(e) =>
                          //     setData({ ...data, artImg: e.target.files[0] })
                          //   }
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
                      //   style={isDesktopOrLaptop ? null : { marginTop: "14px" }}
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
                            // data?.artImg
                            //   ? data?.artImg
                            //   :
                            `https://placehold.co/130x90`
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
                      //   onChange={(e) =>
                      //     setData({ ...data, comment: e.target.value })
                      //   }
                      //   value={data.comment}
                      className="outline-none p-2 sm:h-[150px] w-[100%] border rounded-md border-[#c4c4c4] placeholder:text-sm  mt-1"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Box>
      </Modal>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </>
  );
};

export default HeaderFormModal;
