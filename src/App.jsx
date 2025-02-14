import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Tech from "./components/Tech.jsx";
import Works from "./components/Works.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Feedbacks from './components/Feedbacks.jsx';
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import Experience from './components/Experience.jsx';
import "./index.css"
import ComputersCanvas from './components/canvas/Computers';
import { StarsCanvas } from './components/canvas/index.js';

function App() {

  return (
    <>
        <BrowserRouter>
        <div className='relative z-0 bg-(--color-primary)'>
          <div className='bg-[url(./assets/herobg.png)] bg-cover bg-no-repeat bg-center '> 
            <Navbar />  
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech/>
          <Works/>
          <Feedbacks />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
} 

export default App
