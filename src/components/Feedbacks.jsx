import React, { useState } from 'react'
import {motion } from "framer-motion";
import { styles } from '../styles';
import { SectionWrapper } from '../HighOrderComponent';
import { textVariant, fadeIn } from './../utils/motion';
import {testimonials } from "../constants"


const Feedbacks =() =>{

  
  return <>
    <div className='mt-12 bg-(--color-black-100)  rounded-[20px] ' style={{paddingBottom: "28px"}}>
      <div className={ ` bg-(--color-tertiary) rounded-2xl min-h-[300px]`} style={{padding: "32px"}}>
        <motion.div variants={textVariant()}>
          <p className={ styles.sectionSubText} > What others say (I have no Clients yet 🤷🏻‍♂️)</p>
          <h2 className={ styles.sectionHeadText}>Testimonails.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} flex flex-wrap gap-7`} style={{marginTop: "-140px" ,paddingBottom: "-20px" , paddingLeft: "15px"}}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name}
          index={index} {...testimonial}/>
        ))}
      </div>
    </div>
  </>
}
const FeedbackCard = ({index , testimonial, name, designation, company , image})=>(
  
  <motion.div variants={fadeIn("", 'spring' , index * 0.5, 0.75)} className='bg-(--color-black-200)  rounded-3xl xs:w-[320px] w-full' style={{padding: "40px"}}>
    <p className='text-white font-black text-[48px]'>"</p>
    <div className='mt-1'>
      <p className="text-white tracking-wider text-[18px] ">{testimonial}</p>
      <div className='flex justify-between items-center gap-1'style={{marginTop: "8px"}}>
        <div className='flex-1 flex flex-col'>
          <p className='text-white text-16px] font-medium'> 
            <span className='blue-text-gradient'>@</span>
            {name}
          </p>
          <p className='mt-1 text-(--color-secondary) text-[12px]'>{designation} of {company}</p>
        </div>
        <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover'/>
      </div>
    </div>
  </motion.div>
  
)








export default SectionWrapper(Feedbacks, "")