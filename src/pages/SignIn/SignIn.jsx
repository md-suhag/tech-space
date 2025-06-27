import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignIn = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <Container>
      <Form {...form} className="">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 md:w-1/2 max-w-[500px] m-auto  my-20 p-3 border rounded-md"
        >
          <h1 className=" text-2xl text-center mt-4 text-gray-800">
            Sign In to your account
          </h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  Enter your Email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} />
                </FormControl>
                <FormDescription className="sr-only">
                  Enter your Password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full ">
            Sign In
          </Button>

          <FormDescription className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/sign-up" className="underline underline-offset-4">
              Sign up
            </Link>
          </FormDescription>
        </form>
      </Form>
    </Container>
  );
};

export default SignIn;
