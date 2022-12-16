import React from 'react'

const Corevalue = ({img, corevalue, corevalueDesc}) => {
  return (
    <>
      <div className="core-value">
        <div className="core-value-icon"><img src={img} alt="" srcset="" /></div>
        <div className="core-value-text">
          <h3 className="core-value-title">{corevalue}</h3>
          <p className="core-value-desc">{corevalueDesc}</p>
        </div>
      </div>
    </>
  )
}

export default Corevalue 