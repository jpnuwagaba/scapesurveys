import React from 'react'
import PageHeader from '../components/PageHeader'

const GIS = () => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'Land Development Services | Scapes & Surveys'

  return (
    <div>
      <PageHeader
        pageHeading='Land Development Services'
        briefDesc='Working with us will not leave you the same - From mentorships to career development, Scapes and Surveys is building a broad and socially inclusive home-based and overseas work force to up the levels of industry service.'
        img='landing-img.jpeg'
      />
    </div>
  )
}

export default GIS