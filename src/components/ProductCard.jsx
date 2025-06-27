import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const rating = product.totalRating / product.reviewCount;

  const isNew = true;

  return (
    <Card className="relative flex flex-col border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
      {/* Image */}
      <div className="relative ">
        <Link to={`/products/${product._id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        {isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded shadow">
            NEW
          </span>
        )}
        <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition-colors">
          <Heart size={18} />
        </button>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-2 p-4">
        {/* Title */}
        <Link to={`/products/${product._id}`}>
          {" "}
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 hover:text-green-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i <= Math.floor(rating)
                  ? "fill-yellow-400 stroke-yellow-400"
                  : "stroke-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Add to Cart */}
        <Button
          className="mt-2 flex items-center justify-center gap-2 text-sm bg-green-600 hover:bg-green-700 text-white w-full"
          size="sm"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
