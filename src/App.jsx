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

function App() {
  return (
    <div className="scrollbar-hide">
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
            path="/singleproduct/:categoryid/:productid"
            element={<SinglePorduct />}
          />

          <Route path="/gogreen" element={<GoGreen />} />
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
