import React, { useState } from 'react'
import{motion} from "framer-motion";
import {SectionWrapper} from '../HighOrderComponent';
import {styles} from "../styles";
import {github} from "../assets";
import {projects} from "../constants";
import { textVariant ,fadeIn} from './../utils/motion';
import { Tilt } from 'react-tilt'




const Works =()=> {

  
  return <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work(wait for More)</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>  
      </motion.div>
    <div className='w-full flex'>
      <motion.p variants={fadeIn("", "", 0.1 ,1)} className='mt-3 text-(--color-secondary) text-[17px] max-w-3xl leading-[30px]'>
        Following projects showcses my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. it reflects my ability to solve complex problesms, work with different technologies, and manage projects effectively.
      </motion.p>
    </div>
    <div className='flex flex-wrap gap-10' style={{marginTop: "20px", marginBottom: "20px"}}>
      {projects.map((project, index) =>(
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
      ))}
    </div>
</>
}

const ProjectCard = ({index, name , description, tags, image, source_code_link }) => (
    <motion.div variants={fadeIn("up" ,"spring", index * 0.5, 0.75)} >
      <Tilt options={{max: 45, scale: 1, speed: 450}} className="bg-(--color-tertiary) p-5 rounded-2xl xs:w-[300px] w-full " style={{padding: '8px'}}>
        <div className='relative w-full h-[230px] '>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3 '>
            <div onClick={
              () => (window.open(source_code_link, "blank"))
            } className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>
        <div style={{margin: "8px 12px"}}>
          <h3 style={{fontSize: '18px', fontWeight: "bold"}}>{name}</h3>
          <p className='text-(--color-secondary) text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
)




export default SectionWrapper(Works, "work")