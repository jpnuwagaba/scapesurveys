import React from 'react'
import Careers from '../components/Careers'
import {Helmet} from 'react-helmet'
import PageHeader from '../components/PageHeader'

const CareersPage = () => { 


  return (
    <div>
      <Helmet>
        <title>Careers | Scapes & Surveys</title>
        <meta name='description' content='Scapes and Surveys is a land survey firm based in Kampala Uganda' />
      </Helmet>
      <PageHeader
        pageHeading='Careers at Scapes & Surveys'
        briefDesc='Working with us will not leave you the same - From mentorships to career development, Scapes and Surveys is building a broad and socially inclusive home-based and overseas work force to up the levels of industry service. Send us an email today!'
        img='workforus.jpg'
      />
      <Careers />
    </div>
  )
}

export default CareersPage