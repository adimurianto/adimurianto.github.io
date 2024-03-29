'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { styles } from '../../styles';
import { navLinks } from '../../constants';
import { close, menu, logo } from '../../assets';
import Image from 'next/image';
import { gsap } from 'gsap';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    gsap.from(".logo-amcodes", {width:0, height:0, duration: 3, ease: "bounce.out",});
  }, [])

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed 
      top-0 z-20 sm:opacity-[0.97] xxs:h-[12vh]`} style={{backgroundImage: "linear-gradient(to right, #6300f3 , #23f9ff !important"}}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <Image
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[auto] sm:h-[50px] w-[auto] h-[45px] object-contain logo-amcodes"
          />
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-eerieWhite nav-links-active' : 'text-eerieWhite'
              } text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links font-poppins`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-black-100 opacity-[0.95] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <Image
                  src={close}
                  alt="close"
                  className="w-[30px] h-[30px] object-contain cursor-pointer img-white"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[2rem] 
                items-start justify-end mt-[5rem]">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-white menu-text-active' : 'text-white'
                    } text-[32px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer mb-[30px] -ml-[0px] font-poppins`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Image
              src={menu}
              alt="menu"
              className="w-[50px] h-[50px] object-contain cursor-pointer img-menu"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
