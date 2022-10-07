import { useState, useEffect } from 'react';
import React from 'react'
import TextSection from '../components/TextSection'
import PageHeader from '../components/PageHeader'
import sanityClient from '../Client'



const UtilityPage = (props) => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'Project | Scapes & Surveys'

  const [projectData, setProject] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      name,
      category,
      date,
      details,
      shouldShowOnHomePage,
      slug,
      "imageUrl": image.asset->url,
    }`)
      .then((data) => setProject(data))
      .catch(console.error)
  }, [])

  console.log(projectData);

  return (
    <>
      {projectData && projectData.map((project, index) =>(
        <div>
          <PageHeader
            pageHeading={props.project.name}
          />
          <TextSection
            textSectionHead={props.project.name + '- Details'}
            textSectionDesc={props.project.details}
            img={props.project.image}
          />
        </div>
      ))
        // <div>
        //   <PageHeader
        //     pageHeading='Project Page'
        //   />
        //   <TextSection
        //     textSectionHead='Details'
        //     textSectionDesc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cupiditate, et fugit culpa maiores atque rerum quis sapiente debitis dolorem mollitia ducimus itaque aliquid sint velit odio neque. Quod beatae nesciunt facilis, iure rem accusantium. Accusamus impedit atque error dolorem enim doloremque reprehenderit beatae commodi doloribus quae? Sapiente soluta asperiores distinctio dolorum eveniet fuga inventore dolorem? Itaque inventore doloremque, eveniet voluptate aliquam facere est illum voluptas, aperiam iure ab doloribus exercitationem corrupti et rem consequuntur repellat aspernatur nobis dolore esse fuga vel sit voluptates eligendi? Beatae numquam inventore cum quam eaque amet aliquid delectus dolore deserunt, repellendus necessitatibus blanditiis consectetur quae? Molestiae in ad sapiente velit nobis consequatur ab recusandae!'
        //     img='surveyor-img.jpg'
        //   />
        // </div>
      }
    </>
  )
}

export default UtilityPage