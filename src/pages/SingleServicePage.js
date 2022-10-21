import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import FetchingTextSection from '../components/FetchingTextSection'
import sanityClient from '../Client'
import imageUrlBuilder from '@sanity/image-url'
import React from 'react'
import PageHeader from '../components/PageHeader';
import BlueHeading from '../components/BlueHeading'
import { Link } from 'react-router-dom'
import Project from '../components/Project'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const SingleServicePage = () => {

  const [singleService, setSingleService] = useState(null)
  // related projects
  const [relatedProjects, setRelatedProjects] = useState(null)
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


  // related projects
  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      name,
      category,
      date,
      details,
      slug,
      "imageUrl": image.asset->url
    }`).then((e) => setRelatedProjects(e)).catch(console.error)
  }, [])

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
      {/* <div>
        <BlueHeading heading='Related Projects' />
        <div className="projects container">
          <div className="projects-container">
            {relatedProjects && relatedProjects.map((project, index) => (
              <Link to={`/projects/${project.slug.current}`} key={project.slug.current}>
                <div key={index}>
                  <Project
                    projectServiceCategory={project.category}
                    projectName={project.name}
                    projectDate={project.date}
                    img={project.imageUrl}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div> */}
    </>
  )
}

export default SingleServicePage