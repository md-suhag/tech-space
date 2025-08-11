import React from "react";
import { useSelector } from "react-redux";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";

const Cart = () => {
  const { add, remove, decrease } = useCart();

  const { cartItems, totalPrice, totalQuantity } = useSelector(
    (state) => state.cartR
  );

  const handleRemove = (id) => {
    remove(id);
  };

  const handleIncrease = (item) => {
    add(item, 1);
  };

  const handleDecrease = (item) => {
    decrease(item);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <Container>
        <section className="text-center py-10 text-muted-foreground min-h-screen flex justify-center items-center">
          <div>
            <p className="mb-5">Your cart is empty.</p>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <section className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <h1 className="text-2xl font-semibold text-primary  mb-4 text-center sm:text-left">
          Your Shopping Cart
        </h1>
        <div className="space-y-2">
          {cartItems.map((item) => (
            <Card
              key={item._id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 shadow-sm border rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="size-20 sm:size-24 object-cover rounded-md border"
                />
              )}
              <CardContent className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between w-full p-0">
                <div className="flex-1">
                  <CardTitle className="text-lg font-semibold">
                    {item.name}
                  </CardTitle>
                  <p className="text-muted-foreground mt-1">
                    ৳ {item.price.toFixed(2)} each
                  </p>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDecrease(item)}
                      disabled={item.quantity <= 1}
                      className="h-8 w-8"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-4 text-sm font-medium">
                      {item.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleIncrease(item)}
                      className="h-8 w-8"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm font-medium">
                    Subtotal: ৳ {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRemove(item._id)}
                    className="text-destructive hover:text-destructive/90"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator className="my-8" />
        <Card className="p-6 shadow-md border rounded-lg">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <span className="text-lg font-medium">
              Total Items: {totalQuantity}
            </span>
            <span className="text-2xl font-bold mt-2 sm:mt-0">
              Total: ৳{totalPrice.toFixed(2)}
            </span>
          </div>
          <Button className="w-full" asChild>
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
        </Card>
      </section>
    </Container>
  );
};

export default Cart;
