import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import Homeproducts from "../Components/Homeproducts";
import Homeform from "../Components/Homeform";
import WhyUs from "../Components/WhyUs";
import HomePremium from "../Components/HomePremium";
import HomeGreen from "../Components/HomeGreen";
import HomeOptions from "../Components/HomeOptions";
import HomeFAQ from "../Components/HomeFAQ";
import HomeBrandTrust from "../Components/HomeBrandTrust";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <div className="w-[100%] scrollbar-hide">
      <Navbar navigate={navigate} />
      <HeroSection />
      <Homeproducts />
      <Homeform />
      <WhyUs />
      <HomePremium />
      <HomeGreen />
      <HomeBrandTrust />
      <HomeOptions />
      <HomeFAQ />
      <Footer />
    </div>
  );
};

export default Home;
