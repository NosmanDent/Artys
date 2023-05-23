import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrNotification } from "react-icons/gr";
import SideMenu from "./SideMenu";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../Context";

const Navbar = () => {
  const { cart } = useContext(Context);
  const activeStyles = {
    color: "gray",
  };
  return (
    <nav className="cursor-pointer">
      <div className="md:hidden flex">
        <SideMenu />
      </div>
      <div className="lg:mx-20 mx-12 md:flex hidden flex-1 flex-row items-center justify-between pt-6">
        <h1 className="font-bold font-serif md:text-4xl text-3xl">Artsy.</h1>
        <div>
          <nav className="flex flex-1 flex-row items-center gap-4 lg:text-3xl text-xl md:font-semibold lg:font-normal">
            <NavLink
              to="/"
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Home
            </NavLink>
            <NavLink
              to="marketplace"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Marketplace
            </NavLink>

            <NavLink
              to="auctions"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Auctions
            </NavLink>
            <NavLink
              to="drop"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Drop
            </NavLink>
          </nav>
        </div>
        <div className="flex flex-row items-center gap-4 lg:text-3xl text-2xl">
          <AiOutlineSearch />
          <Link to="cart">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {cart.length && (
                <circle cx="41.5" cy="12.5" r="2.5" fill="#E31616" />
              )}
              <path
                d="M18.9 38.5C18.0556 38.5 17.3333 38.1433 16.7333 37.4298C16.1333 36.7173 15.8333 35.8685 15.8333 34.8833V20.4556L13.4 13.6111H10.5V10.5H15.2L17.4 16.7222H37.1C37.6111 16.7222 38 16.9685 38.2667 17.4611C38.5333 17.9537 38.5444 18.4593 38.3 18.9778L34.5 27.65C35.6333 27.8574 36.5836 28.4667 37.3507 29.4778C38.1169 30.4889 38.5 31.6815 38.5 33.0556C38.5 34.5593 38.0502 35.8426 37.1507 36.9056C36.2502 37.9685 35.1556 38.5 33.8667 38.5C32.5556 38.5 31.4502 37.9685 30.5507 36.9056C29.6502 35.8426 29.2 34.5593 29.2 33.0556C29.2 32.537 29.2556 32.0574 29.3667 31.6167C29.4778 31.1759 29.6333 30.7481 29.8333 30.3333L25.4667 29.8667L21.4667 36.8667C21.1778 37.3852 20.8053 37.787 20.3493 38.0722C19.8942 38.3574 19.4111 38.5 18.9 38.5ZM31.6333 27.4167L34.9333 19.8333L18.5 19.8722L20.1667 24.5C20.3444 25.0185 20.628 25.4525 21.0173 25.802C21.4058 26.1525 21.8556 26.3537 22.3667 26.4056L31.6333 27.4167ZM18.9333 35.35C18.9778 35.35 19.0778 35.2852 19.2333 35.1556L22.4667 29.5556C21.3778 29.4259 20.5222 29.121 19.9 28.6409C19.2778 28.1618 18.8111 27.663 18.5 27.1444V34.9222C18.5 35.0519 18.5444 35.1556 18.6333 35.2333C18.7222 35.3111 18.8222 35.35 18.9333 35.35ZM33.8333 35.3889C34.4111 35.3889 34.8889 35.1618 35.2667 34.7076C35.6444 34.2544 35.8333 33.7037 35.8333 33.0556C35.8333 32.3815 35.6444 31.8241 35.2667 31.3833C34.8889 30.9426 34.4111 30.7222 33.8333 30.7222C33.2778 30.7222 32.8058 30.9426 32.4173 31.3833C32.028 31.8241 31.8333 32.3815 31.8333 33.0556C31.8333 33.7037 32.028 34.2544 32.4173 34.7076C32.8058 35.1618 33.2778 35.3889 33.8333 35.3889ZM31.6333 27.4167L22.3667 26.4056L31.6333 27.4167Z"
                fill="#333333"
              />
            </svg>
          </Link>
          <GrNotification />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
