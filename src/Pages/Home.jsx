import React from 'react'
import TravelServices from '../Sections/TravelServices'
// import TestimonialSection from '../components/Testimonial'

import AboutContent from '../Sections/AboutContent'
import DestinationShowcase from '../components/Tours'
import ContactSection from '../components/ContactSec'
import Hero from '../Sections/Hero'
import Testimonial2 from '../components/Testimonial2'
import FaqSection from '../Sections/FaqSection'
// import NewHero from '../Sections/NewHero'

function Home() {
  return (
    
    <>
    {/* <NewHero/> */}
    <Hero />
    
   
    <TravelServices/>
    <DestinationShowcase />
     <AboutContent />
    <Testimonial2 />
    <FaqSection/>
    <ContactSection />
    </>
  )
}

export default Home