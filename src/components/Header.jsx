import { useEffect, useState } from "react";

export default function Header({ toggleTheme, theme }) {
  const [scrolled, setScrolled] = useState(false);

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
        <nav className="hidden md:flex space-x-4 text-sm">
          <a href="#hero">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
        </nav>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-secondary text-white dark:bg-accent"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
