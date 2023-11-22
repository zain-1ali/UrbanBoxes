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
import { MdOutlineCancel } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import { BsPlusLg } from "react-icons/bs";
// import { MdModeEdit } from "react-icons/md";
// import { useNavigate } from "react-router-dom";

const CallBackFormModal = ({ handleCallBackForm, callBackForm }) => {
  // console.log(link);

  //   const dispatch = useDispatch();
  //   let navigate = useNavigate();

  // Modal box style
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 900,
    height: 500,
    bgcolor: "white",
    borderRadius: "18px",
    boxShadow: 24,
    outline: "none",
  };
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    comment: "",
  });
  return (
    <>
      <Modal
        open={callBackForm}
        onClose={() => {
          handleCallBackForm();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <>
            <div className="w-[100%] h-[100%]">
              <div className="w-[99%] flex justify-end mt-2">
                <MdOutlineCancel
                  className="cursor-pointer text-2xl"
                  onClick={() => handleCallBackForm()}
                />
              </div>
              <h2
                style={{ fontFamily: "Roboto" }}
                className="text-center font-[600] text-[40px] text-[#449F5A] w-[100%] mt-1"
              >
                Request a Call Back
              </h2>

              <div className="w-[100%] flex justify-evenly items-center mt-7">
                <div className="w-[30%]">
                  <p
                    className="font-[400] sm:text-[12px]  text-[10px]"
                    style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                  >
                    Full Name<span className="text-red-500 ">*</span>
                  </p>

                  <div className="w-[100%] h-[50px] border rounded-[10px] flex justify-center items-center mt-1">
                    <input
                      type="text"
                      className="w-[90%] h-[90%] outline-none"
                      placeholder="Full Name*"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      value={formData?.name}
                    />
                  </div>
                </div>

                <div className="w-[30%]">
                  <p
                    className="font-[400] sm:text-[12px]  text-[10px]"
                    style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                  >
                    Phone<span className="text-red-500 ">*</span>
                  </p>

                  <div className="w-[100%] h-[50px] border rounded-[10px] flex justify-center items-center mt-1">
                    <input
                      type="text"
                      className="w-[90%] h-[90%] outline-none"
                      placeholder="Phone"
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      value={formData?.phone}
                    />
                  </div>
                </div>

                <div className="w-[30%]">
                  <p
                    className="font-[400] sm:text-[12px]  text-[10px]"
                    style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                  >
                    Preferred Time and day to Call
                    <span className="text-red-500 "> *</span>
                  </p>
                  <div className="w-[100%] h-[50px] border rounded-[10px] flex justify-center items-center mt-1">
                    <input
                      type="text"
                      className="w-[90%] h-[90%] outline-none"
                      placeholder="Email"
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      value={formData?.email}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 w-[100%] ">
                <p
                  className="font-[400] sm:text-[12px]  text-[10px] ml-5 w-[100px]"
                  style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                >
                  Comments
                </p>
                <div className="w-[100%] flex justify-center items-center ">
                  <textarea
                    name="
                "
                    id=""
                    className="w-[95%] h-[150px] border outline-none rounded-[10px]  pl-[10px] pt-[10px] mt-1"
                    placeholder="Comments"
                  ></textarea>
                </div>
              </div>

              <div className="w-[100%] flex justify-center mt-4">
                <div
                  className="w-[18%] h-[50px] border rounded-[10px] flex justify-center items-center bg-[#449F5A] text-white text-[18px] font-[500] cursor-pointer"
                  style={{ fontFamily: "Roboto" }}
                >
                  Submit
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

export default CallBackFormModal;
