import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import FooterContainer from "./FooterContainer";
import AboutContainer from "./AboutContainer";
import ContactContainer from "./ContactContainer";

const MainContainer = () => {
  const [{ foodItems, cartShow }, disptch] = useStateValue();

  const [scrollValue, setscrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />

      <section id="home" className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-indigo-400 to-indigo-600 transition-all ease-in-out duration-100">
            Our fresh & healthy dishes
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.5 }}
              className="w-8 h-8 rounded-lg bg-indigo-500 hover:bg-indigo-700 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={() => setscrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.5 }}
              className="w-8 h-8 rounded-lg bg-indigo-500 hover:bg-indigo-700 cursor-pointer hover:shadow-lg flex items-center justify-center"
              onClick={() => setscrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>

        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "pizza")}
        />
      </section>

      <MenuContainer />

      {cartShow && <CartContainer />}

      <AboutContainer />

      <ContactContainer />

      <FooterContainer />
    </div>
  );
};

export default MainContainer;
