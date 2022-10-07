import React from 'react'
import Social from './Social'

const TeamMember = (props) => {
  return (
    <div style={{ backgroundImage: `url(../img/${props.img}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className='team-member'>
      <div className="team-member-details">
        <h3 className="team-member-name">{props.name}</h3>
        <div className="team-member-position">{props.position}</div>
        <Social
          social1link={props.social1link}
          social1svg={props.social1svg}
          social2link={props.social2link}
          social2svg={props.social2svg}
          social3link={props.social3link}
          social3svg={props.social3svg}
        />
      </div>
    </div>
  )
}

export default TeamMember