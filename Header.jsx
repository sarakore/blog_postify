import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const navItemsInfo = [
  { name: "Home", type: "link" },
  { name: "Articles", type: "link" },
  {
    name: "Upcoming",
    type: "dropdown",
    items: ["Fests", "Concerts"],
  },
  { name: "About", type: "link" },
  { name: "Contact", type: "link" },
];

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="text-lightGreen lg:text-darkGreen absolute transition-all duration-500 font-bold right-0 top-0 opacity-0 group-hover:right-[90%] group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <>
          <a href="/" className="px-4 py-2 flex gap-x-1 items-center">
          <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </a>
          <div className="hidden transition-all duration-500 pt-4 absolute bottom-0 right-0 tranform translate-y-full group-hover:block w-max ">
            <ul className="flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page) => (
                <li>
                  <a
                    href="/"
                    className="lg:hover:bg-darkGreen hover:bg-lightGreen hover:text-darkGreen  bg-hover:text-lightGreen px-4 py-2 text-lightGreen lg:text-darkBlue"
                  >
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div className="w-36">
          <img src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-0 bg-darkGreen lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="flex flex-col lg:flex-row text-lightGreen lg:text-darkGreen gap-x-5 items-center text-lg gap-y-5 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className=" mt-5 lg:mt-0 lg:bg-darkGreen bg-lightGreen px-7 py-2 shadow-sm rounded-full lg:text-lightGreen text-darkGreen text-lg font-semibold hover:text-darkGreen hover:bg-lightGreen border-2 border-darkGreen">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
