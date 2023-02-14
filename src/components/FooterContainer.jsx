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
          <li className="border border-white p-1 hover:bg-white hover:text-indigo-900">
            <FaFacebookF />
          </li>
          <li className="border border-white p-1 hover:bg-white hover:text-indigo-900">
            <FaInstagram />
          </li>
          <li className="border border-white p-1 hover:bg-white hover:text-indigo-900">
            <FaTwitter />
          </li>
          <li className="border border-white p-1 hover:bg-white hover:text-indigo-900">
            <FaLinkedinIn />
          </li>
          <li className="border border-white p-1 hover:bg-white hover:text-indigo-900">
            <FaPinterestP />
          </li>
        </ul>
      </div>

      <div className="flex mt-10 mb-5 justify-between">
        <p className="flex text-white p-4 gap-2">
          Created By :
          <div className="flex flex-col items-center">
            <span>Ishan Patel</span>
            <span>Rohit Paramar</span>
            <span>Saurabh Leuva</span>
            <span>Shivam Goswami</span>
          </div>
          | All Rights Reserved
        </p>

        <div class="flex flex-col items-start text-white p-4 gap-2">
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
