import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/a", label: "Docs" },
    { to: "/b", label: "ShowCase" },
    { to: "/c", label: "Blog" },
    { to: "/d", label: "Guides" },
  ];

  return (
    <header className="fixed text-white top-0 left-0 w-full backdrop-blur-md bg-gray-900 shadow-lg z-50 transition-all duration-300 border-b border-emerald-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Side - Logo + Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-gray-300 hover:text-emerald-400 transition duration-300"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <Link
            to="/"
            className="text-2xl font-bold text-blue-100 flex items-center space-x-2"
          >
            PixelWind
          </Link>
        </div>

        {/* Right Side - Links + GitHub */}
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300  transition duration-300 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="https://github.com/1-DARK/PixelWind.git"
            className="flex items-center gap-2 text-gray-300 transition duration-300 ease-in-out"
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-900 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-screen w-72 lg:hidden bg-gray-900 border-r border-gray-700 z-50 backdrop-blur-md flex flex-col"
            >
              <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
                <Link
                  to="/"
                  className="text-2xl font-bold text-blue-100"
                  onClick={() => setMenuOpen(false)}
                >
                  PixelWind
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300  transition"
                >
                  <X size={26} />
                </button>
              </div>

              <nav className="flex flex-col gap-5 px-6 py-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300  transition duration-300 ease-in-out"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
