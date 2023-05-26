import React from 'react'
import ClientSection from '../components/ClientSection'
import Corevalues from '../components/Corevalues'
import InfoSection from '../components/InfoSection'
import Projects from '../components/Projects'
import Services from '../components/Services'
import LandingInstance from '../components/LandingInstance'
import BlueHeading from '../components/BlueHeading'
import { Helmet } from 'react-helmet'
import Pdf from '../Documents/Scapes & Surveys Associates Company Brochure.pdf'
import SectionInstance1 from '../components/SectionInstance1'
import OverviewSection from '../components/OverviewSection'


const HomePage = () => {

  return (
    <div>
      <Helmet>
        <title>Home | Scapes & Surveys</title>
        <meta name='description' content='Scapes and Surveys is a land survey firm based in Kampala Uganda' />
      </Helmet>

      <LandingInstance
        bgImg='surveyor-img.jpg'
        preHeader='Consistent & Accurate'
        landingCaptionHeader='Best Solutions for your Surveys'
        InfoSectionLinkName='See Company Brochure' 
        link={Pdf}
        landingDescription='We are one of the leading land survey firms in Uganda and we have all competencies of Geomatics and Land Management. Ready to deliver the quality of service you deserve.'
      />
      {/* <OverviewSection 
        miniHeader={'SCAPES AND SURVEYS OVERVIEW'}
        header={'About Us'}
        desc={'Scapes and Surveys is a survey firm based in Kampala Uganda with competencies in the fields of Geomatics and Land management. Established in 2010, and is now providing precise and reliable solutions pertainingt to the field through hands-on skills of over twenty five qualified office and field men. We are an inclusive working society and interested in making the future better for everyone.'}
        linkName={'SEE MORE'}
        link={'about'}
      /> */}
      <InfoSection
        InfoSectionHeading='About Us'
        InfoSectionDetails='Scapes and Surveys is a survey firm based in Kampala Uganda with competencies in fields of Geomatics and Land
          Management. Established in 2010, and is now providing precise and reliable solutions pertaining to
          the field through hands-on skills of over twenty five qualified office and field men. We are an
          inclusive working society and interested in making the future better for everyone.'
        InfoSectionLinkName='See more'
        img='about.jpeg'
        link='about'
      />
      <ClientSection />
      <BlueHeading heading='Our Services' />
      <Services />
      <SectionInstance1 theme={'Our Core Values'} briefText={'Our servicemen company valuees as their approach to fast and reliable service delivery.'} right={<Corevalues />}/>
      <BlueHeading heading='Our Recent Projects' />
      <Projects />
      <InfoSection
        InfoSectionHeading='Careers at Scapes and Surveys'
        InfoSectionDetails='Working with us will not leave you the same - From mentorships to career development, Scapes and Surveys is building a broad and socially inclusive home-based and overseas work force to up the levels of industry service.'
        InfoSectionLinkName='Learn more'
        img='trimble.png'
        link='careers'
      />
      <InfoSection
        InfoSectionHeading='Our Team'
        InfoSectionDetails='The teams at the core of the service delivery are those equiped to give you, our customers the best.'
        InfoSectionLinkName='Learn more'
        img='workforus.jpg'
        link='about'
      />
    </div>
  )
}

export default HomePage
