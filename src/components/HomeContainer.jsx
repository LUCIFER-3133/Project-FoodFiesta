import React from "react";

import Delivery from "../img/fastdelivery.png";
import HeroBG from "../img/sinchan.jpg";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-indigo-200 p-2 rounded-full">
          <p className="text-base text-indigo-600 font-semibold">
            Bike Delivery
          </p>
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden p-1 drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="text-violet-600 text-[3rem] md:text-[5rem]">
            Visnagar
          </span>
        </p>

        <p className="text-base text-textColor text-center lg:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
          inventore architecto corporis quas accusamus accusantium porro nihil
          neque nostrum ipsam nobis quam voluptate similique doloribus dolore
          explicabo, ipsum ex, deserunt, repudiandae omnis.
        </p>

        <a
          href="#menu"
          type="button"
          className="bg-gradient-to-tr from-indigo-500 to-indigo-900 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white hover:text-gray-50"
        >
          Order Now
        </a>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBG}
          className="ml-auto h-auto w-auto lg:w-auto lg:h-685 rounded-3xl"
          alt="hero-bg"
        />

        {/* <div className="w-full h-full top-0 left-0 absolute flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap ">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className=" lg:w-190 p-4 bg-cardOverlay backdrop-blur-0 rounded-3xl flex flex-col items-center justify-center drop-shadow-lg "
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-headingColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-sm text-gray-600 font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-lg text-red-600">₹</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div> */}
      </div>
    </section>
  );
};

export default HomeContainer;
