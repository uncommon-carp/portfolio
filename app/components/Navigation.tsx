"use client";

import { useState } from "react";

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "WORK", href: "/work" },
  { label: "RESUME", href: "/resume" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger button - visible only on mobile */}
      <button
        className="md:hidden fixed top-6 left-6 z-50 flex flex-col justify-between w-8 h-6"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-full bg-black transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
        />
        <span
          className={`block h-0.5 w-full bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
            }`}
        />
        <span
          className={`block h-0.5 w-full bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
        />
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 flex items-center justify-center transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <ul className="text-center">
          {menuItems.map((item, index) => (
            <li
              key={item.href}
              className={`${index < menuItems.length - 1 ? "mb-8" : ""} italic tracking-widest text-2xl`}
            >
              <a href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop menu */}
      <nav className="hidden md:flex fixed left-100 top-0 flex-col items-center justify-center h-screen">
        <ul className="pb-50">
          {menuItems.map((item) => (
            <li key={item.href} className="mb-15 italic tracking-widest">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
