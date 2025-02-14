import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {motion} from "framer-motion";
import {styles} from "../styles";
import { experiences } from '../constants/index';
import {SectionWrapper} from "../HighOrderComponent";
import { textVariant } from '../utils/motion';

const ExperienceCard =({experience})=>(
  
    <VerticalTimelineElement contentStyle={{background: "#1d1836",color: "#fff" }} 
  contentArrowStyle={{borderRight: "7px solid #232631"}} date={experience.date} 
  iconStyle={{background:experience.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img src={experience.icon}
        alt={experience.company_name} 
        className='w-[60%] h-[60%] object-contain'/>
    </div>
  }
  >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className="text-(--color-secondary) text-[16px] font-semibold ">{experience.company_name}</p>
      </div>
      <ul className='mt-6 list-disc ml-10 pl-10 space-y-6'>
        {experience.points.map((point, index)=>(
          <li key={index} className='text-white-100 text-[18px] pl-1 tracking-wider '>
            {point}
          </li>
        ))}
      </ul>
    
  </VerticalTimelineElement>


)

const Experience =()=> {
  
  return <>
  <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I have done so far(fake data)</p>
    <h2 className={styles.sectionHeadText}>Work Experience.</h2>  
  </motion.div>
  <div className='mt-24 mb-20 flex flex-col'>
    <VerticalTimeline>
      {experiences.map((experience, index) =>(
        <ExperienceCard key={index}  experience={experience}  />
      ))}
    </VerticalTimeline>
  </div>
  </>
}


export default SectionWrapper(Experience , "work");