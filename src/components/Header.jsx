import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/TregaDevsLogo.png";

const Header = () => {
  return (
    <div
      id="home"
      className="flex items-center bg-purple-700 p-2"
    >
      <div className="flex items-center gap-2 float-left text-white font-extrabold p-2">
        <img src={Logo} class="w-10 h-10 rounded-full" alt="TregaDev's Logo" />
        <Link to="/">TregaDev's</Link>
      </div>
      <div className="bg-black text-white font-bold p-2 rounded-lg shadow-lg ml-auto">
        <Link to="/contact">Get In Touch</Link>
      </div>
    </div>
  );
};

export default Header;
