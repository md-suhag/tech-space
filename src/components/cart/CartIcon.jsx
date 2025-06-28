import { ShoppingCartIcon } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { clearMessages } from "@/redux/features/cart/CartSlice";

const CartIcon = () => {
  const totalQuantity = useSelector((state) => state.cartR.totalQuantity);
  const error = useSelector((state) => state.cartR?.error);
  const success = useSelector((state) => state.cartR?.success);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error || success) {
      error && toast.error(error);
      success && toast.success(success);
      dispatch(clearMessages());
    }
  }, [error, success, dispatch]);
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
