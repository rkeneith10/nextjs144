import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import profileImage from "../public/images/me.jpeg";

const About = () => {
  return (
    <div className="lg:flex lg:pl-40  lg:pr-40 pr-7 pl-7 pt-10" id="about">
      <div className=" text-gray-900 lg:w-3/4 ">
        <h1 className="text-3xl font-bold">
          <span className="underline">A</span>bout
        </h1>
        <br />
        <p>
          My name is Keneith Salnave Romain, a Software Developer, technology
          enthusiast with over five years in web and mobile development. My
          focus has primarily been on backend development, but in recent years,
          I've dedicated a significant amount of time to staying updated on
          frontend technologies. My goal is to become a proficient fullstack
          developer. Aside from my love for coding, I have a passion for music,
          movies, and TV shows. I'm always eager to explore new technologies and
          engage in creative coding. Thank yo for visiting my portfolio, if you
          would like to know more about me, feel free to leave a message in the
          contact section below or follow me on my social media pages.
        </p>
        <br />
        <div className="flex flex-row ">
          <a href="https://www.instagram.com/rkeneith/">
            <FaInstagram size={30} className="mr-2" />
          </a>

          <a href="https://twitter.com/rkeneith">
            <FaTwitter size={30} className="mr-2" />
          </a>

          <a href="https://www.linkedin.com/in/keneith-salnave-romain/">
            <FaLinkedin size={30} className="mr-2" />
          </a>

          <a href="https://github.com/rkeneith10">
            <FaGithub size={30} className="mr-2" />
          </a>
        </div>
      </div>
      <div className=" text-gray-500  lg:pl-10 sm:pt-10 lg:w-1/4 w-full lg:mt-0 mt-10">
        <Image src={profileImage} className="rounded-md" />
      </div>
    </div>
  );
};

export default About;
