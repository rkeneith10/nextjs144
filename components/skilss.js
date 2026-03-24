"use client";
import { FaCube, FaDatabase, FaFileCode, FaServer } from "react-icons/fa";

const Skills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      icon: <FaFileCode size={30} className="text-cyan-500" />,
      items: [
        "Proficient in HTML, CSS, JavaScript, PHP, and Dart.",
        "Experience with server-side scripting using Node.js, Python and PHP.",
        "Solid understanding of object-oriented programming concepts."
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <FaCube size={30} className="text-indigo-500" />,
      items: [
        "Extensive knowledge of Next.js for building dynamic web applications.",
        "Familiar with Flutter and Dart for cross-platform app development.",
        "Comfortable working with various front-end and back-end frameworks."
      ]
    },
    {
      title: "Database Management",
      icon: <FaDatabase size={30} className="text-blue-500" />,
      items: [
        "Hands-on experience with MongoDB, PostgreSQL and MySQL.",
        "Database design and optimization for efficient data storage."
      ]
    },
    {
      title: "Deployment & DevOps",
      icon: <FaServer size={30} className="text-purple-500" />,
      items: [
        "Configuration and management of Linux servers (Ubuntu/Debian) with Nginx as a Reverse Proxy.",
        "Deploying applications with PM2 for Node.js and Gunicorn for Django.",
        "Implementing SSL certificates (Certbot/Let's Encrypt) and securing access via SSH.",
      
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white border-t border-b border-slate-100 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-100/50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-heading font-bold text-slate-900 mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">My</span> Skills
            <div className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"></div>
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            In recent years, I've honed my skills in web and mobile app development, harnessing the latest technologies to craft innovative and impactful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-white rounded-2xl transform transition-transform duration-500 group-hover:-translate-y-2 shadow-xl border border-slate-100"></div>
              
              <div className="relative p-8 h-full flex flex-col transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 flex flex-shrink-0 items-center justify-center shadow-sm border border-slate-100 group-hover:shadow-cyan-500/20 transition-all">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-800">{skill.title}</h3>
                </div>
                
                <ul className="space-y-4 flex-grow">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 text-sm md:text-base">
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
