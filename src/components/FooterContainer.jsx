import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

const FooterContainer = () => {
  return (
    <section className="w-full h-auto bg-indigo-900">
      <div className="mt-10">
        <ul className="flex items-center justify-center gap-5 text-2xl text-white">
          <li className="cursor-pointer border border-white p-1 hover:bg-white hover:text-indigo-900">
            <FaFacebookF />
          </li>
          <li className="cursor-pointer border border-white p-1 hover:bg-white hover:text-indigo-900">
            <FaInstagram />
          </li>
          <li className="cursor-pointer border border-white p-1 hover:bg-white hover:text-indigo-900">
            <FaTwitter />
          </li>
          <li className="cursor-pointer border border-white p-1 hover:bg-white hover:text-indigo-900">
            <FaLinkedinIn />
          </li>
          <li className="cursor-pointer border border-white p-1 hover:bg-white hover:text-indigo-900">
            <FaPinterestP />
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row mt-10 mb-5 justify-between text-sm md:text-lg">
        <p className="flex flex-col md:flex-row text-white p-4 md:p-4 gap-2 md:gap-2 ">
          <p>Created By :</p>
          <div className="flex flex-col">
            <span>Ishan Patel</span>
            <span>Rohit Paramar</span>
            <span>Saurabh Leuva</span>
            <span>Shivam Goswami</span>
          </div>
          <p>| All Rights Reserved</p>
        </p>

        <div class="flex flex-col items-end text-white p-4 gap-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing Deleniti,
            aliquam.
          </p>
          <p>+91 0123456789</p>
          <p>cbijcbwjncojn@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default FooterContainer;
