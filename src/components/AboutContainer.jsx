import React from "react";

import About from "../img/aboutbg.jpg";

const AboutContainer = () => {
  return (
    <section id="about us">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative mr-auto before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-indigo-400 to-indigo-600 transition-all ease-in-out duration-100">
          About Us
        </p>
      </div>
      <div class="flex flex-col md:flex-row items-center mt-8 gap-8">
        <div className="">
          <img className="w-full" src={About} alt="about" />
        </div>

        <div class="max-w-2xl">
          <h3 className="text-2xl font-semibold capitalize text-headingColor relative mr-auto before:absolute m-4 ">
            what makes our food special?
          </h3>
          <p className="m-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            iure quam ea debitis consequatur alias dignissimos quidem saepe, est
            provident molestias magnam nesciunt excepturi explicabo repudiandae,
            reprehenderit dolore cupiditate blanditiis.
          </p>
          <p className="m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facere
            in adipisci facilis vero iure maiores iusto molestiae pariatur
            voluptatum!
          </p>

          <a
            href="#"
            className="cursor-pointer text-white bg-indigo-500 m-4 p-3 hover:bg-indigo-600"
          >
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
