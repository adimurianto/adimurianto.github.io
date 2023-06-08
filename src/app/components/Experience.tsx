'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../../styles';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { download, downloadHover, resume } from '../../assets';
import { textVariant } from '../../utils/motion';
import Image from 'next/image';

const ExperienceCard = ({ experience }: any) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#eaeaec',
      color: '#292929',
      boxShadow:
        'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid  #232631',
    }}
    date={experience.date}
    iconStyle={{ background: '#5070f8' }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px] font-poppins">
        {experience.title}
      </h3>
      <p
        className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px] font-poppins"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubTextDark} sm:pl-16 pl-[2rem]`}>
          What I&apos;ve done so far
        </p>
        <h2 className={`${styles.sectionHeadTextDark} sm:pl-16 pl-[2rem]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              background: '#eaeaec',
              color: '#292929',
              boxShadow:
                'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={{
              borderRight: '7px solid  #232631',
            }}
            iconStyle={{ background: '#5070f8' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <Image
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="live-demo flex justify-between 
              sm:text-[18px] text-[14px] text-white 
              font-bold font-beckman items-center py-5 pl-3 pr-3 
              whitespace-nowrap gap-1 sm:w-[170px] sm:h-[58px] 
              w-[150px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-button 
              hover:text-white transition duration-[0.2s] 
              ease-in-out font-poppins"
              onClick={() =>
                window.open(
                  './CV-AdiMurianto.pdf', //paste the link to your resume here
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  ?.querySelector('.download-btn')
                  ?.setAttribute('src', `${downloadHover}`);
              }}
              onMouseOut={() => {
                document
                  ?.querySelector('.download-btn')
                  ?.setAttribute('src', `${download}`);
              }}
            >
              MY RESUME
              <Image
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
                style={{filter: "brightness(0) invert(1)"}}
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
