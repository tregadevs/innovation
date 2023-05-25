import React from "react";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import Hero from "../../assets/Hero.png";

const HeroSec = () => {
  return (
    <div className="flex flex-wrap pt-2">
      <div className="w-4/5 sm:w-4/5 md:w-4/5 lg:w-2/5 m-auto px-2 py-4">
        <p className="text-green-900 font-bold">
          It's your choice to go with Quality
        </p>
        <h2 className="font-extrabold text-3xl my-4">
          Quality Digital Solutions, You Really Want!
        </h2>
        <h3>
          We help Business and Individuals by providing efficient digital
          solutions
        </h3>

        <div className="flex gap-2 my-4">
        <Link to="contact">
          <div className="bg-black text-white font-bold p-2 rounded-lg shadow-lg">
            Get Started
          </div>
        </Link>
            <Link to="/portfolio">
          <div className="flex bg-white gap-1 font-bold p-2 rounded-lg text-lg shadow-lg justify-center items-center">
              <div className="text-green-900">
                <AiFillPlayCircle />
              </div>
              <div> Know More</div>
          </div>
            </Link>
        </div>
      </div>
      <div className="w-4/5 sm:w-4/5 md:w-4/5 lg:w-2/5 m-auto ">
        <img src={Hero} alt="" />
      </div>
    </div>
  );
};

export default HeroSec;
