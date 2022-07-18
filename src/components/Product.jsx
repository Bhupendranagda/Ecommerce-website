import { duration } from "@material-ui/core";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";

const Product = ({ item }) => {
  const [hoverEffect, setHoverEffect] = useState("opacity-0");
  const icon_style =
    "h-[40px] w-[40px] rounded-full flex bg-white items-center start justify-center cursor-pointer m-3 hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 ";

  const handleHoverEnter = () => {
    setHoverEffect(" opacity-1");
  };
  const handleHoverExit = () => {
    setHoverEffect(" opacity-0");
  };
  return (
    <div
      className="flex flex-1 justify-center items-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative "
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={item.src} alt="product_image" />
      <div
        className={
          `flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100
       ` + hoverEffect
        }
      >
        <div className={icon_style}>
          <ShoppingCartOutlined />
        </div>
        <div className={icon_style}>
          <FavoriteBorderOutlined />
        </div>
        <div className={icon_style}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
