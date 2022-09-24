import React from 'react'

const Career = (props) => {
  return (
    <div className='career'>
      <div className="career-text-side">
        <h3>{props.career}</h3>
        <div className="separator"></div>
        <div className="career-grid">
          <div className="career-img"><img src={`./img/${props.careerImg}`} alt="" srcset="" /></div>
          <div className="career-desc">
            <div className="bold gray-txt">Location</div>
            <div>{props.location}</div>
            <div className='mini-txt' style={{fontStyle: "italic"}}>{props.duration}</div>
          </div>
        </div>
      </div>
      <div className="working-hours">{props.workingHours}</div>
    </div>
  )
}

export default Career