import React from "react";
import logo from "../imgs/Urbanlogo1.png";

const LoadingScreen = () => {
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center">
      <img src={logo} alt="" className="h-[100px] w-[400px]" />
    </div>
  );
};

export default LoadingScreen;
