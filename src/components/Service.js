import React from 'react'
import { Link } from 'react-router-dom'

const Service = (props) => {
  return (
    // <Link to={`/${props.servicepage}`}>
      <div className='service'>
        <div className="service-inner">
          <div><img src={props.img} alt="" srcSet="" /></div>
          <div><h3 className='font-bold text-lg'>{props.service}</h3></div>
        </div>
      </div>
    // </Link>

  )
}

export default Service