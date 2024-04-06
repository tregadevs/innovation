import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/TregaDevsLogo.png";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <footer class="border-t rounded-sm">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="/#home" class="flex items-center">
                
                <img
                  src={Logo}
                  class="h-24 mr-3"
                  alt="TregaDev's Logo"
                />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  TregaDev's
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Links
                </h2>
                <ul class="text-gray-400 font-medium">
                  <li class="mb-4">
                    <Link to="/about" class="hover:underline">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/contact" class="hover:underline">
                      Contact US
                    </Link>
                  </li>
                  <li class="mb-4">
                    <Link to="/services" class="hover:underline">
                      Our Services
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/portfolio" class="hover:underline">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>
                <ul class="text-gray-600 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="/" class="hover:underline ">
                      Github
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/tregadev-s-inc/" class="hover:underline">
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold  uppercase text-white">
                  Legal
                </h2>
                <ul class="text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
          <div class="flex items-center justify-between">
            <span class="text-sm  text-center text-gray-400">
              © 2023 
              <a href="#home" class="hover:underline">
                TregaDev's™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
