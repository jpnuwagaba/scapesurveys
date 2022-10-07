import React from 'react'
import AboutUs from '../components/AboutUs'
import LandingInstance from '../components/LandingInstance'
import PageHeader from '../components/PageHeader'
import Team from '../components/Team'
import TextSection from '../components/TextSection'

const AboutPage = () => {

  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'About Us | Scapes & Surveys'

  return (
    <div>
      <PageHeader
        pageHeading='About Us'
      />
      <TextSection
        heading='Our Story'
        textSectionHead='Our Story'
        textSectionDesc='Scapes and Surveys is a survey firm based in Kampala Uganda with competencies in fields of Geomatics and Land
        Management. Established in 2010, and is now providing precise and reliable solutions pertaining to
        the field through hands-on skills of over twenty five qualified office and field men. We are an
        inclusive working society and interested in making the future better for everyone. In 2010, Arthur Akanga and Diana Abeho 
        started Scapes and Surveys Associates with the vision of reaching needs of millions of people in Uganda and around the world. They have since then 
        ensured that Scapes and Surveys Associates evolves around strong humanitarian and socially inclusive working principles, making it a company where anyone 
        can work. Today, Scapes and Surveys Associates is one of the leading firms in the disciplines of Land Surveying and Geomatics.'
        img='about-us.jpg'
      />
      <Team />
    </div>
  )
}

export default AboutPage