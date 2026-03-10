"use client";
import { FaAppStore, FaGlobe, FaMobileAlt } from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      title: "Web Development",
      description: "Enhance your online presence with my website construction and maintenance services, ensuring a visually appealing and polished appearance on the web.",
      icon: <FaGlobe size={28} className="text-cyan-500" />
    },
    {
      title: "App Development",
      description: "Simplify your life with a user-friendly Android or iOS mobile app. Seamlessly stay connected to your tasks and activities, no matter where you are.",
      icon: <FaAppStore size={28} className="text-indigo-500" />
    },
    {
      title: "Responsive Design",
      description: "I craft designs that effortlessly adjust to the screens of various devices, including PCs, tablets, and smartphones.",
      icon: <FaMobileAlt size={28} className="text-blue-500" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">My</span> Services
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"></div>
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            Elevate your online presence with my comprehensive services, specializing in expert web development, cutting-edge mobile app creation, and meticulous attention to responsive design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-indigo-300 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative h-full bg-white border border-slate-100 p-8 rounded-2xl flex flex-col items-start hover:-translate-y-2 hover:shadow-xl shadow-sm transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 font-sans leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
