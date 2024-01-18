import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
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
          Hey, My name is Keneith Salnave Romain. I am a Software developer, a
          technology lover with over five year in web and mobile development. I
          like to provide solutions to all problems using technologies. Although
          I am more focused on backend development, but in recent years I spend
          a lot of time learning what's new on the frontend development because
          my dream is to become a good fullstack developer. I'm also passionate
          about music and movies/TV shows. I'm always curious to learn more when
          it comes to new technologies and creative coding. Thank you for
          visiting my portfolio, if you want to know more about me, you can
          leave me a message in the contact section below or follow me on my
          social media pages.
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
         className="rounded-md"
         
        />
      </div>
    </div>
  );
};

export default About;
