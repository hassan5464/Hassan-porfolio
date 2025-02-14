import React, { useState , useRef} from 'react'
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import {styles} from "../styles";
import{SectionWrapper} from "../HighOrderComponent";
import { slideIn } from '../utils/motion';
import { EarthCanvas } from './canvas';


// template_fomq3vr
// service_jq422l9
// OLjcgZ7ODLo4Fp_Cr
const Contact = ()=> {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading , setLoading] = useState(false);
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setForm({...form , [name]: value})
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_jq422l9",'template_fomq3vr', {
      from_name: form.name,
      to_name: "Hassan",
      from_email: form.email,
      to_email: "hassanelmonge034@gmail.com",
      message: form.message
    },"OLjcgZ7ODLo4Fp_Cr")
    .then(() =>{
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: ""
      })
  }, (error) => {
    setLoading(false);

    console.log(error);
    
    alert("Something went wrong.")
  });
  };


  return <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left" ,"tween" , 0.2, 1)} className='flex-[0.75] bg-(--color-black-100)  rounded-2xl' style={{padding: "32px"}}>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='text-white font-medium ' style={{marginTop: "30px", marginBottom: "16px"}}>
          <label className='flex flex-col gap-1 ' style={{ marginBottom: "16px"}}>
            <span className="text-white font-medium ">Your Name</span>
            <input type="text" name="name" defaultValue={form.name} 
            onChange={handleChange} placeholder="What's yor name?" 
            className='bg-(--color-tertiary)  placeholder:text-(--color-secondary) text-white rounded-lg outline-none border-none font-medium' style={{padding: "14px"}}/>
          </label>
          <label className='flex flex-col gap-1 'style={{ marginBottom: "16px"}}>
            <span className="text-white font-medium ">Your Email</span>
            <input type="email" name="email" defaultValue={form.email} 
            onChange={handleChange} placeholder="What's yor Email?" 
            className='bg-(--color-tertiary)  placeholder:text-(--color-secondary) text-white rounded-lg outline-none border-none font-medium' style={{padding: "14px"}}/>
          </label>
          <label className='flex flex-col gap-1'style={{ marginBottom: "16px"}}>
            <span className="text-white font-medium ">Your Message</span>
            <textarea rows="7" type="email" name="message" defaultValue={form.message} 
            onChange={handleChange} placeholder="What do you want to say?" 
            className='bg-(--color-tertiary)  placeholder:text-(--color-secondary) text-white rounded-lg outline-none border-none font-medium' style={{padding: "14px"}}/>
          </label>
          <button type='submit' onSubmit={handleSubmit} className="bg-(--color-tertiary) cursor-pointer   outline-none w-fit text-white font-bold  shadow-gray-950 shadow-md rounded-xl"
          style={{paddingBlock: "12px", paddingInline: "32px" , marginTop: "32px"}}> {loading? "Sending...." : "Send"}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right" , "tween" ,0.2 ,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  </> 
}









export default SectionWrapper(Contact, "contact")