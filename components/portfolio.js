"use client";
import Image from "next/image";

const projects = [
  {
    title: "Food Delivery App",
    description: "A modern food delivery platform that allows users to browse menus, place online orders, and track deliveries in real time. Built with Next.js and integrated with a secure API for order management.",
    link: "https://fooddelivery-kappa.vercel.app/",
    image: "/images/foodapp.png",
  },
  {
    title: "Currency Exchange",
    description: "An interactive web application that provides real-time currency conversion using up-to-date exchange rates. This project helped me strengthen my skills in NextJS and RESTful API integration.",
    link: "https://xchangerate.vercel.app/",
    image: "/images/currencyapp.png",
  },
  {
    title: "Weather App",
    description: "A responsive weather forecasting application built with the MERN stack. It displays current weather conditions and forecasts by fetching data from an external API and offers a clean, user-friendly interface.",
    link: "https://rkeneithweatherapp.vercel.app/",
    image: "/images/weatherapp.png",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">My</span> Portfolio
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"></div>
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            Here are a few projects I've worked on recently. They showcase my skills in frontend and backend development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-md flex flex-col hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500">
              <div className="relative w-full h-56 overflow-hidden">
                <Image 
                  src={project.image} 
                  fill
                  style={{ objectFit: 'cover' }}
                  alt={project.title} 
                  className="group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <h3 className="text-2xl font-heading font-bold mb-3 text-slate-800">{project.title}</h3>
                <p className="text-slate-600 font-sans leading-relaxed mb-6 flex-grow">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 mt-auto text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 self-start group/btn"
                >
                  View Demo
                  <span className="text-indigo-500 group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

