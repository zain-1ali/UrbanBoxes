import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillStopwatchFill } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Components/MobileNavbar";
import { useDispatch, useSelector } from "react-redux";
import { contactPage } from "../redux/ApiSlice";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  let [msgInfo, setMsgInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  let dispatch = useDispatch();
  let contactData = useSelector((state) => state.ApiSlice.contactData);
  console.log(contactData);
  let location = useLocation();
  let { pathname } = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    dispatch(contactPage());
  }, []);
  const renderHTML = (string) => {
    return { __html: string };
  };

  // -----------------------------------------------save data to db----------------------------------------

  let baseUrl = import.meta.env.VITE_BASE_URL;

  let saveToDb = async () => {
    try {
      await axios
        .post(`${baseUrl}/api/submitContact`, {
          name: msgInfo.name,
          email: msgInfo.email,
          phone: msgInfo.phone,
          message: msgInfo.message,
        })
        .then((resp) => {
          // console.log(resp.data.message);
          setMsgInfo({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          toast.success(resp.data.message);
        });

      // console.log(res);
      //
    } catch (error) {
      // console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  let seoInfo = contactData?.data?.seo;

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 640 });
  return (
    <div className="w-[100%]">
      <Helmet>
        {/* Page Name Schema */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${seoInfo?.pageName}"
            }
          `}
        </script>

        {/* Meta Title */}
        <title>{seoInfo?.metaTitle}</title>

        {/* Meta Tags */}

        <meta name="keywords" content={seoInfo?.metaTag} />

        {/* Meta Description */}
        <meta name="description" content={seoInfo?.metaDescription} />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {`
            ${seoInfo?.breadcrumbSchema}
          `}
        </script>
      </Helmet>
      {isDesktopOrLaptop ? (
        <Navbar />
      ) : (
        <>
          <MobileNavbar />
          <br />
        </>
      )}
      <div className="w-[100%] flex justify-center mt-[40px]">
        <div className="w-[87%] lg:flex justify-between">
          <div className="lg:w-[41%] w-[95%]">
            <div>
              <p
                className="font-[400] text-[18px]"
                style={{ fontFamily: "Roboto" }}
              >
                Full Name
              </p>
              <input
                type="text"
                className="outline-none border border-black h-[50px] lg:w-[400px] w-[300px] mt-2 p-3"
                onChange={(e) =>
                  setMsgInfo({ ...msgInfo, name: e.target.value })
                }
                value={msgInfo?.name}
              />
            </div>

            <div className="mt-4">
              <p
                className="font-[400] text-[18px]"
                style={{ fontFamily: "Roboto" }}
              >
                Email
              </p>
              <input
                type="text"
                className="outline-none border border-black h-[50px] lg:w-[400px] w-[300px] mt-2 p-3"
                onChange={(e) =>
                  setMsgInfo({ ...msgInfo, email: e.target.value })
                }
                value={msgInfo?.email}
              />
            </div>

            <div className="mt-4">
              <p
                className="font-[400] text-[18px]"
                style={{ fontFamily: "Roboto" }}
              >
                Phone
              </p>
              <input
                type="text"
                className="outline-none border border-black h-[50px] lg:w-[400px] w-[300px] mt-2 p-3"
                required
                onChange={(e) =>
                  setMsgInfo({ ...msgInfo, phone: e.target.value })
                }
                value={msgInfo?.phone}
              />
            </div>

            <div className="mt-4">
              <p
                className="font-[400] text-[18px]"
                style={{ fontFamily: "Roboto" }}
              >
                Message
              </p>
              <textarea
                name=""
                id=""
                cols="10"
                rows="5"
                className="outline-none border border-black lg:w-[400px] w-[300px] mt-2 p-3"
                onChange={(e) =>
                  setMsgInfo({ ...msgInfo, message: e.target.value })
                }
                value={msgInfo?.message}
              ></textarea>
              <input type="text" />
            </div>

            <button
              className="h-[45px] w-[140px] text-[16px] font-[400] bg-[#449F5A] outline-none text-white"
              style={{ fontFamily: "Roboto" }}
              onClick={() => saveToDb()}
            >
              Send Message
            </button>
          </div>

          <div className="lg:w-[57%] w-[95%]">
            <h3
              className="font-[600] text-[48px] text-[#449F5A] mt-4"
              style={{ fontFamily: "Roboto" }}
            >
              {contactData?.data?.contact?.heading1}
            </h3>
            <p
              className="font-[500] text-[40px]  mt-2 "
              style={{ fontFamily: "Roboto" }}
            >
              {/* Speak with our experts within a minute. */}
              {contactData?.data?.contact?.heading2}
            </p>
            <p
              className="font-[400] text-[24px]  mt-1"
              style={{ fontFamily: "Roboto" }}
            >
              <div
                dangerouslySetInnerHTML={renderHTML(
                  contactData?.data?.contact?.description
                )}
              />

              {/* {contactData?.data?.contact?.description} */}
            </p>

            <h3
              className="font-[500] text-[32px] text-[#449F5A] mt-2"
              style={{ fontFamily: "Roboto" }}
            >
              Contact
            </h3>
            <div className="w-[87%] flex justify-between sm:mt-[5px] mt-[5px]">
              <div className="flex items-center w-[45%]">
                <RiPhoneFill className="sm:text-2xl text-[7px]  mr-1 sm:mr-2" />
                <p
                  className="  sm:text-[20px] text-[7px] font-[400]   "
                  style={{ fontFamily: "Roboto" }}
                >
                  0000-000-0000
                </p>
              </div>

              <div className="flex items-center  justify-start w-[45%] ">
                <MdEmail className="sm:text-2xl text-[7px]  mr-1 " />
                <p
                  className="  sm:text-[20px] text-[7px] font-[400] ml-1  "
                  style={{ fontFamily: "Roboto" }}
                >
                  {contactData?.data?.contact?.contactEmail}
                </p>
              </div>
            </div>
            <div className="w-[87%] flex justify-between mt-1">
              <div className="flex items-center sm:mt-[20px] mt-[5px]">
                <HiLocationMarker className="sm:text-2xl text-[7px]  mr-1 sm:mr-2" />
                <p
                  className="  sm:text-[20px] text-[7px] font-[400]   "
                  style={{ fontFamily: "Roboto" }}
                >
                  {/* Los Vegas, LV 22001 */}
                  {contactData?.data?.contact?.address}
                </p>
              </div>

              <div className="flex items-center  justify-start w-[45%] sm:mt-[20px] mt-[5px] ">
                <BsFillStopwatchFill className="sm:text-2xl text-[7px]" />
                <p
                  className="  sm:text-[20px] text-[7px] font-[400] ml-2"
                  style={{ fontFamily: "Roboto" }}
                >
                  Mon - Fri: 8:00 - 6:00 PM
                </p>
              </div>
            </div>

            <h3
              className="font-[500] text-[32px] text-[#449F5A] mt-9"
              style={{ fontFamily: "Roboto" }}
            >
              Sales Inquiries
            </h3>
            <div className="w-[87%] flex justify-between sm:mt-[5px] mt-[5px]">
              <div className="flex items-center justify-start ">
                <MdEmail className="sm:text-2xl text-[7px]  mr-1 sm:mr-2" />
                <p
                  className="  sm:text-[20px] text-[7px] font-[400]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {contactData?.data?.contact?.saleEmail}
                </p>
              </div>
              <div className="flex items-center">
                <BsFillStopwatchFill className="sm:text-2xl text-[7px]  mr-1 sm:mr-2" />
                <p
                  className="  sm:text-[20px] text-[7px] font-[400]"
                  style={{ fontFamily: "Roboto" }}
                >
                  {contactData?.data?.contact?.startDay} -{" "}
                  {contactData?.data?.contact?.endDay}:{" "}
                  {contactData?.data?.contact?.startTime} -{" "}
                  {contactData?.data?.contact?.endTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={1500} />
      <Footer bg="#2C703C" textClr="white" />
    </div>
  );
};

export default ContactUs;
