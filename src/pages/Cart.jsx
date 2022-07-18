import React from "react";
import Announce from "../components/Announce";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Cart = () => {
  return (
    <div className="">
      <Announce />
      <Navbar />
      <div className="p-5 ">
        <div className="flex  justify-center items-center text-5xl  ">
          {" "}
          Cart
        </div>
        <div className="flex items-center mt-4 justify-between mobile:flex-col">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:scale-[1.1] ">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer   ">
            <p>Items in your Cart : 3</p>
            <p className="ml-5">Whislist Item:0</p>
          </div>
          <button className="btn hover:scale-[1.1] mobile:mt-3">
            Checkout
          </button>
        </div>
        {/* Central Div */}
        <div className="flex  mt-7 mobile:flex-col ">
          <div className="flex flex-1 flex-col ">
            {/* list of products */}
            <div className="flex items-center w-[100%] h-auto mobile:flex-col  ">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300  "
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812"
                  alt="SImpleImage"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between ">
                  <p>
                    <b className="mr-2">ID:</b>1234
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> Tshirt
                  </p>
                  <p className="flex  ">
                    <b className="mr-2">Color:</b>
                    <div className="bg-red-600 rounded-full w-[20px] h-[20px] hover:scale-[1.1] border-2 cursor-pointer p-[10px] ml-1 "></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b> Small
                  </p>
                </div>
              </div>
              <div className=" flex-auto  flex flex-col justify-center items-center mobile:mt-5 ">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
            <div className="flex items-center w-[100%] h-auto  mobile:flex-col mobile:mt-5 ">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300  "
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812"
                  alt="SImpleImage"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between ">
                  <p>
                    <b className="mr-2">ID:</b>1234
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> Tshirt
                  </p>
                  <p className="flex  ">
                    <b className="mr-2">Color:</b>
                    <div className="bg-red-600 rounded-full w-[20px] h-[20px] hover:scale-[1.1] border-2 cursor-pointer p-[10px] ml-1 "></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b> Small
                  </p>
                </div>
              </div>
              <div className=" flex-auto  flex flex-col justify-center items-center mobile:mt-5">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />
          </div>
          <div className=" p-5 h-[40vh] flex-[0.4] border-2 border-[#8a4af3] w-auto rounded-md shadow-lg flex-col items-center flex ">
            <h1 className="text-[2rem] ">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>$150</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping</p>
              <p>$50</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping Discount</p>
              <p>$50</p>
            </div>
            <div className="flex text-3xl font-bold justify-between mt-3 w-[100%]">
              <p>Total</p>
              <p>$150</p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
