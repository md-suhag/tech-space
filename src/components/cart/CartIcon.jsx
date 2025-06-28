import { ShoppingCartIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "@/components/ui/badge";

const CartIcon = () => {
  const totalQuantity = useSelector((state) => state.cartR.totalQuantity);
  return (
    <div className="relative">
      {" "}
      <ShoppingCartIcon />
      <Badge className=" bg-white text-black h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute -top-2 -right-2">
        {totalQuantity}
      </Badge>
    </div>
  );
};

export default CartIcon;
