import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-tertiary max-padd-container text-white py-12 rounded-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div className="flex flex-col items-center md:items-start">
          <Link to={"/"} className="bold-24 mb-4">
            <h3>
              Glam<span className="text-secondary">Store</span>
            </h3>
          </Link>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            nihil id nobis similique quae eaque optio, ea in voluptas sed
            laboriosam.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4">Quick Links</h4>
          <ul className="space-y-2 regular-15 text-gray-30">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-secondary">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-secondary">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-secondary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* E-commerce Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4">E-commerce Links</h4>
          <ul className="space-y-2 regular-15 text-gray-30">
            <li>
              <Link to="/terms" className="hover:text-secondary">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-secondary">Shipping Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
