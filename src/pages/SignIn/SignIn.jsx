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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as z from "zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { saveToAuth } from "@/redux/features/auth/AuthSlice";
import { toast } from "sonner";
// Form validation schema
const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting } = form.formState;

  // Demo credentials
  const demoAccounts = {
    user: { email: "user@gmail.com", password: "User123#" },
    admin: { email: "admin@gmail.com", password: "Admin123#" },
  };

  const fillDemoCredentials = (role) => {
    const creds = demoAccounts[role];
    if (creds) {
      form.setValue("email", creds.email);
      form.setValue("password", creds.password);
      toast.info(`Demo ${role} credentials filled!`);
    }
  };

  async function onSubmit(values) {
    try {
      const result = await login(values).unwrap();

      dispatch(saveToAuth(result));

      toast.success("Sign in successful!");
      form.reset();

      navigate(from || "/", { replace: true });
    } catch (error) {
      console.error("Sign in error:", error);

      let errorMessage = "Invalid email or password. Please try again.";

      if (error?.data?.message) {
        errorMessage = error.data.message;
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (error?.error) {
        errorMessage = "something went wrong";
      }

      form.setError("root", {
        type: "manual",
        message: errorMessage,
      });

      toast.error(errorMessage);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
              Sign In
            </h1>
            <p className="text-center text-gray-600">
              Welcome back! Please sign in to your account
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 bg-white p-8 border border-gray-200 rounded-lg shadow-sm"
            >
              <div>
                <p className="text-center  mb-1">Demo credentials</p>

                <div className="flex gap-3 justify-center">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fillDemoCredentials("user")}
                  >
                    User
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fillDemoCredentials("admin")}
                  >
                    Admin
                  </Button>
                </div>
              </div>
              {/* Root error message */}
              {form.formState.errors.root && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  {form.formState.errors.root.message}
                </div>
              )}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Email Address
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="h-11 pr-10"
                          disabled={isSubmitting}
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                          disabled={isSubmitting}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
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
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/sign-up"
                  className="font-medium text-primary  hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default SignIn;
