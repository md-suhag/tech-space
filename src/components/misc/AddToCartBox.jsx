import React, { useState } from "react";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useCart } from "@/hooks/useCart";

const AddToCartBox = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { add } = useCart();

  const maxStock = product?.stock ?? 0;

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => Math.min(prev + 1, maxStock));
  };

  const handleInputChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = 1;
    if (val < 1) val = 1;
    if (val > maxStock) val = maxStock;
    setQuantity(val);
  };

  const handleAddToCart = () => {
    if (quantity > 0 && quantity <= maxStock) {
      add(product, quantity);
    }
  };

  return (
    <div className="mt-3 flex gap-2">
      {" "}
      <div className="flex space-x-2 items-center mb-2 border-1 rounded-md px-2 py-1 border-green-500">
        <Button size="sm" className="text-base" onClick={handleDecrease}>
          -
        </Button>
        <Input
          type="number"
          min="1"
          max={maxStock}
          value={quantity}
          onChange={handleInputChange}
          className="w-16 text-center"
        />
        <Button size="sm" className="text-base" onClick={handleIncrease}>
          +
        </Button>
      </div>
      <Button
        size="lg"
        onClick={handleAddToCart}
        disabled={maxStock === 0 || quantity > maxStock}
      >
        {" "}
        <ShoppingCartIcon /> Add to cart
      </Button>
    </div>
  );
};

export default AddToCartBox;
