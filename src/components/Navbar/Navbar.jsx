import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";
  const linkClass = `relative text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
    isDark
      ? "text-gray-400 hover:text-white after:bg-indigo-400"
      : "text-gray-600 hover:text-gray-900 after:bg-indigo-600"
  }`;

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`mx-auto max-w-7xl rounded-2xl px-5 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/30"
              : "bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg"
            : isDark
            ? "bg-zinc-900/50 backdrop-blur-md border border-white/5"
            : "bg-white/60 backdrop-blur-md border border-gray-100"
        }`}
      >

        <a
          href="#home"
          className={`flex items-center gap-2 font-bold text-xl transition-colors duration-300 ${
            isDark ? "text-white hover:text-indigo-400" : "text-gray-900 hover:text-indigo-600"
          }`}
        >
          <Code2 size={22} className="text-indigo-500" />
          <span>Sanny Kumar Sharma</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`${linkClass} ${
                active === link.href
                  ? isDark
                    ? "text-white after:w-full"
                    : "text-gray-900 after:w-full"
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>


        <div className="flex items-center gap-3">
          <a
            href="mailto:sanny433sharma@gmail.com"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-medium text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-500/25"
          >Hire Me</a>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark
                ? "bg-zinc-800 text-yellow-300 hover:bg-zinc-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}</button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${
              isDark ? "text-white hover:bg-zinc-800" : "text-gray-800 hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden mx-auto mt-2 max-w-7xl rounded-2xl px-6 py-4 ${
              isDark
                ? "bg-zinc-900/95 backdrop-blur-xl border border-white/10"
                : "bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setMenuOpen(false);
                  }}
                  className={`text-base font-medium py-1 transition-colors duration-200 ${
                    isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:sanny433sharma@gmail.com"
                className="mt-2 text-center py-2 rounded-full text-sm font-medium text-white bg-linear-to-r from-indigo-600 to-purple-600"
              >Hire Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
