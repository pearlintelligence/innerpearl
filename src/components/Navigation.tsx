"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-void/90 backdrop-blur-md border-b border-pearl-gold/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-display text-xl md:text-2xl font-light tracking-pearl text-pearl-gold transition-all duration-300 group-hover:text-gold-light">
            INNER PEARL
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/about"
            className="font-body text-xs tracking-[0.2em] uppercase text-pearl-white/60 hover:text-pearl-gold transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="font-body text-xs tracking-[0.2em] uppercase text-pearl-white/60 hover:text-pearl-gold transition-colors duration-300"
          >
            Experience
          </Link>
          <Link
            href="/wisdom"
            className="font-body text-xs tracking-[0.2em] uppercase text-pearl-white/60 hover:text-pearl-gold transition-colors duration-300"
          >
            Wisdom
          </Link>
          <a
            href="https://app.innerpearl.ai/login"
            className="font-body text-xs tracking-[0.2em] uppercase text-pearl-white/60 hover:text-pearl-gold transition-colors duration-300"
          >
            Sign In
          </a>
          <a
            href="https://app.innerpearl.ai/signup"
            className="pearl-button text-xs py-2 px-6"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-pearl-white/60 hover:text-pearl-gold transition-colors p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[60px] bg-void/98 backdrop-blur-xl transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 -mt-20">
          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="font-display text-2xl font-light tracking-pearl text-pearl-white/70 hover:text-pearl-gold transition-colors"
          >
            About
          </Link>
          <Link
            href="/experience"
            onClick={() => setMobileOpen(false)}
            className="font-display text-2xl font-light tracking-pearl text-pearl-white/70 hover:text-pearl-gold transition-colors"
          >
            Experience
          </Link>
          <Link
            href="/wisdom"
            onClick={() => setMobileOpen(false)}
            className="font-display text-2xl font-light tracking-pearl text-pearl-white/70 hover:text-pearl-gold transition-colors"
          >
            Wisdom
          </Link>
          <a
            href="https://app.innerpearl.ai/login"
            onClick={() => setMobileOpen(false)}
            className="font-display text-2xl font-light tracking-pearl text-pearl-white/70 hover:text-pearl-gold transition-colors"
          >
            Sign In
          </a>
          <a
            href="https://app.innerpearl.ai/signup"
            onClick={() => setMobileOpen(false)}
            className="pearl-button mt-4"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
