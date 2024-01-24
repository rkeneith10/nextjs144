"use client";
import React from "react";
import Image from "next/image";
import { FaGlobe,FaAppStore,FaMobileAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div
      className="lg:flex flex-col lg:pl-40  mt-10 pb-10 lg:pr-40 pr-7 pl-7 pt-10 text-gray-900 bg-gray-50"
      id="services"
    >
      <div className=" ">
        <div className="text-3xl font-bold">
          <span className="underline">S</span>ervices
        </div><br/>
        <div className="">
          Elevate your online presence with our comprehensive services,
          specializing in expert web development, cutting-edge mobile app
          creation, and meticulous attention to responsive design for a seamless
          user experience across all devices.
        </div>
      </div>
      <br />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="flex flex-col p-4 h-800 bg-white hover:bg-gray-700 hover:text-white transition-transform transform hover:-translate-x-1 rounded-ms shadow-lg">
        <span><FaGlobe size={30}/></span> <h1 className="font-bold text-xl">Web Development</h1> <br />
          Enhance your online presence with my website construction and
          maintenance services, ensuring a visually appealing and polished
          appearance on the web
        </div>

        <div className="flex flex-col p-4 h-800 bg-white hover:bg-gray-700 hover:text-white transition-transform transform hover:-translate-x-1 rounded-ms shadow-lg">
        <span><FaAppStore size={30}/></span><h1 className="font-bold text-xl">App Development</h1> <br />
          Simplify your life with my user-friendly Android or iOS mobile app.
          Seamlessly stay connected to your tasks and activities, no matter
          where you are.
        </div>

        <div className="flex flex-col p-4 h-800 bg-white hover:bg-gray-700 hover:text-white transition-transform transform hover:-translate-x-1 rounded-ms shadow-lg">
        <span><FaMobileAlt size={30}/></span> <h1 className="font-bold text-xl">Reponsive Design</h1>
          <br /> I craft designs that effortlessly adjust to the screens of
          various devices, including PCs, tablets, and smartphones
        </div>
      </div>
    </div>
  );
};

export default Services;
