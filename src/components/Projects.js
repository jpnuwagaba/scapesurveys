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
      .then((data) => setProject(data.slice(0, 4)))
      .catch(console.error)
  }, [])


  return (
    <div className='projects'>
      <InfoSection
        InfoSectionHeading='Improvement of Traffic Control in Kampala City'
        InfoSectionDetails='Kampala is being brought to order and traffic systems maintenance is one of the key aspects. See how our survey solutions are helping to make this dream a reality.'
        InfoSectionLinkName='See this project'
        img='surveyors-on-the-road.jpeg'
        link='projects/improvement-of-traffic-control-in-kampala-city'
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