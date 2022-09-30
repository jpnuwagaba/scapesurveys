import React from 'react'
import Service from './Service'

const Services = () => {
  return (
    <div className='container'>
      {/* <h1>Our Services</h1> */}
      <div className="services">
        <Service 
          service='Cadastral & Engineering Surveying'
          img='./img/landing-icons/mapping (1).png'
          servicepage='engineeringcadastral'
        />
        <Service 
          service='GIS Consulting & Surveying'
          img='./img/landing-icons/earth-africa-solid.svg'
          servicepage='gis'
        />
        <Service 
          service='Land Development Services'
          img='./img/houses.png'
          servicepage='landdevelopment'
        />
        <Service 
          service='Utility Mapping'
          img='./img/neural.png'
          servicepage='utilitymapping'
        />
        <Service 
          service='UAV Lidar Scanning & Aerial Mapping'
          img='./img/landing-icons/drone.png'
          servicepage='uav'
        />
        <Service 
          service='3D Laser Scanning'
          img='./img/laser.png'
          servicepage='laserscanning'
        />
      </div>
    </div>
  )
}

export default Services