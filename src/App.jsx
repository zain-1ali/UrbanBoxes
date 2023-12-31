import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
  // useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import SingleCategory from "./Pages/SingleCategory";
import SinglePorduct from "./Pages/SinglePorduct";
import GoGreen from "./Pages/GoGreen";
import LuxuryFinishes from "./Pages/LuxuryFinishes";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Contactbar from "./Components/Contactbar";
import { useMediaQuery } from "react-responsive";
import ByStyle from "./Pages/ByStyle";
import { useDispatch, useSelector } from "react-redux";
import { siteData } from "./redux/SettingsApiSlice";
import LoadingScreen from "./Components/LoadingScreen";
import CustomPage from "./Pages/CustomPage";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 500 });
  let dispatch = useDispatch();
  const loading = useSelector((state) => state.siteDetails.loading);
  useEffect(() => {
    dispatch(siteData());
  }, []);

  return (
    <div className="scrollbar-hide">
      {loading ? (
        <LoadingScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            {/* <ScrollToTop> */}
            <Route path="/" element={<Home />} />
            {/* </ScrollToTop> */}
            <Route path="/category" element={<Category />} />
            <Route
              path="/singlecategory/:categoryid"
              element={<SingleCategory />}
            />
            <Route
              path="/singleproduct/:productid"
              element={<SinglePorduct />}
            />

            <Route path="/gogreen" element={<GoGreen />} />

            <Route path="/luxurayFinishes" element={<LuxuryFinishes />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/bystyle" element={<ByStyle />} />
            <Route path="/customPage/:pageid" element={<CustomPage />} />
          </Routes>
          {isMobile && <Contactbar />}
        </BrowserRouter>
      )}
      {/* <Home /> */}
    </div>
  );
}

export default App;
