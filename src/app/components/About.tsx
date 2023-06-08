'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import Image from 'next/image';

const ServiceCard = ({ index, title, icon }: any) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full p-[1px] rounded-[20px]">
      <div 
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        style={{backgroundImage: "linear-gradient(160deg, rgba(81,107,248,1) 40%, rgba(50,212,254,1) 100%)"}}> 
        <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-flashWhite text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextDark}>Introduction</p>
        <h2 className={styles.sectionHeadTextDark}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        I am a results-oriented web developer with over {new Date().getFullYear() - new Date('2018-03-01').getFullYear()} years of experience specializing in front-end and back-end development. I am skilled in creating dynamic, responsive, and user-friendly websites. I am proficient in HTML, CSS, JavaScript, PHP, and various frameworks such as Laravel and ReactJS/NextJS. I have strong problem-solving abilities and a passion for staying up to date with the latest industry trends and technologies. With my high dedication and solid skills, I am ready to contribute to developing innovative and effective web solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
