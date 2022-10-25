import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import React from 'react'
import FetchingTextSection from '../components/FetchingTextSection'
import PageHeader from '../components/PageHeader'
import sanityClient from '../Client'
import imageUrlBuilder from '@sanity/image-url'
import {Helmet} from 'react-helmet'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}


const UtilityPage = () => {

  const [singleProject, setSingleProject] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project" && slug.current == "${slug}"][0]{
      name,
      category,
      date,
      details,
      slug,
      "imageUrl": image.asset->url,
    }`)
      .then((data) => setSingleProject(data))
      .catch(console.error)
  }, [slug])

  if (!singleProject) return <h1 style={{ margin: '30vh auto', color: '#2b388f' }} className='container'>Loading...</h1>

  return (
    <>
      <div>
      <Helmet>
        <title>{`${singleProject.name} | Scapes & Surveys`}</title>
        <meta name='description' content='Scapes and Surveys is a land survey firm based in Kampala Uganda' />
      </Helmet>
        <PageHeader
          pageHeading={singleProject && singleProject.name}
        />
        <FetchingTextSection
          textSectionHead={'Project Details'}
          textSectionDesc={singleProject && singleProject.details}
          img={singleProject && singleProject.imageUrl}
        />
      </div>

    </>
  )
}

export default UtilityPage