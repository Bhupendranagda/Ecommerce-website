import React from "react";

const Category = ({ item }) => {
  return (
    <div className="flex-1 shadow-2xl m-2 rounded-md overflow-hidden relative">
      <img src={item.src} alt="Category Image" className="w-[100%]" />
      <div className="flex absolute w-[100%] h-[100%] justify-center items-center z-10 flex-col left-0 top-0">
        <h2 className="text-white text-[30px] font-medium ">{item.title}</h2>
        <button className="btn hover: scale-[1.1] hover:bg-blue-500">
          See More..
        </button>
      </div>
    </div>
  );
};

export default Category;
