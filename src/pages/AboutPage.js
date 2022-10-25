import React from 'react'
import PageHeader from '../components/PageHeader'
import Team from '../components/Team'
import {Helmet} from 'react-helmet'
import TextSection from '../components/TextSection'

const AboutPage = () => {

  return (
    <div>
      <Helmet>
        <title>About Us | Scapes & Surveys</title>
        <meta name='description' content='Scapes and Surveys is a land survey firm based in Kampala Uganda' />
      </Helmet>
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
        img='about.jpeg'
      />
      <Team />
    </div>
  )
}

export default AboutPage