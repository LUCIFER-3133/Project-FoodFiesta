import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

import NotFound from "../img/notfound.png";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItem", JSON.stringify(items));
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full my-12 bg-indigo-100 rounded-lg px-2 flex items-center gap-3 scroll-smooth
    ${
      flag
        ? "overflow-x-scroll scrollbar-none"
        : "overflow-x-hidden flex-wrap justify-center"
    }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className="w-275 h-[275px] min-w-[275px] md:w-300 md:min-w-[300px] bg-card rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between "
          >
            <div className="w-full flex items-center justify-between ">
              <motion.div className="overflow-hidden rounded-lg">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={item?.imageURL}
                  className="w-44 drop-shadow-2xl "
                  alt=""
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.5 }}
                className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                onClick={() => setItems([...cartItems, item])}
              >
                <MdShoppingBasket className="text-white text-xl" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item?.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.calories} Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-indigo-500 font-semibold">
                  <span className="text-lg text-red-500">₹</span>
                  {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center p-5 gap-2">
          <img src={NotFound} className="h-auto lg:h-420" />
          <p className="text-xl text-indigo-600 font-semibold">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
