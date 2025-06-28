import ProductCard from "@/components/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Products = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <section className="container grid grid-cols-2 gap-4 px-4 mx-auto my-5 md:grid-cols-3 lg:grid-cols-4 ">
      {isLoading && (
        <>
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-48 w-full" />
        </>
      )}
      {error && <p>Error loading products</p>}
      {data?.data?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </section>
  );
};

export default Products;
