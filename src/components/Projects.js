// import { useState, useEffect } from 'react';
import React from 'react'
import Project from './Project';
import { Link } from 'react-router-dom'
// import sanityClient from '../Client'

const Projects = () => {

  // const [projectData, setProject] = useState(null)

  // useEffect(() => {
  //   sanityClient.fetch(`*[_type == "project"]{
  //     name,
  //     category,
  //     date,
  //     details,
  //     slug,
  //     image{
  //       asset->{
  //         _id,
  //         url
  //       },
  //       alt
  //     }
  //   }`)
  //     .then((data) => setProject(data))
  //     .catch(console.error)
  // }, [])

  return (
    <div className='projects container'>
      <div className='projects-container'>
        {/* {projectData && projectData.map((project, index) => (
          <Link to={"/projects/" + project.slug.current} key={project.slug.current}>
            <div key={index}>
              <Project
                projectServiceCategory={project.category} 
                projectName={project.name}
                projectDate={project.date}
                img={project.image}
              />
            </div>
          </Link>
        ))} */}

        <Project
          projectServiceCategory='UAV Mapping'
          projectName='Isingiro Drone Project'
          projectDate='May 23, 2022'
          img='drone.jpg'
        />
        <Project
          projectServiceCategory='Cadastral Surveying'
          projectName='Boundary Opening in Kiryandongo'
          projectDate='September 23, 2022'
          img='land-surveying.jpg'
        />
        <Project
          projectServiceCategory='Engineering Surveying'
          projectName='Torit Airport, Torit, South Sudan'
          projectDate='May 23, 2022'
          img='energy.jpg'
        />
        <Project
          projectServiceCategory='3D laser scanning'
          projectName='3D Laser Scanning Cohort organised at Makerere University'
          projectDate='May 23, 2022'
          img='mak.jpg'
        />
      </div>
      <div>
        <Link to="/projects"><button className="projects-btn btn blue-btn">SEE MORE</button></Link>
      </div>
    </div>
  )
}

export default Projects