import { useState, useEffect, useRef } from "react";
import { close, Menu, Logo } from "../assets";
import { navLinks } from "../const";
import ContactBtn from "./ContactBtn";
import styles from "../style";


export const Header = () => {
  const [toggle, setToggle] = useState(false);

  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    }

    document.addEventListener("mousedown", handler);

    return() => {
      document.removeEventListener("mousedown", handler);
    }
  })

  return (
    <nav id="home" className="w-full flex py-6 justify-between items-center navbar z-[2]">
      <img src={Logo} alt="logo" className="mr-5"/>

      <ul className="list-none sm:flex hidden justify-start items-center flex-1 z-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer
            text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-font-light dark:text-dark-font`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className={`xxs:invisible xs:invisible ss:invisible sm:invisible md:visible lg:visible  w-[174px] h-[60px] z-20 ${styles.flexCenter} rounded-full bg-light cursor-pointer`}>
        <ContactBtn />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center z-50" ref={menuRef}>
          <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-shadow-clr dark:bg-header-clr">
          <img 
          src={toggle ? close : Menu} 
          alt="menu"
          className="max-w-[32px] h-[32px] object-contain"
          onClick={() => setToggle((prev) =>!prev)}
          />
          </div>
          <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 primary-bg absolute
          top-20 right-0  my-2 min-w-[50%] rounded-xl border sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer
                text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-10'} lightMode-clr`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            </ul>
          </div>
      </div>

    </nav>
  )
}


export default Header

/**
 * This is header component with hamburger menu starting from 767px.
 * A menu was created using the map method which contains an 'id' used for 
 * navigation and a 'title' value for displaying the title.
 * These javascript object values are located in /src/const/index.js
 */