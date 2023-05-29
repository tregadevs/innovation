import React from "react";
import web from "../assets/web.jpg";
import app from "../assets/app.jpg";
import uiux from "../assets/uiux.jpg";

const data = [
  {
    img: web,
    title: "Web Development",
    desc: `Architecture, re-engineering, legacy software migration,
    application enhancements, and support.`,
    key: 1,
  },
  {
    img: app,
    title: "App Development",
    desc: `Native Android and iOS app development with strict compliance with Google and Apple guidelines.`,
    key: 2,
  },
  {
    img: uiux,
    title: "UI/UX",
    desc: `Design Thinking and Human-Computer Interaction framework-driven design solutions.`,
    key: 3,
  },
  {
    img: web,
    title: "DevOps services",
    desc: `Infrastructure and CI/CD pipeline setup, monitoring, infra-level security solutions by certified cloud engineers.`,
    key: 4,
  },
  {
    img: web,
    title: "Testing services",
    desc: `Testing at every phase of SDLC, business analysis, manual, and automation testing.`,
    key: 5,
  },
  {
    img: web,
    title: "Data engineering",
    desc: `360-degree data insight and analytics using data lakes; BI solutions, risk mitigation, and more.`,
    key: 6,
  },
  {
    img: web,
    title: "Data Science",
    desc: `Data analytics, modeling, and visualization, development, maintenance of large-scale products.`,
    key: 7,
  },
  {
    img: web,
    title: "Big data and ML",
    desc: `Embedded analytics in mobile and web service models, actionable business insights, Agile solutions.`,
    key: 8,
  },
];

const Services = () => {
  return (
    <div className="my-4">
      <div className="flex flex-wrap gap-x-8 gap-y-4  m-auto items-center justify-center">
        {data.map((e) => {
          return (
            <div key={e.key} className="bg-white rounded-xl mt-8 w-3/4 sm:w-3/4 md:w-2/6 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-6 py-2 shadow-xl">
              <div>
                <img src={e.img} alt="" />
              </div>
              <div className="text-center font-bold">
                <h3>{e.title}</h3>
              </div>
              <div>
                <p>{e.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
