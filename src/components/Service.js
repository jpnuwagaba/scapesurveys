import React from 'react'
import { Link } from 'react-router-dom'

const Service = (props) => {
  return (
    // <Link to={`/${props.servicepage}`}>
      <div className='bg-gray-100 px-5 py-12 rounded-lg w-full hover:shadow-lg'>
        <div className="flex flex-col gap-4 items-center">
          <div><img className='h-12' src={props.img} alt="" srcSet="" /></div>
          <div><h3 className='font-bold text-lg text-center'>{props.service}</h3></div>
        </div>
      </div>
    // </Link>

  )
}

export default Service