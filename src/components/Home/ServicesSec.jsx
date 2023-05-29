import React from "react";
import web from "../../assets/web.jpg";
import app from "../../assets/app.jpg";
import uiux from "../../assets/uiux.jpg";
import {Link} from "react-router-dom";


const ServicesSec = () => {
  return (
    <div className=" bg-purple-700 mt-1 py-8">
      <div className="text-white font-extrabold text-center text-xl">
        <h1>Our Services</h1>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-4  m-auto items-center justify-center">
        <div className="bg-white rounded-xl mt-8 w-3/4 sm:w-3/4 md:w-2/6 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-6 py-2 shadow-xl">
          <div>
            <img src={web} alt="" />
          </div>
          <div className="text-center font-bold">
            <h3>Web Development</h3>
          </div>
          <div>
            <p>Architecture, re-engineering, legacy software migration, application enhancements, and support.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl mt-8 w-3/4 sm:w-3/4 md:w-2/6 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-6 py-2 shadow-xl">
          <div>
            <img src={app} alt="" />
          </div>
          <div className="text-center font-bold">
            <h3>App Development</h3>
          </div>
          <div>
          <p>Native Android and iOS app development with strict compliance with Google and Apple guidelines.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl mt-8 w-3/4 sm:w-3/4 md:w-2/6 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-6 py-2 shadow-xl">
          <div>
            <img src={uiux} alt="" />
          </div>
          <div className="text-center font-bold">
            <h3> UI/UX Designing</h3>
          </div>
          <div>
          <p>Design Thinking and Human-Computer Interaction framework-driven design solutions.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg drop-shadow-lg mt-12 p-2 font-semibold"><Link to="/services">More{">>"}</Link></div>
      </div>
    </div>
  );
};

export default ServicesSec;
