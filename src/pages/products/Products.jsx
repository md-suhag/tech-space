import ProductCard from "@/components/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import React from "react";

const Products = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data);
  return (
    <section className="container grid grid-cols-2 gap-4 px-4 mx-auto my-5 md:grid-cols-3 lg:grid-cols-4 ">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading products</p>}
      {data?.data?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default Products;
