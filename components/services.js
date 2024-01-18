"use client";
import React from "react";
import Image from "next/image";
import { MdComputer } from "react-icons/md";
import { FaDesktop } from "react-icons/fa";
const Services = () => {
  return (
    <div
      className="lg:flex flex-col lg:pl-40  pb-10 lg:pr-40 pr-7 pl-7 pt-10 text-gray-900"
      id="skills"
    >
      <div className="text-3xl font-bold">
        <span className="underline">S</span>ervices
      </div>
      <br />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="flex flex-col border border-solid border-gray-500 p-4 h-800">
          <h1 className="font-bold text-xl">Web Development</h1> Building and maintenance of website for a better
          presentation on the web.
        </div>

        <div className="flex flex-col border border-solid border-gray-500 p-4 h-800">
        <h1 className="font-bold text-xl" >App Development</h1> make things simpler with an Android or iOS mobile app.
          Stay connected to your activities wherever you are.
        </div>

        <div className="flex flex-col border border-solid border-gray-500 p-4 h-800">
        <h1 className="font-bold text-xl">Reponsive Design</h1> We create design that automatically adapts the
          screen of any device such as PC tablet or smartphone.
        </div>
      </div>
    </div>
  );
};

export default Services;
