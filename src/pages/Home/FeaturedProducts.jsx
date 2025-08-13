import ProductCard from "@/components/modules/product/ProductCard";
import ProductCardSkeleton from "@/components/modules/product/ProductCardSkeleton";
import { useGetFeaturedProductsQuery } from "@/redux/features/product/productApi";
import React from "react";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetFeaturedProductsQuery();
  return (
    <section className="">
      <h3 className=" text-2xl md:text-4xl text-primary text-center font-bold my-10">
        Featured Products
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  my-5">
        {!isLoading &&
          data?.data?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
      </div>
      {isLoading && <ProductCardSkeleton />}
    </section>
  );
};

export default FeaturedProducts;
