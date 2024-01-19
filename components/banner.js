import React from "react";
import BackImage1 from "../public/images/banner.PNG";

const Banner = () => {
  return (
    <>
      <div id="top"
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
            Welcome to my portfolio, a space where I channel my love and passion
            for the tech-oriented world, particularly web and mobile app
            development. Programming serves as a therapeutic session for me,
            relieving daily worries and bringing me joy and happiness.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
