"use client";

import Image from "next/image";


const projects = [
  {
    title: "Food Delivery App",
    description:
      "A modern food delivery platform that allows users to browse menus, place online orders. Built with Next.js and integrated with a secure API for order management.",
    link: "https://fooddelivery-kappa.vercel.app/", 
    image: "/images/foodapp.png", 
  },
  {
    title: "Currency Exchange Calculator",
    description:
      "An interactive web application that provides real-time currency conversion using up-to-date exchange rates. This project helped me strengthen my skills in NextJS and RESTful API integration.",
    link: "https://xchangerate.vercel.app/",
    image: "/images/currencyapp.png",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather forecasting application built with the MERN stack. It displays current weather conditions and forecasts by fetching data from an external API and offers a clean, user-friendly interface.",
    link: "https://rkeneithweatherapp.vercel.app/",
    image: "/images/weatherapp.png",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-gray-50 lg:pl-40 lg:pr-40 pr-7 pl-7 py-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-gray-900">
          <span className="underline">P</span>ortfolio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <Image src={project.image} width={500} height={300} alt={project.title} className="w-full h-48 object-cover"/>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h2>
                <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto text-white bg-gray-900 hover:bg-gray-700 font-bold py-2 px-4 rounded self-start transition-colors duration-300">
                  View Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
