import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Footer from './components/Footer'

const page = () => {
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