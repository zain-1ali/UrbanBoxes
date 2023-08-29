import React, { useRef, useState } from "react";
import { VscGraph } from "react-icons/vsc";
import { TbDeviceImacCode, TbDeviceMobileStar } from "react-icons/tb";
import { AiOutlineFileSearch } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";

const SingleDescriptionBox = ({ number, icon, heading, description }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const smoothHoverStyle = {
    transition: "transform 0.6s ease-in-out, border 0.6s ease-in-out",
    transform: hovered ? "translateY(-7px)" : "none",
    border: hovered ? "1px solid #ccc" : "1px solid transparent",
  };
  return (
    <div
      className="sm:w-[33%] w-[95%] sm:h-[459px] h-[510px] sm:mt-2 mt-5  flex justify-center items-center relative border transition duration-700 ease-in-out border-transparent hover:border-gray-300 cursor-pointer"
      // className="border border-transparent"
      style={smoothHoverStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      // key={0}
    >
      <div className="w-[90%] h-[87%] ">
        <div className="flex justify-between items-center">
          <h2
            className="text-[45px] text-black font-[700]"
            // style={{ fontFamily: "Poppins", lineHeight: "50px" }}s
          >
            {number}
          </h2>
          {icon}
          {/* <icon className="text-5xl text-[#666]" /> */}
        </div>

        <h2
          className="text-[18px] mt-[7px] text-black font-[700]"
          style={{ fontFamily: "Poppins", lineHeight: "48px" }}
        >
          {heading}
        </h2>
        <p
          className="text-[15px] mt-[6px] text-[#666] font-normal"
          style={{ fontFamily: "Poppins" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const Branding = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  return (
    <div className="w-[100%] mt-[50px] flex flex-col items-center">
      <div className="w-[100%] flex flex-col items-center">
        <div className="w-[95%] flex justify-center items-center mt-[30px] ">
          <div className="sm:w-[38%] w-[23%] h-[1px]  bg-[#696262] mr-2"></div>
          <h2
            className="sm:text-2xl text-[16px] sm:font-[600] font-[500] "
            style={{ fontFamily: "Poppins" }}
          >
            Product Branding
          </h2>
          <div className="sm:w-[38%] w-[23%]  h-[1px]  bg-[#696262] ml-2"></div>
        </div>

        <p
          className="sm:w-[70%] w-[90%] text-center sm:mt-[25px] mt-[13px] font-[400] sm:text-xl text-[14px] text-[#0f0707]"
          style={{ fontFamily: "Roboto" }}
        >
          Our custom boxes are inclusive of everything that you require to
          package your products, ranging from small boxes to customized luxury
          packaging.
        </p>
      </div>

      <div className="w-[87%] flex sm:justify-between justify-center flex-wrap mt-[40px]">
        <div className="sm:w-[33%] w-[95%] sm:h-[459px] h-[150px] mt-2 ">
          <h4
            className="text-[16px] text-[#1d1d1d] font-normal"
            style={{ fontFamily: "Poppins", lineHeight: "16px" }}
          >
            Steps
          </h4>
          <h2
            className="sm:text-[48px] text-[38px] text-[#000] font-[600] mt-[20px] w-[95%]"
            style={{ fontFamily: "Poppins", lineHeight: "48px" }}
          >
            How we do your Branding
          </h2>
        </div>
        <SingleDescriptionBox
          number="01"
          heading="Tech Landscape Assessment and Specialization"
          icon={<VscGraph className="text-5xl text-[#666]" />}
          description="Tech Orchards initiates the branding process by delving into a
          comprehensive assessment of the tech landscape. This involves a
          thorough understanding of industry trends, competitor analysis, and
          pinpointing specific niches within the tech realm. By identifying
          target markets and their distinct needs, Tech Orchards strategically
          positions itself as a go-to solution provider within these specialized
          areas."
        />
        <SingleDescriptionBox
          number="02"
          heading="Digital Brand Strategy Crafting"
          icon={<TbDeviceImacCode className="text-5xl text-[#666]" />}
          description="Crafting the digital brand strategy for Tech Orchards entails
              translating its core values, technological expertise, and
              client-centric approach into a strategic blueprint. This
              encompasses defining the brand's digital voice, tone, and content
              strategy across various digital avenues. The strategy outlines how
              Tech Orchards will interact with its audience through platforms
              like social media, blog content, videos, and other digital
              touchpoints to build brand recognition and authority."
        />
        <SingleDescriptionBox
          number="03"
          heading="Online Visual Identity Forging"
          icon={<AiOutlineFileSearch className="text-5xl text-[#666]" />}
          description="Tech Orchards forges a captivating visual identity in the digital
              realm by meticulously designing an engaging online presence. This
              encompasses designing an intuitively navigable website, fashioning
              a contemporary and memorable logo, curating a harmonious color
              palette, and ensuring a consistent design ethos across all digital
              interfaces. The aim is to create an impactful and enduring visual
              impression that resonates with the company's branding strategy."
        />
        <SingleDescriptionBox
          number="04"
          heading="Tech-Centric Content Creation and Dissemination"
          icon={<TbDeviceMobileStar className="text-5xl text-[#666]" />}
          description="Content lies at the core of Tech Orchards' digital branding
              strategy. Regular creation of insightful and pertinent content
              showcases its technological prowess, educates its audience, and
              addresses their tech-related challenges. This content takes
              diverse forms such as blog articles, infographics, webinars,
              videos, and more. Tech Orchards strategically maps out the
              distribution of this content through avenues like social media,
              email campaigns."
        />

        <div className="sm:w-[33%] w-[95%] h-[459px] mt-2  flex justify-center items-center">
          <div className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded-full hover:bg-white group h-[230px] w-[230px] border border-black cursor-pointer ">
            {/* purple box */}
            <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10 flex justify-center">
              <h2
                className="text-center w-[70%]"
                style={{ fontFamily: "Poppins", lineHeight: "26px" }}
              >
                Have a project in your mind ?
              </h2>
            </span>
            <span className="w-0 h-0  bg-[#00a15f] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
