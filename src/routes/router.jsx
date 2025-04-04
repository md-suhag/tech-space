import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Products from "@/pages/products/Products";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import PaymentSuccess from "@/pages/Payment/PaymentSuccess";
import PaymentFail from "@/pages/Payment/PaymentFail";
import Contact from "@/pages/ContactUs/Contact";
import About from "@/pages/AboutUs/About";
import SingUp from "@/pages/SignUp/SingUp";
import SignIn from "@/pages/SignIn/SignIn";
import Dashboard from "@/pages/Dashboard/Dashboard";
import MyOrders from "@/pages/Dashboard/User/MyOrders/MyOrders";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";
import AllOrders from "@/pages/Dashboard/Admin/Orders/AllOrders";
import Customers from "@/pages/Dashboard/Admin/Cutomers/Customers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoutes role="user">
            <Checkout />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/payment/success/:id",
        element: (
          <ProtectedRoutes role="user">
            <PaymentSuccess />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/payment/fail/:id",
        element: (
          <ProtectedRoutes role="user">
            <PaymentFail />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/sign-up",
        element: <SingUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "index",
        element: <Dashboard />,
      },

      {
        path: "my-orders",
        element: (
          <ProtectedRoutes role="user">
            <MyOrders />
          </ProtectedRoutes>
        ),
      },
      {
        path: "customers",
        element: (
          <ProtectedRoutes role="admin">
            <Customers />
          </ProtectedRoutes>
        ),
      },
      {
        path: "all-orders",
        element: (
          <ProtectedRoutes role="admin">
            <AllOrders />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
