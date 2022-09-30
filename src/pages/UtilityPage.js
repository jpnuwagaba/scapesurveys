import { useState } from 'react'
import React from 'react'
import PageHeader from '../components/PageHeader'
import BlueHeading from '../components/BlueHeading'



const UtilityPage = () => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'utility Mapping | Scapes & Surveys'

  return (
    <>
      <PageHeader
        pageHeading='Project Page'
        briefDesc='Working with us will not leave you the same - From mentorships to career development, Scapes and Surveys is building a broad and socially inclusive home-based and overseas work force to up the levels of industry service.'
        img='utilitymapping.jpg'
      />
      <BlueHeading heading='Project Description' />
      <div className='bold container'>Text to describe poroject here...</div>
    </>
  )
}

export default UtilityPage