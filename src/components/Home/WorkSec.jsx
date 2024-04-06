import React from "react";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";

const Data = [
  {
    img: p1,
    key: 1,
    title: "App Dashboard",
  },
  {
    img: p2,
    key: 2,
    title: "App Dashboard",
  },
  {
    img: p3,
    key: 3,
    title: "App Dashboard",
  },
  {
    img: p4,
    key: 4,
    title: "App Dashboard",
  },
  {
    img: p5,
    key: 5,
    title: "App Dashboard",
  },
];

const WorkSec = () => {
  return (
    <div className="my-8">
      <div className=" text-center mb-4">
        <h2 className="font-extrabold text-xl">Our Work</h2>
        <p className="font-semibold text-lg">
          We speak about our work and contribution to the business with an
          efficient digital solution
        </p>
      </div>
      <div className="my-14 flex flex-wrap gap-6 w-full sm:w-4/5 mx-auto items-center justify-center">
        {Data.map((e) => {
          return (
            // <div className="hover:border-2 hover:border-black hover:shadow delay-75 transition-all hover:scale-150 hover:z-50 shadow-2xl drop-shadow-lg rounded-xl h-auto w-1/3 sm:w-1/3 md:w-1/4">
            <div className="hover:border-2 hover:border-black hover:shadow transition-all hover:scale-110 hover:z-50 shadow-2xl drop-shadow-lg rounded-xl h-auto w-1/3 sm:w-1/3 md:w-1/4">
              <img className="rounded-xl" src={e.img} alt={e.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkSec;
