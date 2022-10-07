import React from 'react'

const Social = (props) => {
  return (
    <div className="social-list team-member-social">
      <li className='link-svg'><a target='_blank' href={props.social1link}>{props.social1svg}</a></li>
      <li className='link-svg'><a target='_blank' href={props.social2link}>{props.social2svg}</a></li>
      <li className='link-svg'><a target='_blank' href={props.social3link}>{props.social3svg}</a></li>
    </div>
  )
}

export default Social