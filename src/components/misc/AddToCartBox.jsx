import React, { useState } from "react";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";

const AddToCartBox = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="mt-3 flex gap-2">
      {" "}
      <div className="flex space-x-2 items-center mb-2 border-1 rounded-md px-2 py-1 border-green-500">
        <Button
          size="sm"
          className="text-base"
          onClick={() => setQuantity((prev) => Math.max(prev - 1, 0))}
        >
          -
        </Button>
        <span>{quantity}</span>{" "}
        <Button
          size="sm"
          className="text-base"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </Button>
      </div>
      <Button size="lg">
        {" "}
        <ShoppingCartIcon /> Add to cart
      </Button>
    </div>
  );
};

export default AddToCartBox;
