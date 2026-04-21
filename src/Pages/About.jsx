import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import AboutSection from '../Components/AboutUsPage/AboutSection'
import ServiceSection from '../Components/AboutUsPage/ServiceSection'
import TeamSection from '../Components/AboutUsPage/TeamSection'

function About() {
  return (
    <div>
      <BreadCrumb title="About us" />
      <AboutSection />
      <ServiceSection />
      <TeamSection />
    </div>
    
  )
}

export default About