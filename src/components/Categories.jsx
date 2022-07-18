import React from "react";
import { ApiCategories } from "../apifolder/CategoryApi";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="flex justify-between items-center p-5  mobile:flex-col">
      {ApiCategories.map((category, index) => {
        return <Category index={index} item={category} />;
      })}
    </div>
  );
};

export default Categories;
