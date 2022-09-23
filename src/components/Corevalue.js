import React from 'react'

const Corevalue = (props) => {
  return (
    <>
      <div className="core-value">
        <img src={props.img} alt="" srcset="" />
        <h3>{props.corevalue}</h3>
        <p>{props.corevalueDesc}</p>
      </div>
    </>
  )
}

export default Corevalue