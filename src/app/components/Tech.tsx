'use client';

import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { technologies } from '../../constants';
import { styles } from '../../styles';
import { textVariant } from '../../utils/motion';
import BallCanvas from './canvas/Ball';
import Image from 'next/image';

const Tech = () => {
  return (
    <>
      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
          <span className="hash-span" id="">&nbsp;</span>

          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubTextLight}>My skills</p>
            <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-10 mt-14">
            {
              technologies && technologies.length > 0 ?
                technologies?.map((technology: any) => (
                  <div className="w-28 h-28" key={technology?.name}>
                    <Image 
                      src={technology.icon}
                      alt={technology?.name} />
                  </div>
                ))
              : <></>
            }
          </div>
        </section>
      </div>
    </>
  );
};

export default Tech;
