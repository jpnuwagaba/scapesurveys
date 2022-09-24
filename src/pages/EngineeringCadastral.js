import React from 'react'
import BlueHeading from '../components/BlueHeading'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'

const GIS = () => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'Engineering & Cadastral Surveying | Scapes & Surveys'

  return (
    <div>
      <PageHeader
        pageHeading='Cadastral & Engineering Surveying'
        briefDesc='Cadastral surveying and Engineering Surveying are so relevant in the surveying sector contributing to mainstream infrasture workflows and property tenure. Our surveyors are well trained to do all kinds of cadastral and engineering surevys.'
        img='engineering.jpg'
      />
      <TextSection
        textSectionHead='Cadastral Surveying'
        textSectionDesc='Cadastral surveying is the sub-field of cadastre and surveying that specialises in the establishment and re-establishment of real property boundaries.  It involves the physical delineation of property boundaries and determination of dimensions, areas and certain rights associated with properties.'
        img='nms.jpeg'
        listHead='We do the following cadastral surveys'
        listItem1='Plot Subdivision'
        listItem2='Boundary opening'
        listItem3='Amalgamation'
        listItem4='Planning'
      />
      
      <TextSection
        textSectionHead='Engineering Surveying'
        textSectionDesc="Engineering surveying involves determining the position of natural and man made features on or beneath the earth's surface and utilizing these features in the planning, design and construction of works. It is a critical part of any engineering project'"
        img='nms.jpeg'
      />
    </div>
  )
}

export default GIS