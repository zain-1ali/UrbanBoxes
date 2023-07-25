import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import SingleCategory from "./Pages/SingleCategory";
import SinglePorduct from "./Pages/SinglePorduct";

function App() {
  return (
    <div className="scrollbar-hide">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route
            path="/singlecategory/:categoryid"
            element={<SingleCategory />}
          />
          <Route
            path="/singleproduct/:categoryid/:productid"
            element={<SinglePorduct />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  );
}

export default App;
