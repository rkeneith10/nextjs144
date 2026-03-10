"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll/modules";
import logo from "../public/images/logo.png";

export default function Navbar() {
  const [menuIcon, setIcon] = useState(false);
  const [header, setHeader] = useState(false);

  const handleSmalleNavigation = () => {
    setIcon(!menuIcon);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  const navLinks = [
    { name: "Home", to: "top", offset: -180 },
    { name: "About", to: "about", offset: -200 },
    { name: "Services", to: "services", offset: -200 },
    { name: "Skills", to: "skills", offset: -180 },
    { name: "Portfolio", to: "portfolio", offset: -180 },
    { name: "Contact", to: "contact", offset: -180 },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        header
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-[1366px] mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex-shrink-0 cursor-pointer">
          <Link to="top" smooth={true} duration={500}>
            <Image src={logo} alt="Logo" width={110} height={40} className="hover:scale-105 transition-transform" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 font-heading text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer text-slate-600 hover:text-cyan-600 transition-colors">
              <Link to={link.to} smooth={true} offset={link.offset} duration={500}>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li className="ml-4">
            <Link to="contact" smooth={true} offset={-180} duration={500}>
              <button className="bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-indigo-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5">
                Hire Me
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={handleSmalleNavigation} className="md:hidden flex items-center cursor-pointer z-50">
          {menuIcon ? (
            <XMarkIcon className="h-8 w-8 text-slate-900 transition-transform duration-300 rotate-90" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-slate-900 transition-transform duration-300" />
          )}
        </div>

        {/* Mobile Nav */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 ${
            menuIcon ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          } md:hidden`}
        >
          <ul className="flex flex-col gap-8 text-center font-heading text-2xl font-semibold w-full">
            {navLinks.map((link) => (
              <li key={link.name} className="cursor-pointer text-slate-700 hover:text-cyan-600 transition-colors">
                <Link
                  to={link.to}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                  onClick={handleSmalleNavigation}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
