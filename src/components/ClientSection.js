import React from 'react'

const ClientSection = () => {
  return (
    <div className='container client-section'>
        <div className="client-section-header">
            <button className="blue-btn1">clients that trust us</button>
        </div>
        <div className="company-logos">
            <img className='company-logo' src="./img/opm.png" alt="" srcSet="" />
            <img className='company-logo' src="./img/unhcr.png" alt="" srcSet="" />
            <img className='company-logo' src="./img/NBRB-logo.png" alt="" srcSet="" />
            <img className='company-logo' src="./img/ndiwa.png" alt="" srcSet="" />
            <img className='company-logo' src="./img/konoike.png" alt="" srcSet="" />
        </div>
    </div>
  )
}

export default ClientSection