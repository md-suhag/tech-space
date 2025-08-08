import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { HeartIcon, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import CartIcon from "../modules/cart/CartIcon";
import { useSelector } from "react-redux";
import { UserMenu } from "./navbar/UserMenu";
const Navbar = () => {
  const user = useSelector((state) => state.authR.user);
  return (
    <nav className="p-4 text-white border-b bg-primary top-0 sticky z-50">
      <div className="container flex items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">TechSpace</Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="items-center hidden space-x-4 md:flex">
          <Link to="/">
            {" "}
            <HeartIcon />
          </Link>
          <Link to="/cart">
            {" "}
            <CartIcon />
          </Link>
          {user ? (
            <UserMenu name={user.name} email={user.email} />
          ) : (
            <Link
              to="/sign-in"
              className="px-2 py-1 text-black bg-white rounded-sm shadow"
            >
              Sign in
            </Link>
          )}
        </div>{" "}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="" className="text-white md:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col p-6 space-y-4">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </SheetContent>
        </Sheet>
      </div>
      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
