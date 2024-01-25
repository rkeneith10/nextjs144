"use client";
import React from "react";
import { Link } from "react-scroll/modules";
import { useState, useEffect } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../public/images/logo.PNG";
import theWhiteLogo from "../public/images/logochange.png";

export default function navbar() {
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
      window.addEventListener("scroll", scrollHeader);
    };
  }, []);
  return (
    <header
      className={`${
        header
          ? "bg-gray-900 fixed w-[100%] z-10 text-white"
          : "bg-[transparent] text-gray-900"
      }   w-full transition-colors ease-in-out duration-300 `}
    >
      <nav className="max-w-[1366px] h-[100px] flex justify-between p-4 items-center">
        <div className="">
          {header ? (
            <Image src={theWhiteLogo} width={130} height={100} />
          ) : (
            <Image src={logo} width={130} height={100} />
          )}
        </div>

        <ul className="hidden md:flex uppercase font-semibold text-1xl ">
          <li className="mr-4 lg:mr-8 cursor-pointer">
            <Link to="top" smooth={true} offset={-180} duration={500}>
              home
            </Link>
          </li>
          <li className="mr-4 lg:mr-8 cursor-pointer">
            <Link to="about" smooth={true} offset={-200} duration={500}>
              about
            </Link>
          </li>
          <li className="mr-4 lg:mr-8 cursor-pointer">
            <Link to="services" smooth={true} offset={-200} duration={500}>
              services
            </Link>
          </li>
          <li className="mr-4 lg:mr-8 cursor-pointer">
            <Link to="skills" smooth={true} offset={-180} duration={500}>
              skills
            </Link>
          </li>

          <li className="mr-4 lg:mr-8 cursor-pointer">
            <Link to="contact" smooth={true} offset={-180} duration={500}>
              contact
            </Link>
          </li>
        </ul>

        <div onClick={handleSmalleNavigation} className="flex md:hidden border border-solid border-gray-900">
          {menuIcon ? (
            <XMarkIcon
              className={`${
                header ? "text-white border border-solid border-white " : "text-gray-900 border border-solid border-gray-900"
              }  h-8 w-8 `}
            />
          ) : (
            <Bars3Icon
              className={`${
                header ? "text-white border border-solid border-white" : "text-gray-900 border border-solid border-gray-900"
              }  h-8 w-8 `}
            />
          )}
        </div>

        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center text-center items-center w-full h-screen bg-gray-900 text-white ease-in duration-300"
              : "md:hidden absolute top-[100px] right-0 bottom-0 left-[-100%] flex justify-center text-center items-center w-full h-screen bg-gray-900 text-white ease-in duration-300"
          }
        >
          <div className="w-full" >
            <ul className="uppercase font-bold text-2xl ">
              <li
                
                className="py-5 cursor-pointer"
              >
                <Link to="top" smooth={true} offset={-200} duration={500} onClick={handleSmalleNavigation}>
                  home
                </Link>
              </li>

              <li
                
                className="py-5 cursor-pointer"
              >
                <Link to="about" smooth={true} offset={-200} duration={500}  onClick={handleSmalleNavigation}>
                  about
                </Link>
              </li>

              <li
                
                className="py-5 cursor-pointer"
              >
                <Link to="services" smooth={true} offset={-200} duration={500}  onClick={handleSmalleNavigation}>
                  services
                </Link>
              </li>

              <li
                
                className="py-5 cursor-pointer"
              >
                <Link to="skills" smooth={true} offset={-200} duration={500}  onClick={handleSmalleNavigation}>
                  skills
                </Link>
              </li>

              <li
               
                className="py-5 cursor-pointer"
              >
                <Link to="contact" smooth={true} offset={-200} duration={500}  onClick={handleSmalleNavigation}>
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
