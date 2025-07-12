import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const ProductCardSkeleton = () => {
  return (
    <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4   my-5">
      {[...Array(8)].map((_, i) => (
        <Skeleton key={i} className="h-48 w-full" />
      ))}
    </section>
  );
};

export default ProductCardSkeleton;
