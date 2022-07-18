import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const ProductPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center mobile:flex-col mobile:mt-3 mobile:p-3 ">
        <div className="flex flex-1 items-center justify-center ">
          {/* For left side image */}
          <img
            className="w-[80%] h-[80%] shadow-lg rounded-lg hover:scale-[1.1]  ease-in duration-300 "
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/VisitorsCrewneckSweatshirtinWhite11_360x.jpg?v=1642719779"
            alt="produc_img"
          />
        </div>
        <div
          className="flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:items-center 
         "
        >
          {/* Product details right side */}
          <h1 className="title text-[40px] mobile:text-[30px] ">
            Creamy Hoody original
          </h1>
          <p className="pr-[4rem]  text-justify mt-4 mobile:pr-0 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            perspiciatis velit quam nisi quisquam, excepturi voluptas minima
            porro consequuntur quibusdam molestiae accusamus vel cum
            reprehenderit itaque ullam ipsa voluptatibus. Nulla!
          </p>
          <p className="mt-7 text-3xl">
            Price : <b>$70</b>
          </p>
          {/* Color Variant */}
          <div className="flex mt-7">
            Colors
            <div className="bg-red-600 rounded-full w-[2rem] h-[2rem] hover:scale-[1.1] border-2 cursor-pointer p-[10px] ml-5 "></div>
            <div className="bg-blue-400 rounded-full w-[2rem] h-[2rem] hover:scale-[1.1] border-2 cursor-pointer p-[10px] ml-5 "></div>
            <div className="bg-yellow-400 rounded-full w-[2rem] h-[2rem] hover:scale-[1.1] border-2 cursor-pointer p-[10px] ml-5 "></div>
          </div>
          <div className="mt-7 text-2xl ">
            Size
            <select name="" id="" className="ml-5  border-2">
              <option selected disabled value="">
                Select
              </option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
          </div>
          <div className="mt-5">
            <Counter />
          </div>
          <button className="btn hover:scale-[1.1] mt-5 ">Add Cart</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
