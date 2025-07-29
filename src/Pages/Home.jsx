import React from 'react'
import TravelServices from '../Sections/TravelServices'
import TestimonialSection from '../components/Testimonial'
import Faq from './Faq'
import About from './About'
import AboutContent from '../Sections/AboutContent'
import DestinationShowcase from '../components/Tours'

function Home() {
  return (
    
    <>
    <AboutContent />
    <TravelServices/>
    <DestinationShowcase />
    <TestimonialSection />
    <Faq/>
    </>
  )
}

export default Home