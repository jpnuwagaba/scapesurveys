import React from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {
  return (
    <div>
      {/* <Link to="/projectpage"> */}
      <div className='project'>
        <div style={{ backgroundImage: `url(${props.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className="project-img">
          <p className="mini-text project-service-category bold">{props.projectServiceCategory}</p>
        </div>
        <div className="project-description">
          <div className="project-name"><div className='project-name'>{props.projectName}</div></div>
          <p className="project-date gray-txt mini-txt">{props.projectDate}</p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  )
}

export default Project 