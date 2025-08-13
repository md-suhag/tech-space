import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, ShoppingCart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="pt-8 text-white bg-primary">
      <div className="container grid gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-4 ">
        {/* Brand Section */}
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold ">
            <ShoppingCart size={28} />
            TechSpace
          </h2>
          <p className="mt-2 text-sm text-muted-white">
            Your one-stop shop for all your needs. High-quality products at
            unbeatable prices.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link to="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link to="/return-policy" className="hover:underline">
                Return Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-start gap-4 mt-2">
            <Link to="#" className="hover:text-black">
              <Facebook size={24} />
            </Link>
            <Link to="#" className="hover:text-black">
              <Instagram size={24} />
            </Link>
            <Link to="#" className="hover:text-black">
              <Twitter size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-2 mt-6 text-sm text-center text-white border-t ">
        © {new Date().getFullYear()} TechSpace. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
