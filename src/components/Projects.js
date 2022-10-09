import { useState, useEffect } from 'react';
import React from 'react'
import Project from './Project';
import { Link } from 'react-router-dom'
import sanityClient from '../Client'
import InfoSection from '../components/InfoSection'

const Projects = () => {

  const [projectData, setProject] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      name,
      category,
      date,
      details,
      slug,
      "imageUrl": image.asset->url,
    }`)
      .then((data) => setProject(data))
      .catch(console.error)
  }, [])


  return (
    <div className='projects'>
      <InfoSection 
            InfoSectionHeading='Torit Airport - South Sudan'
            InfoSectionDetails='The new Torit land mark is to kick start with high end survey solutions brought to life by the latest survey techniques.'
            InfoSectionLinkName='See Project Details'
            img='energy.jpg'
            link='projects'
        />
      <div className="container">
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
        <div>
          <Link to="/projects"><button className="projects-btn btn blue-btn">SEE MORE</button></Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Projects

// + project.slug.current} key={project.slug.current