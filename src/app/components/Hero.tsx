'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../../styles';
import { navLinks } from '../../constants';
import { amcodes, bwmap, worldmap } from '../../assets';
import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  useEffect(() => {
    gsap.from(".img-personal", {width: 0, height: 0, duration: 3});

    gsap.from("h1.personal-name", {duration: 3, opacity: 0, scaleX: 1.1, ease: "bounce"});

    gsap.from(".description-personal", {duration: 3, x: -100, ease:"circ"});
  }, [])

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <Image
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <Image
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} personal-name text-eerieBlack font-poppins uppercase`}>
              Hi, I&apos;m{' '}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase font-poppins"
                style={{color: "#5659f6"}}>
                ADI MURIANTO
              </span>
            </h1>
            <p className={`${styles.heroSubText} description-personal mt-2 text-eerieBlack font-poppins`}>
              Web Developer with {new Date().getFullYear() - new Date('2018-03-01').getFullYear()} years experience.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            style={{borderColor: "#00cddb"}}>
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
                style={{background: "#bbe9ee"}}
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <Image
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh] w-auto img-personal"
            src={amcodes}
            alt="amcodes"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
