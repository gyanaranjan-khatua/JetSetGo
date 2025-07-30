import React from 'react'
import TravelServices from '../Sections/TravelServices'
// import TestimonialSection from '../components/Testimonial'
import Faq from './Faq'
import About from './About'
import AboutContent from '../Sections/AboutContent'
import DestinationShowcase from '../components/Tours'
import Hero from '../Sections/Hero'
import Testimonial2 from '../components/Testimonial2'

function Home() {
  return (
    
    <>
    <Hero />
    
    <AboutContent />
    <TravelServices/>
    <DestinationShowcase />
    <Testimonial2 />
    <Faq/>
    </>
  )
}

export default Home