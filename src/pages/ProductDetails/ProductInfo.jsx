import { Star } from "lucide-react";
import React from "react";
import AddToCartBox from "@/components/misc/AddToCartBox";
import { Skeleton } from "@/components/ui/skeleton";

const ProductInfo = ({ product, isLoading }) => {
  const rating = product?.totalRating / product?.reviewCount;

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        <Skeleton className="h-96 w-full rounded-2xl" />
        <Skeleton className="h-96 w-full rounded-2xl" />
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 py-12">
        {/* Product Image */}
        <div className="relative group">
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className="w-full h-[400px] object-contain rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            {product?.name}
          </h1>

          <p className="text-3xl font-semibold text-emerald-600">
            Tk. {product?.price}
          </p>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={22}
                  className={`transition-colors duration-200 ${
                    i <= Math.floor(rating)
                      ? "fill-yellow-400 stroke-yellow-400"
                      : "fill-gray-200 stroke-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product?.reviewCount} reviews)
            </span>
          </div>

          <p
            className={`text-base font-medium flex items-center space-x-2 ${
              product?.stock ? "text-emerald-600" : "text-red-500"
            }`}
          >
            <span>{product?.stock ? "✔ In Stock" : "✖ Out of Stock"}</span>
            {product?.stock && (
              <span className="text-gray-500">
                ({product?.stock} available)
              </span>
            )}
          </p>

          <div className="mt-8">
            <AddToCartBox product={product} />
          </div>
        </div>
      </div>

      {/* Product Description */}
      <section className="py-10 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Product Description
        </h2>
        <p className="text-gray-600 leading-7">{product?.description}</p>
      </section>
    </section>
  );
};

export default ProductInfo;
