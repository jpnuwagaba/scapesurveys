import React from 'react'
import PageHeader from '../components/PageHeader'

const GIS = () => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'UAV Lidar Scanning & Aerial Mapping | Scapes & Surveys'

  return (
    <div>
      <PageHeader
        pageHeading='UAV Lidar Scanning & Aerial Mapping services'
        briefDesc='Working with us will not leave you the same - From mentorships to career development, Scapes and Surveys is building a broad and socially inclusive home-based and overseas work force to up the levels of industry service.'
        img='drone-surveying.jpg'
      />
    </div>
  )
}

export default GIS