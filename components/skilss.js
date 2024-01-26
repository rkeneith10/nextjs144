"use client";
import { FaCube, FaDatabase, FaFileCode } from "react-icons/fa";

const Skills = () => {
  return (
    <div
      className="lg:flex flex-col lg:pl-40  pb-10 lg:pr-40 pr-7 pl-7 pt-10 text-gray-900 "
      id="skills"
    >
      <div className="container mx-auto ">
        <div className="text-3xl font-bold">
          <span className="underline">S</span>kills
        </div>
        <br />
        <p className="">
          {" "}
          In recent years, I've honed my skills in web and mobile app
          development, harnessing the latest technologies to craft innovative
          and impactful digital experiences. Explore below to discover the tools
          and frameworks that drive my ability to create exceptional
          applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="flex flex-col  p-4 h-800 bg-white hover:bg-gray-700 hover:text-white transition-transform transform hover:-translate-x-1 rounded-ms shadow-lg">
          <span>
            <FaFileCode size={30} />
          </span>{" "}
          <h1 className="font-bold text-xl">Programming Languages</h1>
          <br /> <p>Proficient in HTML, CSS, JavaScript, PHP, and Dart.</p>
          <p>Experience with server-side scripting using Node.js and PHP.</p>
          <p>Solid understanding of object-oriented programming concepts.</p>
        </div>

        <div className="flex flex-col p-4 h-800 bg-white hover:bg-gray-700 hover:text-white transition-transform transform hover:-translate-x-1 rounded-ms shadow-lg">
          <span>
            <FaCube size={30} />
          </span>
          <h1 className="font-bold text-xl">Frameworks and Libraries</h1> <br />
          <p>
            Extensive knowledge of React.js for building dynamic and responsive
            web applications
          </p>
          <p>
            Familiar with Flutter and Dart for cross-platform mobile app
            development.
          </p>
          <p>
            Comfortable working with various front-end and back-end frameworks.
          </p>
        </div>

        <div className="flex flex-col  p-4 h-800 bg-white hover:bg-gray-700 hover:text-white transition-transform transform hover:-translate-x-1 rounded-ms shadow-lg">
          <span>
            <FaDatabase size={30} />
          </span>{" "}
          <h1 className="font-bold text-xl">Database Management</h1> <br />
          <p>Hands-on experience with MongoDB and MySQL.</p>
          <p>
            Database design and optimization for efficient data storage and
            retrieval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
