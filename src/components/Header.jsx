import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import mylogonew from "../assets/images/reallogonew.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Blockchain", path: "/services/blockchain" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="backdrop-blur bg-white/80 shadow-sm sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo and Brand Name (Clickable) */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={mylogonew}
            alt="Dexbit Technologies Logo"
            className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-2xl font-extrabold bg-gradient-to-r from-teal-500 via-blue-400 to-red-500 text-transparent bg-clip-text tracking-tight">
            Dexbit <span className="text-gray-800">Technologies</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="relative text-gray-700 font-medium hover:text-blue-600 transition"
            >
              <span className="hover-underline">{label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-gray-700"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-white shadow-sm">
          <nav className="space-y-3 pt-2">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Custom Hover Underline Effect */}
      <style>{`
        .hover-underline::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #2563EB;
          transition: width 0.3s;
          position: absolute;
          bottom: -2px;
          left: 0;
        }
        .hover-underline:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Header;
