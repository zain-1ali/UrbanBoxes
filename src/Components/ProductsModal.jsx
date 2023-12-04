import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import box from "../imgs/box1.png";

const ProductsModal = ({ modal, handleModal, gallary }) => {
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

  console.log(gallary);

  return (
    <Modal
      open={modal}
      onClose={() => handleModal()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={isForm ? style2 : style1}>
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
                {gallary?.map((elm, i) => {
                  return (
                    <SplideSlide key={i} className="pb-[10px] pt-[10px]">
                      <div className="w-[377px] object-cover h-[298px] rounded-[30px] bg-white  shadow-xl ml-[90px] flex justify-center items-center transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-150 duration-[2000ms] cursor-pointer hover:z-40">
                        <img
                          src={elm?.image}
                          alt=""
                          className="h-[220px] w-[270px] rounded-md object-cover"
                        />
                      </div>
                    </SplideSlide>
                  );
                })}
              </Splide>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ProductsModal;
