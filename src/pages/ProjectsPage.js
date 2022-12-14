import { useState, useEffect } from 'react';
import sanityClient from '../Client'
import React from 'react'
import Project from '../components/Project'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'


const ProjectsPage = () => {

  const [projectData, setProject] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      name,
      category,
      date,
      details,
      slug,
      "imageUrl": image.asset->url
    }`)
      .then((data) => setProject(data))
      .catch(console.error)
  }, [])

  if (!projectData) return <h1 style={{ margin: '30vh auto', color: '#2b388f' }} className='container'>Loading...</h1>


  return (
    <>
      <Helmet>
        <title>Projects | Scapes & Surveys</title>
        <meta name='description' content='Scapes and Surveys is a land survey firm based in Kampala Uganda' />
      </Helmet>
      <PageHeader
        pageHeading='Projects'
      />
      <div className='projects container'>
        <div className='projects-container'>
          {projectData && projectData.map((project, index) => (
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
    </>
  )
}

export default ProjectsPage