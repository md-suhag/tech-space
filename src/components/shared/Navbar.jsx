import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { HeartIcon, Menu, ShoppingCartIcon, User } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-b bg-primary  text-white">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link to="/">TechSpace</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="hidden md:flex space-x-4  items-center">
        <Link to="/">
          {" "}
          <HeartIcon />
        </Link>
        <Link to="/cart">
          {" "}
          <ShoppingCartIcon />
        </Link>

        <Link href="/sing-up">Sign up</Link>

        <Link
          href="/sing-in"
          className="bg-white text-black py-1 px-2 rounded-sm shadow"
        >
          Sign in
        </Link>
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col space-y-4 p-6">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
