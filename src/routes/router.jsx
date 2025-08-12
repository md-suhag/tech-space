import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
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
import PaymentCancel from "@/pages/Payment/PaymentCancel";
import MyOrderDetails from "@/pages/Dashboard/User/MyOrders/MyOrderDetails";
import AllOrderDetails from "@/pages/Dashboard/Admin/Orders/AllOrderDetails";

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
          <ProtectedRoutes role="customer">
            <Checkout />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/payment/success/:id",
        element: (
          <ProtectedRoutes role="customer">
            <PaymentSuccess />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/payment/fail/:id",
        element: (
          <ProtectedRoutes role="customer">
            <PaymentFail />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/payment/cancel/:id",
        element: (
          <ProtectedRoutes role="customer">
            <PaymentCancel />
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
        index: true,
        element: <Dashboard />,
      },

      {
        path: "my-orders/",
        element: (
          <ProtectedRoutes role="customer">
            <Outlet />
          </ProtectedRoutes>
        ),
        children: [
          {
            index: true,
            element: <MyOrders />,
          },
          {
            path: ":id",
            element: <MyOrderDetails />,
          },
        ],
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
        path: "all-orders/",
        element: (
          <ProtectedRoutes role="admin">
            <Outlet />
          </ProtectedRoutes>
        ),
        children: [
          {
            index: true,
            element: <AllOrders />,
          },
          {
            path: ":id",
            element: <AllOrderDetails />,
          },
        ],
      },
    ],
  },
]);

export default router;
