import React from "react";

const Counter = () => {
  return (
    <div className="flex items-center justify-center text-2xl  ">
      Quantity
      <div className="flex shadow-md ml-5 ">
        <div className="bg-[#8a4af3] w-8 text-white flex items-center justify-center cursor-pointer rounded-l-md">
          -
        </div>
        <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3] ">
          1
        </div>
        <div className="bg-[#8a4af3] w-8 text-white flex items-center justify-center cursor-pointer rounded-r-md">
          +
        </div>
      </div>
    </div>
  );
};

export default Counter;
