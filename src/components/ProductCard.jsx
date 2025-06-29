import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const rating = product.totalRating / product.reviewCount;

  return (
    <Card className="relative  border rounded-xl overflow-hidden  hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative ">
        <Link to={`/products/${product._id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-40 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <Button
          variant="link"
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition-colors"
        >
          <Heart size={18} />
        </Button>
      </div>

      {/* Details */}
      <CardContent className="flex flex-col gap-2 ">
        {/* Title */}
        <Link to={`/products/${product._id}`}>
          {" "}
          <CardTitle className="line-clamp-2 hover:text-green-600 transition-colors">
            {product.name}
          </CardTitle>
          {/* Description */}
          <CardDescription>
            <div className="flex items-center gap-1 text-yellow-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={12}
                  className={`${
                    i <= Math.floor(rating)
                      ? "fill-yellow-400 stroke-yellow-400"
                      : "stroke-gray-300"
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                ({product.reviewCount})
              </span>
            </div>
            {/* Price */}
            <div className="text-lg font-bold text-primary">
              &#2547;{product.price}
            </div>
          </CardDescription>
        </Link>
        {/* Add to Cart */}{" "}
        <Button className=" flex items-center justify-center gap-2 " size="sm">
          <ShoppingCart size={16} />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
