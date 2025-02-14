import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import "../index.css";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex itmes-center p-10 pt-10 fixed top-0 z-20 bg-(--color-primary)`}
      >
        <div className="w-full flex justify-around items-center max-w-7xl mx-auto">
          <Link
            to={"/"}
            className="flex itmes-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img
              src="/src/assets/logo.jpg"
              alt="logo"
              className="w-9 h-9 object-contain"
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              MonGe &nbsp;
              <span className="sm:block hidden">| Frontend Master</span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white"
                    : "text-(--color-secondary)"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                <a href={`#${link.id}`} 
                  >{link.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center p-8">
            <img
              src={toggle ? menu: close}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                toggle ? "hidden" : "flex"
              } p-8  black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[120px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start text-center flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title
                        ? "text-white"
                        : "text-(--color-secondary)"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
