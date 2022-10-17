import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import FetchingTextSection from '../components/FetchingTextSection'
import sanityClient from '../Client'
import imageUrlBuilder from '@sanity/image-url'
import React from 'react'
import PageHeader from '../components/PageHeader';

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const SingleServicePage = () => {

  const [singleService, setSingleService] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    sanityClient.fetch(`*[_type == "service" && slug.current == "${slug}"][0]{
      name,
      details,
      slug,
      "imageUrl": serviceImage.asset->url,
      "imageUrl2": serviceIcon.asset->url
    }`).then((data) => setSingleService(data))
      .catch(console.error)
  }, [slug])

  if (!singleService) return <h1 style={{ margin: '30vh auto', color: '#2b388f' }} className='container'>Loading...</h1>

  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = `${singleService.name} | Scapes & Surveys`

  return (
    <>
      <div>
        <PageHeader pageHeading={singleService && singleService.name} />
        <FetchingTextSection
          textSectionHead={'Description'}
          textSectionDesc={singleService && singleService.details}
          img={singleService && singleService.imageUrl}
        />
      </div>
    </>
  )
}

export default SingleServicePage