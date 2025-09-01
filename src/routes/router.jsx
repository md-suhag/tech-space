import { lazy } from "react";
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
import SignIn from "@/pages/SignIn/SignIn";
import Dashboard from "@/pages/Dashboard/Dashboard";
const MyOrders = lazy(() => import("@/pages/Dashboard/User/MyOrders/MyOrders"));
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";
const AllOrders = lazy(() =>
  import("@/pages/Dashboard/Admin/Orders/AllOrders")
);
const Customers = lazy(() =>
  import("@/pages/Dashboard/Admin/Cutomers/Customers")
);
import PaymentCancel from "@/pages/Payment/PaymentCancel";
const MyOrderDetails = lazy(() =>
  import("@/pages/Dashboard/User/MyOrders/MyOrderDetails")
);

const AllOrderDetails = lazy(() =>
  import("@/pages/Dashboard/Admin/Orders/AllOrderDetails")
);
const AddProduct = lazy(() =>
  import("@/pages/Dashboard/Admin/AddProduct/AddProduct")
);
const AllProducts = lazy(() =>
  import("@/pages/Dashboard/Admin/AllProducts/AllProducts")
);

const EditProduct = lazy(() =>
  import("@/pages/Dashboard/Admin/EditProduct/EditProduct")
);
import ErrorPage from "@/pages/Error/ErrorPage";
const MyReviews = lazy(() =>
  import("@/pages/Dashboard/User/MyReviews/MyReviews")
);
import PrivacyPolicy from "@/pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions/TermsAndConditions";
import ReturnPolicy from "@/pages/ReturnPolicy/ReturnPolicy";
import SignUp from "@/pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/return-policy",
        element: <ReturnPolicy />,
      },

      {
        path: "/sign-up",
        element: <SignUp />,
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
        path: "my-reviews/",
        element: (
          <ProtectedRoutes role="customer">
            <MyReviews />
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
      {
        path: "add-product",
        element: (
          <ProtectedRoutes role="admin">
            <AddProduct />
          </ProtectedRoutes>
        ),
      },
      {
        path: "all-products",
        element: (
          <ProtectedRoutes role="admin">
            <AllProducts />
          </ProtectedRoutes>
        ),
      },
      {
        path: "edit-product",
        element: (
          <ProtectedRoutes role="admin">
            <EditProduct />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
