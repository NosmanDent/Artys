import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
} from "react-icons/ai";
import { BsFillChatLeftFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <nav className="w-full">
      <div className="pt-6 mx-6 flex flex-1 flex-row items-center justify-between">
        <div className="text-4xl flex">
          <BiMenuAltLeft onClick={() => setToggleNav(true)} />
          {toggleNav && (
            <div className="fixed top-0 right-0 w-full  h-[100vh] bg-white flex flex-col z-[5]">
              <AiOutlineClose
                fontSize={27}
                className="text-[40px] text-black cursor-pointer absolute top-[20px] right-[20px]"
                onClick={() => setToggleNav(false)}
              />

              <section className="flex flex-1 flex-col  items-start justify-start">
                <div className="flex flex-col items-start  py-4 px-2 text-black  justify-center   gap-6 font-serif text-5xl ">
                  <div className="flex">
                    <h1 className="font-bold font-serif  text-3xl">Artsy.</h1>
                  </div>
                  <ul className="flex flex-1 flex-col items-start gap-10 text-2xl  pt-8">
                    <NavLink to="/">
                      <li onClick={() => setToggleNav(false)}>Home</li>
                    </NavLink>
                    <NavLink to="marketplace">
                      <li onClick={() => setToggleNav(false)}>Marketplace</li>
                    </NavLink>
                    <NavLink to="auctions">
                      <li onClick={() => setToggleNav(false)}>Auctions</li>
                    </NavLink>
                    <NavLink to="drop">
                      <li onClick={() => setToggleNav(false)}>Drop</li>
                    </NavLink>
                  </ul>
                </div>

                <div
                  className="bg-blue-700 p-5 rounded-full text-white ml-auto mr-4 mt-28"
                  onClick={() => setToggleNav(false)}
                >
                  <BsFillChatLeftFill />
                </div>
              </section>
            </div>
          )}
        </div>
        <div className="flex">
          <h1 className="font-bold font-serif  text-3xl">Artsy.</h1>
        </div>

        <div className="flex flex-row gap-2  text-2xl ">
          <AiOutlineSearch />
          <AiOutlineShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default SideMenu;
