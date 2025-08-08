import {
  addToCart,
  clearCart,
  removeFromCart,
} from "@/redux/features/cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "sonner";

export const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartR.cartItems);

  const add = (product, quantityToAdd = 1) => {
    const existing = cartItems.find((item) => item._id === product._id);
    const currentQty = existing ? existing.quantity : 0;
    const newQty = currentQty + quantityToAdd;

    if (newQty > product.stock) {
      toast.error(`Only ${product.stock - currentQty} left in stock.`);
      return false;
    }

    dispatch(addToCart({ ...product, quantityToAdd }));
    toast.success(`Added ${quantityToAdd} x ${product.name} to cart.`);
    return true;
  };

  const remove = (productId) => {
    dispatch(removeFromCart(productId));
    toast.success("Removed item from cart.");
  };

  const clear = () => {
    dispatch(clearCart());
    toast.success("Cleared the cart.");
  };

  return {
    cartItems,
    add,
    remove,
    clear,
  };
};
