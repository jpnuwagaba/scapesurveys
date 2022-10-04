
import React from 'react'
import AboutUs from '../components/AboutUs'
import ClientSection from '../components/ClientSection'
import Corevalues from '../components/Corevalues'
import InfoSection from '../components/InfoSection'
import Projects from '../components/Projects'
import Services from '../components/Services'
import LandingInstance from '../components/LandingInstance'
import BlueHeading from '../components/BlueHeading'


const HomePage = () => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'Home | Scapes & Surveys'


  return (
    <div>
        <LandingInstance
          bgImg='surveyor-img.jpg'
          preHeader='Consistent & Accurate'
          landingCaptionHeader='Best Solutions for your Surveys'
          InfoSectionLinkName='See Company Brochure'
          landingDescription='We are one of the leading land survey firms in Uganda and we have all competencies of Geomatics and Land Management. Ready to deliver the quality of service you deserve.'
        />
        <AboutUs />
        <ClientSection />
        <BlueHeading heading='Our Services'/>
        <Services />
        <BlueHeading heading='Our Values'/>
        <Corevalues />
        <InfoSection 
            InfoSectionHeading='Torit Airport - South Sudan'
            InfoSectionDetails='The new Torit land mark has kick started with high end survey solutions brought to life by the latest survey techniques.'
            InfoSectionLinkName='See Project Details'
            img='energy.jpg'
            link='projects'
        />
        <BlueHeading heading='Our Recent Projects'/>
        <Projects />
        <InfoSection 
            InfoSectionHeading='Careers at Scapes and Surveys'
            InfoSectionDetails='Working with us will not leave you the same - From mentorships to career development, Scapes and Surveys is building a broad and socially inclusive home-based and overseas work force to up the levels of industry service.'
            InfoSectionLinkName='Work with us'
            img='workforus.jpg'
            link='careers'
        />
        <InfoSection 
            InfoSectionHeading='Our Team'
            InfoSectionDetails='The teams at the core of the service delivery are those equiped to give you, our customers the best.'
            InfoSectionLinkName='Check details'
            img='panel.png'
            link='about'
        />
    </div>
  )
}

export default HomePage
