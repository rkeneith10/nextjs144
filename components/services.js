"use client";
import React from "react";
import Image from "next/image";
const Services = () => {
  return (
    <div className="lg:flex flex-col lg:pl-40  lg:pr-40 pr-7 pl-7 pt-10 text-gray-900" id="services">
      <div className="text-3xl font-bold"><span className="underline">S</span>ervices</div>
      <br />
      {/* <p className="text-xl justify-center">
            I provide tailored services that empower business and individuals I provide tailored services that empower business and individualsI provide tailored services that empower business and individuals
        </p> */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className=" border border-solid border-gray-500 p-4 h-800">
          Softwae development
        </div>

        <div className="border border-solid border-gray-500 p-4 h-800">
          iOS and Andoid app
        </div>

        <div className="border border-solid border-gray-500 p-4 h-800">
          Database
        </div>
      </div>
    </div>
  );
};

export default Services;
