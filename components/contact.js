"use client";
import React from "react";
import BackImage from "../public/images/bannerContact.jpeg";

const Contact = () => {
  return (
    <div id="contact"
      className="h-[750px] lg:h-[550px] max-w-screen-2xl mx-auto flex flex-col  p-7 lg:p-40 lg:pt-5 bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${BackImage.src})` }}
    >
      <div className="max-w-screen">
      <div className="container mx-auto  text-white">
      <div className="text-3xl font-bold">
        <span className="underline">C</span>ontact
      </div>
      <br />
        <div className="text-xl">
         
          Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
        </div>
      </div>
        <br />
        <div className="  h-[300px] w-auto rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="mb-4">
              <label
                htmlFor="nom"
                className="block text-white text-xl font-bold"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                id="nom"
                name="nom"
                className="border rounded-md w-full p-2"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-xl font-bold"
              >
                E-mail
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                id="email"
                name="email"
                className="border rounded-md w-full p-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white text-xl font-bold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your Message"
              rows="8"
              className="border rounded-md w-full p-2 resize-none"
            ></textarea>
          </div>

          <div className="flex justify-end">
          <button type="submit" className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 ">
            Submit
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
