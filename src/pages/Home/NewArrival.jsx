import ProductCard from "@/components/modules/product/ProductCard";
import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import React from "react";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const { data, isLoading } = useGetAllProductsQuery({ page: 1, limit: 4 });
  return (
    <section className="">
      <h3 className="text-2xl text-primary my-4">New Arrivals</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  my-5">
        {!isLoading &&
          data?.data?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
      </div>
      <div className="text-center my-4">
        <Button asChild>
          <Link to="/products">View All</Link>
        </Button>
      </div>
    </section>
  );
};

export default NewArrival;
