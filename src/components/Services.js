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
          service='3D Laser Scanning'
          img='./img/laser.png'
          servicepage='laserscanning'
        />
        <Service 
          service='GIS Consulting & Surveying'
          img='./img/landing-icons/globe.png'
          servicepage='gis'
        />
        <Service 
          service='Utility Mapping'
          img='./img/neural.png'
          servicepage='utilitymapping'
        />
        <Service 
          service='Land Development Services'
          img='./img/houses.png'
          servicepage='landdevelopment'
        />
        <Service 
          service='UAV Lidar Scanning & Aerial Mapping'
          img='./img/landing-icons/drone.png'
          servicepage='uav'
        />
      </div>
    </div>
  )
}

export default Services