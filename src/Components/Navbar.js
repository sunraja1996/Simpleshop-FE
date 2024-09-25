import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assests/Simple shop-01.svg";

function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-between sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img alt="Your Company" src={logo} className="h-8 w-auto" />
          </div>
          <div className="flex-grow flex justify-center">
            <h1 className="text-white text-center text-2xl sm:text-3xl font-medium font-montserrat">
              Simple Shop
            </h1>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
  
  );
}

export default Navbar;
