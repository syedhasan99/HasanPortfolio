"use client";
import React, {useEffect} from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Footer from './components/Footer'
import Aos from "aos";
import "aos/dist/aos.css";

const page = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className='w-full h-full'>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  )
}

export default page