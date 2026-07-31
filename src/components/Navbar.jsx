import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Ocolus</div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#features">Store</a></li>
        <li><a href="#features">Product</a></li>
        <li><a href="#features">Page</a></li>
        <li><a href="#features">Shop</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
      <div className="nav-icons">
        <Search size={20} className="icon" />
        <User size={20} className="icon" />
        <ShoppingBag size={20} className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;