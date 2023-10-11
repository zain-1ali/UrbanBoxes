import React from "react";
import logo from "../imgs/Urbanlogo1.png";

const LoadingScreen = () => {
  return (
    <div className="h-[100vh] w-[100%] flex justify-center items-center">
      <img
        src={logo}
        alt=""
        className="sm:h-[100px] sm:w-[400px] h-[60px] w-[250px]"
      />
    </div>
  );
};

export default LoadingScreen;
