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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useAddProductMutation } from "@/redux/features/product/productApi";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";

const addProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z
    .string()
    .min(1, "Price is required")
    .regex(/^\d+$/, "Price must be a number"),
  stock: z
    .string()
    .min(1, "Stock is required")
    .regex(/^\d+$/, "Stock must be a number"),
  category: z.string().min(1, "Category is required"),
  image: z
    .any()
    .refine((file) => file instanceof File, "Image is required")
    .refine(
      (file) => file?.type?.startsWith("image/"),
      "File must be an image"
    ),
});

const AddProduct = () => {
  const [add] = useAddProductMutation();
  const form = useForm({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: "",
      price: "",
      description: "",
      stock: "",
      category: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values) {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      const result = await add(formData).unwrap();

      // Show success message
      toast.success(result.message || "Added successful!");
      form.reset();
    } catch (error) {
      console.error("Add product error:", error);
      // Handle different types of errors
      let errorMessage = "Someting went wrong. try again";

      if (error?.data?.message) {
        errorMessage = error.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (error?.error) {
        errorMessage = "something went wrong";
      }

      // Set form error
      form.setError("root", {
        type: "manual",
        message: errorMessage,
      });

      // Also show toast error
      toast.error(errorMessage);
    }
  }

  return (
    <section className=" m-10">
      <h1 className="text-2xl text-center mb-2">Add New Product</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-8 border border-gray-200 rounded-lg shadow-sm"
        >
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
                <FormLabel className="text-gray-700 font-medium">
                  Product Name
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter product name"
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Description
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter product description"
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
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Category
                </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Computers">Computers</SelectItem>
                    <SelectItem value="SmartPhones">SmartPhones</SelectItem>
                    <SelectItem value="Headphones">Headphones</SelectItem>
                    <SelectItem value="TVs">TVs</SelectItem>
                    <SelectItem value="Gamings">Gamings</SelectItem>
                    <SelectItem value="Cameras">Cameras</SelectItem>
                    <SelectItem value="Watches">Watches</SelectItem>
                    <SelectItem value="Storages">Storages</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Image
                </FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    className=""
                    disabled={isSubmitting}
                    onChange={(e) => {
                      field.onChange(e.target.files?.[0]);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Price
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter product price"
                    className="h-11 pr-10"
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
            name="stock"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">
                  Stock
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter product stock"
                    className="h-11 pr-10"
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
                Adding..
              </>
            ) : (
              "Add Product"
            )}
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default AddProduct;
