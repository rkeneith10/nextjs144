import React from "react";

import BackImage from "../public/images/ken.jpg";
import BackImage1 from "../public/images/imagessssssss.jpg";

const Banner = () => {
  return (
    <>
      <div
        className="h-[550px] max-w-screen-2xl mx-auto flex flex-col justify-center p-7 lg:p-40  bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${BackImage1.src})` }}
      >
        <div className="max-w-sceen">
          <p className="text-white">My Name is</p>
          <h1 className="text-3xl  text-white font-bold ">
            Keneith Salnave Romain
          </h1>
          <h1 className="text-4xl   text-white font-bold ">
            I build cool things for the web.
          </h1>
          <br />
          <p className="text-white">
            Welcome to my portfolio, a showcase of my skills and passion for
            software development and graphic design. Here, you'll find a
            collectión of my finest creations, from visually stunning websites
            to sleek mobile applications. I infuse each project with a blend of
            my heart and skill, ensuring that the final product reflects true
            dedication and expertise.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
