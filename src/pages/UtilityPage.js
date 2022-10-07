import { useState, useEffect } from 'react';
import React from 'react'
import TextSection from '../components/TextSection'
import PageHeader from '../components/PageHeader'
import sanityClient from '../Client'
import BlueHeading from '../components/BlueHeading'



const UtilityPage = () => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'Project | Scapes & Surveys'

  return (
    <>
      <PageHeader
        pageHeading='Project Page'
      />
      <TextSection
        textSectionHead='Details'
        textSectionDesc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cupiditate, et fugit culpa maiores atque rerum quis sapiente debitis dolorem mollitia ducimus itaque aliquid sint velit odio neque. Quod beatae nesciunt facilis, iure rem accusantium. Accusamus impedit atque error dolorem enim doloremque reprehenderit beatae commodi doloribus quae? Sapiente soluta asperiores distinctio dolorum eveniet fuga inventore dolorem? Itaque inventore doloremque, eveniet voluptate aliquam facere est illum voluptas, aperiam iure ab doloribus exercitationem corrupti et rem consequuntur repellat aspernatur nobis dolore esse fuga vel sit voluptates eligendi? Beatae numquam inventore cum quam eaque amet aliquid delectus dolore deserunt, repellendus necessitatibus blanditiis consectetur quae? Molestiae in ad sapiente velit nobis consequatur ab recusandae!'
        img='surveyor-img.jpg'
      />
    </>
  )
}

export default UtilityPage