import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

const Contactbar = () => {
  return (
    <>
      <br className="bg-[#007240] " />
      {/* <br /> */}
      {/* <br className="bg-[#007240] " /> */}
      <div className="fixed bottom-0 left-0 right-0  bg-white  w-[100%] h-[44px] shadow-md flex justify-between">
        <div className="w-[50%] h-[100%] bg-[#007240] flex justify-center items-center text-white font-[500]">
          <BiSolidPhoneCall className="text-2xl mr-[10px]" />
          LET'S CALL
        </div>
        <div className="w-[35%] h-[100%] bg-[#007240] flex justify-center items-center text-white font-[500]">
          <GrMail className="text-xl mr-[10px]" />
          Message
        </div>
      </div>
    </>
  );
};

export default Contactbar;
