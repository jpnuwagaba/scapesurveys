import React from 'react'

const ClientSection = () => {
  return (
    <div className='container client-section'>
        <div className="client-section-header">
            <button className="blue-btn1">clients that trust us</button>
        </div>
        <div className="company-logos">
            <img className='company-logo' src="./img/mlhud.png" alt="" srcset="" />
            <img className='company-logo' src="./img/coaug.png" alt="" srcset="" />
            <img className='company-logo' src="./img/svg-without-bg.svg" alt="" srcset="" />
            <img className='company-logo' src="./img/maklogo.jfif" alt="" srcset="" />
            <img className='company-logo' src="./img/rea.jfif" alt="" srcset="" />
        </div>
    </div>
  )
}

export default ClientSection