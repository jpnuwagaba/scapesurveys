import React from 'react'
import Careers from '../components/Careers'
import LandingInstance from '../components/LandingInstance'
import PageHeader from '../components/PageHeader'

const CareersPage = () => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'Careers | Scapes & Surveys'

  return (
    <div>
      <PageHeader
        pageHeading='Careers at Scapes & Surveys'
        briefDesc='Working with us will not leave you the same - From mentorships to career development, Scapes and Surveys is building a broad and socially inclusive home-based and overseas work force to up the levels of industry service.'
        img='workforus.jpg'
      />
      <Careers />
    </div>
  )
}

export default CareersPage