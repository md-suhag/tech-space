import React from "react";
import Container from "@/components/shared/Container";
import AddToCartBox from "@/components/misc/AddToCartBox";
import { Star } from "lucide-react";

const ProductDetails = () => {
  const inStock = true;
  const rating = 4.2;
  const totalReviews = 129;

  return (
    <Container>
      {/* Product Image + Info */}
      <section className="grid md:grid-cols-2 gap-10 py-10">
        {/* Product Image */}
        <div className="m-auto">
          <img
            src="/sumsung.jpg"
            alt="Samsung Galaxy A50s"
            className="max-w-full rounded-xl object-contain aspect-square"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            Samsung Galaxy A50s
          </h1>

          <p className="text-2xl font-bold text-green-600">$500</p>

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
              {totalReviews} reviews
            </span>
          </div>

          <p
            className={`text-sm font-medium ${
              inStock ? "text-green-600" : "text-red-500"
            }`}
          >
            {inStock ? "✔ In Stock" : "✖ Out of Stock"}
          </p>

          <AddToCartBox />
        </div>
      </section>

      {/* Product Description */}
      <section className="py-6 border-t">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Product Description
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          repudiandae, vitae hic, velit similique molestias sunt odio dicta fuga
          itaque magni beatae ex dolorem, dolorum ab pariatur voluptates eaque
          nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          doloribus quas deserunt quidem aut facere laudantium, labore
          accusantium impedit voluptas.
        </p>
      </section>

      {/* Customer Reviews */}
      <section className="py-6 border-t">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Customer Reviews ({totalReviews})
        </h2>

        <div className="space-y-4">
          {/* Single Review */}
          {[1, 2, 3].map((id) => (
            <div key={id} className="border rounded-md p-4 shadow-sm">
              <div className="flex items-center space-x-2 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i <= 4
                        ? "fill-yellow-400 stroke-yellow-400"
                        : "stroke-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700">
                Great phone for the price! Battery life is decent and display
                quality is good.
              </p>
              <p className="text-xs text-gray-400 mt-1">— John Doe</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default ProductDetails;
