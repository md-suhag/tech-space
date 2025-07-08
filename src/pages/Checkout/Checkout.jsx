import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { z } from "zod";

const checkOutSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phone: z
    .string()
    .regex(/^(?:\+8801|8801|01)[0-9]{9}$/, "Invalid Bangladeshi phone number"),

  address: z.string().min(2, "Address is required"),
});

const Checkout = () => {
  const user = useSelector((state) => state.authR.user);
  const cart = useSelector((state) => state.cartR);
  const form = useForm({
    resolver: zodResolver(checkOutSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: "",
      address: "",
    },
  });
  const { isSubmitting } = form.formState;

  async function onSubmit(values) {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <div className="grid  md:grid-cols-2 gap-1 ">
        <div className="order-1 md:order-0">
          <div className="sticky top-7">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6  p-8"
              >
                <h1 className="text-xl font-semibold text-primary">
                  Billing Details
                </h1>

                {/* Root error message */}
                {form.formState.errors.root && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                    {form.formState.errors.root.message}
                  </div>
                )}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground ">
                        Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          className="h-11"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="h-11"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">
                        Phone *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your telephone number"
                          className="h-11"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">
                        Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your address"
                          className="h-11"
                          disabled={isSubmitting}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-11  text-white font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Checkout...
                    </>
                  ) : (
                    "Checkout"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
        <div className=" p-8">
          <h1 className="text-xl font-semibold text-primary">Cart Summary</h1>
          <div className="my-4 ">
            {cart.cartItems.map((item) => (
              <div key={item._id} className="flex  gap-4 border-b p-2">
                <div>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded text-[10px] "
                  />
                </div>
                <div>
                  <p className=" font-normal mb-1 ">{item.name}</p>
                  <p className=" text-sm   text-muted-foreground">
                    ৳{item.price.toFixed(2)} x{" "}
                    <span className="font-medium">{item.quantity}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xl font-semibold">
              Total Price: {cart.totalPrice}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
