import ProductCard from "@/components/modules/product/ProductCard";
import ProductCardSkeleton from "@/components/modules/product/ProductCardSkeleton";
import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import React from "react";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const { data, isLoading } = useGetAllProductsQuery({ page: 1, limit: 8 });
  return (
    <section className="">
      <h3 className="text-2xl md:text-4xl text-primary text-center font-bold my-10">
        New Arrivals
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  my-5">
        {!isLoading &&
          data?.data?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
      </div>
      {isLoading && <ProductCardSkeleton />}
      {!isLoading && (
        <div className="text-center my-4">
          <Button asChild>
            <Link to="/products">View All</Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default NewArrival;
