import React from 'react'
import AboutUs from '../components/AboutUs'
import LandingInstance from '../components/LandingInstance'
import PageHeader from '../components/PageHeader'
import Team from '../components/Team'
import TextSection from '../components/TextSection'

const AboutPage = () => {

  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'About Us | Scapes & Surveys'

  return (
    <div>
      <PageHeader
        pageHeading='About Us'
        briefDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, id quaerat! Nulla sapiente culpa suscipit, minus earum a eum. Accusantium repellat sunt et eveniet impedit.'
        img='company-team.jpg'
      />
      <TextSection
        heading='Our Story'
        textSectionHead='Our Story'
        textSectionDesc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cupiditate, et fugit culpa maiores atque rerum quis sapiente debitis dolorem mollitia ducimus itaque aliquid sint velit odio neque. Quod beatae nesciunt facilis, iure rem accusantium. Accusamus impedit atque error dolorem enim doloremque reprehenderit beatae commodi doloribus quae? Sapiente soluta asperiores distinctio dolorum eveniet fuga inventore dolorem? Itaque inventore doloremque, eveniet voluptate aliquam facere est illum voluptas, aperiam iure ab doloribus exercitationem corrupti et rem consequuntur repellat aspernatur nobis dolore esse fuga vel sit voluptates eligendi? Beatae numquam inventore cum quam eaque amet aliquid delectus dolore deserunt, repellendus necessitatibus blanditiis consectetur quae? Molestiae in ad sapiente velit nobis consequatur ab recusandae!'
        img='nms.jpeg'
      />
      <Team />
    </div>
  )
}

export default AboutPage