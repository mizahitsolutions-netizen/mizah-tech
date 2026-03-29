import { useState, useEffect } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "../data/constants";


export default function Navbar({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    scrollTo(id.toLowerCase());
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-[5%] ${
        scrolled
          ? "bg-dark-900/95 backdrop-blur-md border-b border-brand-blue/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[70px]">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/images/logo.png"
            alt="Mizah Technologies"
            className="w-10 h-10 object-contain"
          />
          <div>
            <div className="font-display font-bold text-xl text-white leading-none">
              Mizah
            </div>
            <div className="text-[9px] tracking-[3px] text-brand-cyan font-medium">
              TECHNOLOGIES
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="nav-link text-slate-400 text-[15px] font-medium hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer font-sans pb-1"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="glow-btn bg-gradient-to-br from-brand-blue to-brand-cyan text-white px-6 py-2.5 rounded-lg font-bold text-sm cursor-pointer border-none font-sans"
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden bg-transparent border-none text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-900/98 border-t border-brand-blue/20 px-[5%] py-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="block w-full bg-transparent border-none text-slate-400 text-base font-medium cursor-pointer py-3 text-left font-sans hover:text-white transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="mt-2 w-full bg-gradient-to-br from-brand-blue to-brand-cyan text-white py-3 px-6 rounded-lg font-bold text-base cursor-pointer border-none font-sans"
          >
            Get a Free Quote
          </button>
        </div>
      )}
    </nav>
  );
}
