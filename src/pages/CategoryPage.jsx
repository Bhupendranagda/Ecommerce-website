import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const CategoryPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's Cloths</h1>
        <div className="flex items-center justify-between mt-3 ">
          <div className="flex mobile:flex-col ">
            <p>Filter by</p>
            <select className="ml-3 border-2 border-silver">
              <option selected disabled value="">
                Size
              </option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
            <select className="ml-3 border-2 border-silver mobile:mt-3 ">
              <option selected disabled value="">
                Color
              </option>
              <option value="">Yellow</option>
              <option value="">Blue</option>
              <option value="">Red</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort By</p>
            <select name="" id="" className="ml-3 border-2 border-silver">
              <option value="">Newest (first)</option>
              <option value="">Oldest (first)</option>
              <option value="">Price (Asc)</option>
              <option value="">Price (Des)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
