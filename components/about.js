import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "../public/images/profile.jpeg";

const About = () => {
  return (
    <div className="lg:flex lg:pl-40  lg:pr-40 pr-7 pl-7 pt-10" id="about">
      <div className=" text-gray-900 lg:w-3/4 ">
        <h1 className="text-3xl font-bold"><span className="underline">A</span>bout</h1>
        <br />
        <p>
          Hello! I'm Romain, and I'm passionate about technology, software
          development, UI/UX design, and graphic design. With over 4 years of
          experience, I enjoy turning ideas into reality through coding and
          design. As a software developer, I love solving problems and
          collaborating with teams to create efficient and user-friendly
          applications and Websites. My expertise lies in Ul/UX design, where I
          focus on crafting intuitive interfaces that enhance the user journey.
          In addition, my proficiency in graphic design allows me to create
          visually stunning graphics, logos, and illustrations that elevate
          brand identity and capture audience attention.Thank you for visiting
          my portfolio! I'm looking forward to connecting and collaborating on
          exciting projects
        </p>
        <br />
        <div className="flex flex-row ">
          <a href="#">
            <FaInstagram size={30} className="mr-2" />
          </a>

          <a href="#">
            <FaFacebook size={30} className="mr-2" />
          </a>

          <a href="#">
            <FaTwitter size={30} className="mr-2" />
          </a>

          <a href="#">
            <FaLinkedin size={30} className="mr-2" />
          </a>
        </div>
      </div>
      <div className=" text-gray-500  lg:pl-10 sm:pt-10 lg:w-1/4 w-full lg:mt-0 mt-10">
        <Image
          src={profileImage}
          width={900} // Largeur de l'image
          height={600} // Hauteur de l'image
        />
      </div>
    </div>
  );
};

export default About;
