import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/a", label: "Docs" },
    { to: "/b", label: "ShowCase" },
    { to: "/c", label: "Blog" },
    { to: "/d", label: "Guides" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white">
      <div className="hidden sm:flex w-full bg-linear-to-r from-emerald-900 via-blue-900 to-purple-800 text-center py-2 text-sm justify-center items-center gap-3">
        <span className="text-white font-medium">
          Build faster with Premium PixelWind Components 💎
        </span>
        <Link to={"/aaa"}>
          <Button className="bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1 rounded-md border border-white/20 backdrop-blur-sm transition-all">
            Learn more
          </Button>
        </Link>
      </div>

      <div className="backdrop-blur-md bg-black border-b border-gray-700 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-gray-300 transition duration-300"
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
              className="flex items-center gap-2 text-gray-300  transition duration-300 ease-in-out"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-gray-700/90 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 h-screen w-72 lg:hidden bg-black border-r border-gray-700 z-50 backdrop-blur-md flex flex-col"
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
                  className="text-gray-300 transition"
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
