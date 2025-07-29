import React from 'react'
import TravelServices from '../Sections/TravelServices'
import TestimonialSection from '../components/Testimonial'
import Faq from './Faq'
import About from './About'
import AboutContent from '../Sections/AboutContent'

function Home() {
  return (
    
    <>
    <AboutContent />
    <TravelServices/>
    <TestimonialSection />
    <Faq/>
    </>
  )
}

export default Home