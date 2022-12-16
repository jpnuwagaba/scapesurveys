import React from 'react'
import GrayButton from './GrayButton'

const ClientSection = () => {
  return (
    <div className='container client-section'>
        <GrayButton text={'CLIENTS THAT TRUST US'} />
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