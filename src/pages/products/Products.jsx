import ProductCard from "@/components/ProductCard";
import React from "react";

const Products = () => {
  return (
    <section className="container grid grid-cols-2 gap-4 px-4 mx-auto my-5 md:grid-cols-3 lg:grid-cols-4 ">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </section>
  );
};

export default Products;
