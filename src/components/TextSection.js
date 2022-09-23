import React from 'react'

const TextSection = (props) => {
  return (
    <div className='container text-section'>
      <h2>{props.textSectionHead}</h2>
      <div className="separator"></div>
      <div className="text-section-grid">
        <div className="text-section-text">
          <p>{props.textSectionDesc}</p>
        </div>
        <div style={{ backgroundImage: `url(../img/${props.img}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className="text-section-img"></div>
      </div>
    </div>
  )
}

export default TextSection