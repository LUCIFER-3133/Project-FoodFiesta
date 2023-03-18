import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

import EmptyCart from "../img/emptyCart.svg";
import CartItem from "./CartItem";

import Header from "./Header";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.config";

const CartContainer = () => {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();

  const [flag, setFlag] = useState(1);

  const [tot, setTot] = useState(0);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
    console.log(tot);
  }, [tot, flag]);

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  const [checkout, setCheckout] = useState(false);

  const toggleCheckout = () => {
    setCheckout(!checkout);
  };

  const [confirm, setConfirm] = useState(false);

  const toggleConfirm = () => {
    setConfirm(!confirm);
  };

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
      >
        {/* -----------------------top section --------------------------- */}
        <div className="w-full flex items-center justify-between p-4 cursor-pointer">
          <motion.div whileTap={{ scale: 0.5 }} onClick={showCart}>
            <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
          </motion.div>

          <p className="text-indigo-800 text-lg font-semibold">Cart</p>

          <motion.p
            whileTap={{ scale: 0.5 }}
            className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base"
            onClick={clearCart}
          >
            Clear
            <RiRefreshLine />
          </motion.p>
        </div>
        {/*----------------------------- bottom section ---------------------- */}
        {cartItems && cartItems.length > 0 ? (
          <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
            {/* cart items section  */}
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
              {cartItems &&
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    setFlag={setFlag}
                    flag={flag}
                  />
                ))}
            </div>

            {/*----- cart total section ------ */}
            <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400">Sub Total</p>
                <p className="text-gray-400">$ {tot}</p>
              </div>

              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400">Delivery</p>
                <p className="text-gray-400">$ 0.9</p>
              </div>

              <div className="w-full border-b border-gray-600 my-2"></div>

              <div className="w-full flex items-center justify-between">
                <p className="text-gray-200 text-xl font-semibold">Total</p>
                <p className="text-gray-200 text-xl font-semibold">
                  $ {tot + 0.9}
                </p>
              </div>

              {user ? (
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  type="button"
                  onClick={toggleCheckout}
                  className="w-full p-2 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-900 text-gray-50 text-lg my-2 hover:shadow-lg"
                >
                  Check Out
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.75 }}
                  type="button"
                  className="w-full p-2 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-900 text-gray-50 text-lg my-2 hover:shadow-lg"
                  onClick={login}
                >
                  Login to check out
                </motion.button>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <img src={EmptyCart} className="w-300" alt="Empty Cart" />
            <p className="text-xl text-indigo-600 font-semibold">
              Add some items to your cart
            </p>
          </div>
        )}
      </motion.div>
      {checkout && (
        <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-[101] ">
          <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-4  min-w-[300px] ">
              <div className="flex justify-end">
                <button
                  onClick={toggleCheckout}
                  className="cursor-pointer m-4 text-white bg-red-500 p-3 hover:bg-red-600"
                >
                  close
                </button>
              </div>
              <div>
                <div className="w-full h-300 md:h-42 px-6 py-4 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                  {cartItems &&
                    cartItems.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        setFlag={setFlag}
                        flag={flag}
                      />
                    ))}
                </div>
                <div className="w-full flex-1 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-textColor">Sub Total</p>
                    <p className="text-textColor">$ {tot}</p>
                  </div>

                  <div className="w-full flex items-center justify-between">
                    <p className="text-textColor">Delivery</p>
                    <p className="text-textColor">$ 0.9</p>
                  </div>

                  <div className="w-full border-b border-gray-600 my-2"></div>

                  <div className="w-full flex items-center justify-between">
                    <p className="text-textColor text-xl font-semibold">
                      Total
                    </p>
                    <p className="text-textColor text-xl font-semibold">
                      $ {tot + 0.9}
                    </p>
                  </div>
                </div>
              </div>
              <form
                // method="POST"
                className="flex flex-col gap-3 w-[100vh] mt-4"
              >
                <input
                  type="text"
                  placeholder="name"
                  name="username"
                  required
                  className="p-2 "
                />

                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  className="p-2 "
                  required
                />

                <input
                  type="number"
                  name="phone"
                  placeholder="Mobile No"
                  pattern="[0-9]{10}"
                  className="p-2 "
                  required
                />
              </form>
              <button
                onClick={toggleConfirm}
                className="cursor-pointer w-full text-white bg-indigo-500 p-3 mt-3 hover:bg-indigo-600"
              >
                Confirm
              </button>
              <h2 className="mt-3 text-red-600">
                **Only cash on delivery available
              </h2>
            </div>
          </div>
        </div>
      )}
      ,
      {confirm && (
        <div className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-[101] bg-black bg-opacity-50 ">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-4  min-w-[300px]">
            <div className="flex flex-col items-center justify-center gap-4">
              <h2 className="text-xl ">your order is confirmed</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                nulla perspiciatis unde debitis officiis.
              </p>
              <button
                onClick={toggleConfirm}
                className="cursor-pointer text-xl text-white bg-indigo-500 py-2 px-4 mt-3 hover:bg-indigo-600"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartContainer;
