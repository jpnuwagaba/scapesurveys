import React from 'react'

const BlueHeading = (props) => {
  return (
    <div className='blue-heading container font-bold text-2xl md:text-4xl'>
        <h1 style={{color: '#2b388f'}}>{props.heading}</h1>
    </div>
  )
}

export default BlueHeading