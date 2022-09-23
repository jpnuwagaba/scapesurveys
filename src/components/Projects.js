import React from 'react'
import Project from './Project';
import {Link} from 'react-router-dom'

const Projects = () => {
    return (
        <div className='projects container'>
            <div className="project-header">
                <div>
                    <h1>Our Recent Projects</h1>
                </div>
                <div>
                    <Link to="/projects"><button className="btn blue-btn">SEE MORE</button></Link>
                </div>
            </div>
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
                    projectName='Dorit Airport, Dorit, South Sudan'
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
        </div>
    )
}

export default Projects