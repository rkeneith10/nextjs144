"use client";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState, useEffect } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../public/images/logo.PNG";
import theWhiteLogo from "../public/images/graylogo.jpeg";

export default function navbar2() {
  const [menuIcon, setIcon] = useState(false);
  const [header, setHeader] = useState(false);

  const handleSmallNavigation = () => {
    setIcon(!menuIcon);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

//   const scrollToTop = () => {
//     scroll.scrollToTop();
//   };

  const srcollToSection = (sectionId) => {
    scroll.scrollTo(sectionId);
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
      }   w-full ease-in duration-300 `}
    >
      <nav className="max-w-[1366px] h-[100px] flex justify-between p-4 items-center">
        <div className="">
          <ScrollLink href="/" onClick={handleSmallNavigation}>
            {header ? (
              <Image src={theWhiteLogo} width={100} height={100} />
            ) : (
              <Image src={logo} width={100} height={100} />
            )}
          </ScrollLink>
        </div>

        <ul className="hidden md:flex uppercase font-semibold text-1xl ">
          <li className="mr-4 lg:mr-8">
            <ScrollLink to="top" smooth={true} duration={500} onClick={()=>scrose}>
              home
            </ScrollLink>
          </li>
          <li className="mr-4 lg:mr-8">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={() => srcollToSection("about")}
            >
              about
            </ScrollLink>
          </li>
          <li className="mr-4 lg:mr-8">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={() => srcollToSection("services")}
            >
              services
            </ScrollLink>
          </li>
          <li className="mr-4 lg:mr-8">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={() => srcollToSection("skills")}
            >
              skills
            </ScrollLink>
          </li>

          <li className="mr-4 lg:mr-8">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              onClick={() => srcollToSection("contact")}
            >
              contact
            </ScrollLink>
          </li>
        </ul>

        <div onClick={handleSmallNavigation} className="flex md:hidden">
          {menuIcon ? (
            <XMarkIcon
              className={`${
                header ? "text-white" : "text-gray-900"
              } block h-6 w-6 `}
            />
          ) : (
            <Bars3Icon
              className={`${
                header ? "text-white" : "text-gray-900"
              } block h-6 w-6 `}
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
          <div className="w-full">
            <ul className="uppercase font-bold text-2xl ">
              <li
                onClick={handleSmallNavigation}
                className="py-5 cursor-pointer"
              >
                <ScrollLink to="top" smooth={true} duration={500}>
                  home
                </ScrollLink>
              </li>

              <li
                onClick={handleSmallNavigation}
                className="py-5 cursor-pointer"
              >
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={() => srcollToSection("about")}
                >
                  about
                </ScrollLink>
              </li>

              <li
                onClick={handleSmallNavigation}
                className="py-5 cursor-pointer"
              >
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={() => srcollToSection("services")}
                >
                  services
                </ScrollLink>
              </li>

              <li
                onClick={handleSmallNavigation}
                className="py-5 cursor-pointer"
              >
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={() => srcollToSection("skills")}
                >
                  skills
                </ScrollLink>
              </li>

              <li
                onClick={handleSmallNavigation}
                className="py-5 cursor-pointer"
              >
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={() => srcollToSection("services")}
                >
                  services
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
