import React from 'react'
import GrayButton from './GrayButton'

const ClientSection = () => {
  return (
    <div className='container client-section'>
        {/* <GrayButton text={'TRUSTED BY'} /> */}
        <div className='bold'>TRUSTED BY</div>
        <div className="company-logos flex flex-wrap">
            <img className='company-logo' src="./img/opm.png" alt="" srcSet="" />
            {/* <img className='company-logo' src="./img/unhcr.png" alt="" srcSet="" /> */}
            <img className='company-logo' src="./img/NBRB-logo.png" alt="" srcSet="" />
            <img className='company-logo' src="./img/ndiwa.png" alt="" srcSet="" />
            <img className='company-logo' src="./img/konoike.png" alt="" srcSet="" />
        </div>
    </div>
  )
}

export default ClientSection