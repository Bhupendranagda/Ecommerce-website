import React from "react";
import { ApiTopPropduct } from "../apifolder/TopProductsApi";
import Product from "./Product";

const Products = () => {
  return (
    <div className="flex flex-wrap p-5 ">
      {ApiTopPropduct.map((p, index) => {
        return <Product item={p} key={index} />;
      })}
    </div>
  );
};

export default Products;
