"use client";
import { Link } from "react-scroll/modules";
import BackImage1 from "../public/images/banner.png";

const Banner = () => {
  return (
    <div
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Background blobs for premium feel */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 mt-20 lg:mt-0">
        
        {/* Text Content */}
        <div className="flex-1 w-full flex flex-col items-start justify-center animate-fade-in-up">
          <p className="text-cyan-600 font-heading font-semibold tracking-widest uppercase mb-4">Hello, I am</p>
          <h1 className="text-5xl lg:text-7xl font-heading font-bold text-slate-900 mb-4 leading-tight">
            Keneith Salnave <br/> Romain
          </h1>
          <h2 className="text-2xl lg:text-4xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600 mb-6">
            I build cool things for the web.
          </h2>
          <p className="text-slate-600 text-lg max-w-xl font-sans leading-relaxed mb-8">
            Welcome to my portfolio, a space where I channel my passion for the tech-oriented world, particularly web and mobile development. Coding is more than writing logic—it's crafting digital experiences that bring joy and solve real problems.
          </p>
          
          <div className="flex gap-4">
            <Link to="portfolio" smooth={true} offset={-180} duration={500} className="cursor-pointer">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white rounded-full font-medium tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:-translate-y-1 transition-all duration-300 pointer-events-none">
                Explore Work
              </button>
            </Link>
            <Link to="contact" smooth={true} offset={-180} duration={500} className="cursor-pointer">
              <button className="px-8 py-3 bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-full font-medium tracking-wide border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300 pointer-events-none">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Visual Element (Glass/Image) */}
        <div className="flex-1 w-full lg:flex justify-end hidden">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform hover:scale-110 duration-700"
              style={{ backgroundImage: `url(${BackImage1.src})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-50/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
