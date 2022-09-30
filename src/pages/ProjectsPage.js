import React from 'react'
import Project from '../components/Project'
import {Link} from 'react-router-dom'
import PageHeader from '../components/PageHeader'


const ProjectsPage = () => {
  const documentHeading = document.getElementById('documentHeading')
  documentHeading.innerHTML = 'Projects | Scapes & Surveys'


  return (
    <>
      <PageHeader 
        pageHeading='Projects'
        briefDesc='Our projects cover areas of  cadastral surveys, engineering surveys, land development services, GIS consulting, UAV Lidar Scanning & Aerial Mapping, 3D laser scanning and Utiliy Mapping.'
        img='energy.jpg'
      />
    <div className='projects container'>
      <div className='projects-container'>
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
        <Project
          projectServiceCategory='Topographic Survey'
          projectName='National Medical Stores'
          projectDate='May 23, 2022'
          img='engineering.jpg'
        />
        <Project
          projectServiceCategory='Cadastral Surveying'
          projectName='Boundary Opening in Kiryandongo'
          projectDate='September 23, 2022'
          img='land-surveying.jpg'
        />
        <Project
          projectServiceCategory='Engineering Surveying'
          projectName='Dorit Airport, Dorit, South Sudan'
          projectDate='May 23, 2022'
          img='energy.jpg'
        />
        <Project
          projectServiceCategory='3D laser scanning'
          projectName='3D Laser Scanning Cohort organised at Makerere University'
          projectDate='May 23, 2022'
          img='3d-scanning.jpg'
        />
      </div>       
    </div>
    </>
  )
}

export default ProjectsPage