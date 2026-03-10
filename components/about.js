"use client";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "../public/images/me.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="lg:w-3/5 text-slate-700">
          <div className="mb-8">
            <h2 className="text-4xl font-heading font-bold text-slate-900 relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">About</span> Me
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"></div>
            </h2>
          </div>
          
          <div className="space-y-6 text-lg font-sans leading-relaxed text-slate-600">
            <p>
              My name is Keneith Salnave Romain, a Software Developer and technology enthusiast with over five years of experience in web and mobile development. While my focus has primarily been on backend architecture, I've recently dedicated a significant amount of time to mastering modern frontend technologies to become a proficient fullstack developer.
            </p>
            <p>
              Aside from my love for coding, I have a passion for music, movies, and TV shows. I'm always eager to explore new technologies and engage in creative development. Thank you for visiting my portfolio!
            </p>
            <p>
              If you would like to know more about me, feel free to leave a message in the contact section below or follow me on my social media pages.
            </p>
          </div>
          
          <div className="mt-10 flex flex-row gap-6">
            <a href="https://www.instagram.com/rkeneith/" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:border-transparent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1">
              <FaInstagram size={22} />
            </a>
            <a href="https://twitter.com/rkeneith" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:border-transparent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1">
              <FaTwitter size={22} />
            </a>
            <a href="https://www.linkedin.com/in/keneith-salnave-romain/" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:border-transparent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1">
              <FaLinkedin size={22} />
            </a>
            <a href="https://github.com/rkeneith10" className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 hover:border-transparent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1">
              <FaGithub size={22} />
            </a>
          </div>
        </div>

        {/* Visual Element */}
        <div className="lg:w-2/5 flex justify-center w-full">
          <div className="relative group w-full max-w-sm">
            {/* Glowing effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300 to-indigo-300 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-white bg-white shadow-xl aspect-square w-full">
              <Image 
                src={profileImage} 
                alt="Keneith Salnave Romain" 
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
