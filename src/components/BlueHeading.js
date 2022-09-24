import React from 'react'

const BlueHeading = (props) => {
  return (
    <div className='container'>
        <h2 style={{color: '#2b388f'}}>{props.heading}</h2>
    </div>
  )
}

export default BlueHeading