import { Star } from "lucide-react";
import React from "react";
import AddToCartBox from "@/components/misc/AddToCartBox";
import { Skeleton } from "@/components/ui/skeleton";
const ProductInfo = ({ product, isLoading }) => {
  const rating = product?.totalRating / product?.reviewCount;

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 space-x-3">
        <Skeleton className="h-[125px] w-full rounded-xl" />
        <Skeleton className="h-[125px] w-full rounded-xl" />
      </div>
    );
  }
  return (
    <section>
      <section className="grid md:grid-cols-2 gap-10 py-10">
        {/* Product Image */}
        <div className="m-auto">
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className="max-w-full rounded-xl object-contain aspect-square"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            {product?.name}
          </h1>

          <p className="text-2xl font-bold text-green-600">
            Tk. {product?.price}
          </p>

          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={20}
                className={
                  i <= Math.floor(rating)
                    ? "fill-yellow-400 stroke-yellow-400"
                    : "stroke-gray-300"
                }
              />
            ))}
            <span className="text-sm text-gray-500">
              {/* {data?.data?.reviewCount} reviews */}
            </span>
          </div>

          <p
            className={`text-sm font-medium ${
              product?.stock ? "text-green-600" : "text-red-500"
            }`}
          >
            {product?.stock ? "✔ In Stock" : "✖ Out of Stock"}
          </p>

          <AddToCartBox product={product} />
        </div>
      </section>

      {/* Product Description */}
      <section className="py-6 border-t">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Product Description
        </h2>
        <p className="text-gray-700 leading-relaxed">{product?.description}</p>
      </section>
    </section>
  );
};

export default ProductInfo;
