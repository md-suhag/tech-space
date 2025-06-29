import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { removeFromCart } from "@/redux/features/cart/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartItems, totalPrice, totalQuantity } = useSelector(
    (state) => state.cartR
  );

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <Container>
        <div className="text-center py-10 text-muted-foreground">
          Your cart is empty.
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <section className="max-w-3xl py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="space-y-2">
          {cartItems.map((item) => (
            <Card
              key={item._id}
              className="flex flex-row items-center gap-4 shadow-sm border"
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="size-16 md:size-24 object-cover rounded-md border"
                />
              )}
              <CardContent className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between w-full">
                <div>
                  <CardTitle>{item.name}</CardTitle>
                  <p className="text-muted-foreground">${item.price} each</p>
                  <p className="text-sm">Quantity: {item.quantity}</p>
                </div>
                <div className="flex gap-2 mt-1 sm:mt-0">
                  <Button
                    variant="outline"
                    onClick={() => handleRemove(item._id)}
                  >
                    Remove
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator className="my-6" />
        <div className="flex justify-between items-center text-lg font-medium">
          <span>Total Items: {totalQuantity}</span>
          <span>Total Price: ${totalPrice.toFixed(2)}</span>
        </div>{" "}
        <Button className="mt-4 w-full" asChild>
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>
      </section>
    </Container>
  );
};

export default Cart;
