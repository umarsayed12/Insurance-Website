import { useEffect, useState } from "react";

export default function Header({ toggleTheme, theme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all ${
        scrolled ? "bg-white dark:bg-neutral-800 shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-xl font-bold text-primary dark:text-accent">
          AERON
        </h1>

        {/* Desktop */}
        <nav className="hidden md:flex space-x-4 text-sm">
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="flex items-center md:space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary text-white dark:bg-accent"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <button
            className="md:hidden ml-2 text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col px-4 py-4 space-y-2 text-sm text-white dark:text-black bg-primary dark:bg-accent transition-all">
          <a href="#" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About Us
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
}
