import React from 'react'

const Project = (props) => {
  return (
    <div>
      <a href="#">
      <div className='project'>
        <div style={{ backgroundImage: `url(../img/${props.img}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="project-img">
          <p className="mini-text project-service-category bold">{props.projectServiceCategory}</p>
        </div>
        <div className="project-description">
          <div className="project-name"><h3>{props.projectName}</h3></div>
          <p className="project-date-gray-txt mini-txt">{props.projectDate}</p>
        </div>
      </div>
      </a>
    </div>
  )
}

export default Project 