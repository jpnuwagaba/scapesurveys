import React from 'react'
import Services from '../components/Services'
import LandingInstance from '../components/LandingInstance'
import TextSection from '../components/TextSection'
import PageHeader from '../components/PageHeader'


const ServicesPage = () => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'Services | Scapes & Surveys'


  return (
    <div>
      <PageHeader
        pageHeading='Our Services'
        briefDesc='We have full competency in cadastral surveys, engineering surveys, land development services, GIS consulting, UAV Lidar Scanning & Aerial Mapping, 3D laser scanning and Utiliy Mapping.'
        img='landing-img1.jpg'
      />
      <Services />
      <TextSection
        textSectionHead='What we have to offer'
        textSectionDesc='We offer these services with the needs of our clients at the center of the action plan. We implement our surveys while abiding by the accepted terms and National regulations. With our technologies that include the now most commonly used GNSS, Web Mapping, and the traditional surveying methods, backed by the right sources of information, our surveyors produce consistent and accurate survey solutions. We are concerned about the confidentiality of client information and have a secure and easy-to-retrieve record keeping system. We follow the recommended methodologies for different projects and land tenure systems and offer dispute resolution when required.'
        img='landing-img.jpeg'
      />
    </div>
  )
}

export default ServicesPage