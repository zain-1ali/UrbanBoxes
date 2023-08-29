import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import box from "../imgs/box1.png";

const ProductsModal = ({ modal, handleModal }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  let [isForm, setisForm] = useState(false);

  let therow = [1, 2, 3, 4, 5];
  const splideOptions = {
    perPage: 1,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    // gap: "1rem",
    pagination: true,
    // padding: "2rem",
    breakpoints: {
      1200: { perPage: 1 },
      991: { perPage: 1 },
      768: { perPage: 1 },
      500: { perPage: 1 },
      425: { perPage: 1 },
    },
  };

  const style1 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isTabletOrMobile ? 330 : 720,
    height: 440,
    bgcolor: "white",
    boxShadow: 24,
    border: "none",
    outline: "none",
    borderRadius: "18px",
  };

  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isTabletOrMobile ? 330 : 620,
    height: 470,
    bgcolor: "white",
    boxShadow: 24,
    border: "none",
    outline: "none",
    borderRadius: "18px",
  };

  return (
    <Modal
      open={modal}
      onClose={() => handleModal()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={isForm ? style2 : style1}>
        {!isForm ? (
          <div className="w-[100%] h-[100%] ">
            <div className="w-[98%] flex justify-end  mt-[10px]">
              <RxCross2
                className="text-black cursor-pointer text-xl"
                onClick={() => handleModal()}
              />
            </div>
            <div className="w-[100%] flex justify-center ">
              <div className="w-[80%] h-[325px]">
                <Splide options={splideOptions}>
                  {therow.map((elm, i) => {
                    return (
                      <SplideSlide key={i} className="pb-[10px] pt-[10px]">
                        <div className="w-[377px] h-[298px] rounded-[30px] bg-white  shadow-xl ml-[90px] flex justify-center items-center transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-150 duration-[2000ms] cursor-pointer hover:z-40">
                          <img
                            src={box}
                            alt=""
                            className="h-[220px] w-[270px] rounded-md"
                          />
                        </div>
                      </SplideSlide>
                    );
                  })}
                </Splide>
              </div>
            </div>

            <div className="w-[100%] flex justify-center ">
              <div className="w-[90%] flex justify-end ">
                <button
                  className="w-[129px] h-[51px] bg-[#449F5A] hover:bg-[#6AD37F] rounded-[8px] text-white  font-[500] mt-3"
                  onClick={() => setisForm(true)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-[100%] h-[100%] ">
            <div className="w-[98%] flex justify-end  mt-[10px]">
              <RxCross2
                className="text-black cursor-pointer text-2xl"
                onClick={() => {
                  handleModal(), setisForm(false);
                }}
              />
            </div>
            <div className="w-[100%]">
              <h2
                className="text-center text-[24px] font-[600]"
                style={{ fontFamily: "Roboto" }}
              >
                Order Now
              </h2>
              <p
                className="text-center text-[#323A43] text-[12px] font-[400]"
                style={{ fontFamily: "Roboto" }}
              >
                Fill below form & one of our Packaging Consultant will get back
                to you asap.
              </p>
            </div>
            <div className="w-[100%] flex items-center flex-col mt-[30px]">
              <div className="w-[90%]  flex justify-around">
                <div className=" w-[150px] ">
                  <div>
                    <p
                      className="font-[400] text-[11px]"
                      style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                    >
                      Product {/* <span className="text-red-500 ">*</span> */}
                    </p>
                  </div>
                  <select
                    name=""
                    id=""
                    className="outline-none text-[12px] w-[100%] border rounded-xl border-[#c4c4c4] placeholder:text-sm mt-1 h-[32px]"
                  >
                    <option value="Big box">Big Boxes</option>
                  </select>
                </div>
                <div className=" w-[150px] ">
                  <div>
                    <p
                      className="font-[400] text-[11px]"
                      style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                    >
                      Quantity {/* <span className="text-red-500 ">*</span> */}
                    </p>
                  </div>
                  <select
                    name=""
                    id=""
                    className="outline-none text-[12px] w-[100%] border rounded-xl border-[#c4c4c4] placeholder:text-sm mt-1 h-[32px]"
                  >
                    <option value="100">100</option>
                  </select>
                </div>
                <div className=" w-[150px] ">
                  <div>
                    <p
                      className="font-[400] text-[11px]"
                      style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                    >
                      Name {/* <span className="text-red-500 ">*</span> */}
                    </p>
                  </div>

                  <input
                    type="text"
                    // placeholder="Required Quantity *"
                    className="outline-none p-2 w-[100%] border rounded-xl border-[#c4c4c4] placeholder:text-sm mt-1 h-[32px]"
                    // onChange={(e) =>
                    //   setData({ ...data, quantity: e.target.value })
                    // }
                    // value={data?.quantity}
                  />
                </div>
              </div>

              <div className="w-[90%]  flex justify-start mt-[20px]">
                <div className=" w-[150px] ml-[20px]">
                  <div>
                    <p
                      className="font-[400] text-[11px]"
                      style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                    >
                      Email {/* <span className="text-red-500 ">*</span> */}
                    </p>
                  </div>

                  <input
                    type="text"
                    // placeholder="Required Quantity *"
                    className="outline-none p-2 w-[100%] border rounded-xl border-[#c4c4c4] placeholder:text-sm mt-1 h-[32px]"
                    // onChange={(e) =>
                    //   setData({ ...data, quantity: e.target.value })
                    // }
                    // value={data?.quantity}
                  />
                </div>

                <div className=" w-[150px] ml-[35px]">
                  <div>
                    <p
                      className="font-[400] text-[11px]"
                      style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                    >
                      Phone {/* <span className="text-red-500 ">*</span> */}
                    </p>
                  </div>

                  <input
                    type="text"
                    // placeholder="Required Quantity *"
                    className="outline-none p-2 w-[100%] border rounded-xl border-[#c4c4c4] placeholder:text-sm mt-1 h-[32px]"
                    // onChange={(e) =>
                    //   setData({ ...data, quantity: e.target.value })
                    // }
                    // value={data?.quantity}
                  />
                </div>
              </div>

              <div className=" w-[85%] mt-[25px]">
                <div>
                  <p
                    className="font-[400] text-[11px]"
                    style={{ fontFamily: "Roboto", lineHeight: "13px" }}
                  >
                    Description {/* <span className="text-red-500 ">*</span> */}
                  </p>
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="outline-none text-[12px] p-3 w-[100%] border rounded-xl border-[#c4c4c4] placeholder:text-sm mt-1 h-[82px]"
                ></textarea>
              </div>

              <div className="w-[85%] flex justify-end mt-[20px]">
                <button
                  className="w-[110px] h-[45px] bg-[#449F5A] hover:bg-[#6AD37F] rounded-[8px] text-white  font-[500] mt-3"
                  // onClick={() => setisForm(true)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </Box>
    </Modal>
  );
};

export default ProductsModal;
