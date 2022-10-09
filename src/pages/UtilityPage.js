import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import React from 'react'
import TextSection from '../components/TextSection'
import PageHeader from '../components/PageHeader'
import sanityClient from '../Client'
import imageUrlBuilder from '@sanity/image-url'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}


const UtilityPage = () => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'Project | Scapes & Surveys'

  const [singleProject, setSingleProject] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient.fetch(`*[slug.current == "${slug}"]{
      name,
      category,
      date,
      details,
      slug,
      "imageUrl": image.asset->url,
    }`)
      .then((data) => setSingleProject(data[0]))
      .catch(console.error)
  }, [slug])

  if (!singleProject) return <div className='container'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat culpa sint, omnis ipsum ex soluta consectetur aliquam veniam perspiciatis facilis quia tenetur non eos quam totam, iure nesciunt nulla rem quod doloribus eaque deserunt distinctio voluptatum reiciendis? Ea voluptate excepturi eum numquam, quis ipsam magni explicabo incidunt. Tenetur, vitae perferendis?</div>


  return (
    <>
      <div>
        <PageHeader
          pageHeading={singleProject.name}
        />
        <TextSection
          textSectionHead={singleProject.name + ' - Details'}
          textSectionDesc={singleProject.details}
          img={urlFor(singleProject.image).url()}
        />
      </div>

    </>
  )
}

export default UtilityPage