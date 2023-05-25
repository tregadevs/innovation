import React from "react";
import HeroSec from "../components/Home/HeroSec"
import TechSec from "../components/Home/TechSec"
import ServicesSec from "../components/Home/ServicesSec"
import WhyWe from "../components/Home/WhyWe"
import WorkSec from "../components/Home/WorkSec";

const Home = () => {
  return (
    <>
      <HeroSec />
      <TechSec />
      <ServicesSec />
      <WorkSec/>
      <WhyWe />
    </>
  );
};

export default Home;
