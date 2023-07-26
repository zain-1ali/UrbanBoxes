import React from "react";

const Coating = () => {
  return (
    <div className="p-1 w-[100%] h-[100%] flex  items-center flex-col justify-center ">
      <div className="w-[100%]  flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center  ">
          <div className="sm:w-[30%] w-[22%] h-[1px]  bg-[#696262] mr-2"></div>
          <h2
            className="sm:text-2xl text-[16px] sm:font-[600] font-[500]"
            style={{ fontFamily: "Poppins" }}
          >
            {/* {isDesktopOrLaptop
              ? "Get Discounted Price Quickly"
              : "Get Discounted Price"} */}
            Coating & Lamination
          </h2>
          <div className="sm:w-[30%] w-[22%] h-[1px]  bg-[#696262] ml-2 "></div>
        </div>

        <p
          className="sm:w-[90%] w-[90%] text-center sm:mt-[20px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#2C2C2C]"
          // w-[70%] text-center mt-[25px] font-[400] text-xl text-[#2C2C2C]
          style={{ fontFamily: "Roboto" }}
        >
          we strive to provide superior services and solutions that surpass your
          expectations. Let us find the ideal packaging solution for your
          project.
        </p>
      </div>
      <div className="overflow-y-scroll h-[80%] w-[100%] scrollbar-hide">
        <div className="flex justify-between mt-[30px] w-[100%] ">
          <div className="w-[23%] h-[320px] shadow-sm rounded-[19px] bg-[#CDF6D8]">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]"></div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Gloss Lamination
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Thin layer that gives the box a glossy surface.
              </p>
            </div>
          </div>
          <div className="w-[23%] h-[320px] shadow-sm rounded-[19px] bg-[#CDF6D8]">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]"></div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Matte Lamination
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Thin film that gives the box a matte surface.
              </p>
            </div>
          </div>
          <div className="w-[23%] h-[320px] shadow-sm rounded-[19px] bg-[#CDF6D8]">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]"></div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                AQ Coating
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Water-based coating that creates a soft semi-gloss surface.
              </p>
            </div>
          </div>
          <div className="w-[23%] h-[320px] shadow-sm rounded-[19px] bg-[#CDF6D8]">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]"></div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                UV Coating
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                UV-cured ink allowing for spot and flood applications.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[30px] w-[100%] ">
          <div className="w-[23%] h-[320px] shadow-sm rounded-[19px] bg-[#CDF6D8]">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]"></div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Varnish
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Inexpensive option that coats and adds surface protection.
              </p>
            </div>
          </div>
          <div className="w-[23%] h-[320px] shadow-sm rounded-[19px] bg-[#CDF6D8]">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]"></div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Metallic Coating
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Add an extra metallic sheen to your box surface.
              </p>
            </div>
          </div>
          <div className="w-[23%] h-[320px] shadow-sm rounded-[19px] bg-[#CDF6D8]">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]"></div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Soft Touch Coating
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Ink coating that produces smooth surface. Cheaper alternative to
                lamination.
              </p>
            </div>
          </div>
          <div className="w-[23%] h-[320px] shadow-sm rounded-[19px] bg-[#CDF6D8]">
            <div className="w-[100%] h-[60%]  flex justify-center items-center">
              <div className="h-[87%] shadow-md w-[90%] bg-white rounded-[19px]"></div>
            </div>
            <div className="w-[100%] h-[35%]  flex flex-col justify-center pl-3">
              <h2
                className="font-[500] text-xl"
                style={{ fontFamily: "Roboto" }}
              >
                Pearlescent Coating
              </h2>
              <p
                className="font-[400] mt-1 w-[92%] text-[12px]"
                style={{ fontFamily: "Roboto" }}
              >
                Give your surface extra decorative shimmer and shine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coating;
