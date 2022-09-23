import React from 'react'

const Career = (props) => {
  return (
    <div className='career'>
      <div className="career-text-side">
        <h3>{props.career}</h3>
        <div className="separator"></div>
        <p>{props.careerDesc}</p>
      </div>
      <div className="working-hours">{props.workingHours}</div>
    </div>
  )
}

export default Career