import React from "react";
import { Search } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Navbar = () => {
  const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-[10px] ";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10 ">
      <div
        className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex items-center justify-between 
      mobile:pl-0 mobile:pr-0
      "
      >
        {/*  Left Div*/}
        <div className="left flex flex-1 items-center">
          <div className="language cursor-pointer text-[16px] mobile:hidden ">
            En
          </div>
          <div
            className="searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px]
           focus-within:border-[#8a4af3] transition-all"
          >
            <input type="text" className="input outline-none mobile:w-[50px]" />
            <Search className="!text-sm" />
          </div>
        </div>
        {/* Center Div */}
        <div className="center flex-1 text-center">
          <div className="logo font-bold text-lg mobile:text-sm">
            Summer Kings
          </div>
        </div>
        {/* Right Div */}
        <div className="flex-1 right justify-end flex items-center mobile:flex-[1.5] mobile:justify-center ">
          <div className={style}>Register</div>
          <div className={style}>Sign in</div>
          <div className={style}>
            <Badge color="primary" badgeContent={2}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
