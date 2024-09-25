import React from "react";
import react from "../Assests/react.svg";
import node from "../Assests/node.svg";
import mongodb from "../Assests/mongodb.svg";
import tailwindcss from "../Assests/tailwindcss-icon-svgrepo-com.svg";
import expressjs from "../Assests/express.svg";
import illustrator from "../Assests/illustrator.svg";

function Usedtech() {
  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Technologies used in this Project
          </h3>
          <p className="text-gray-600 mt-3">
            To provide a smooth user experience, this project makes use of a
            variety of contemporary web technologies. Efficient component-based
            architecture is made possible by the core framework React, which is
            used to construct the user interface. The API queries are made using
            Axios, which guarantees efficient data retrieval from the backend.
            Design may be completed quickly and responsively with Tailwind CSS's
            utility-first styling methodology. Furthermore, React Router enables
            dynamic routing, which makes it simple for users to switch between
            various views and product details.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
            <li>
              <img src={react} alt="React Logo" className="w-28 my-auto" />
            </li>
            <li>
              <img src={node} alt="Node.js Logo" className="w-28 my-auto" />
            </li>
            <li>
              <img src={mongodb} alt="MongoDB Logo" className="w-28 my-auto" />
            </li>
            <li>
              <img
                src={tailwindcss}
                alt="Tailwind CSS Logo"
                className="w-28 my-auto"
              />
            </li>
            <li>
              <img
                src={expressjs}
                alt="Express JS Logo"
                className="w-28 my-auto"
              />
            </li>
            <li>
              <img
                src={illustrator}
                alt="Illustrator Logo"
                className="w-28 my-auto"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Usedtech;
