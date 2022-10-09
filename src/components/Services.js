import React from 'react'
import Service from './Service'

const Services = () => {
  return (
    <div className='container'>
      {/* <h1>Our Services</h1> */}
      <div className="services">
        <Service 
          service='Cadastral Surveying'
          img='./img/map.png'
          servicepage='cadastral-surveying'
        />
        <Service 
          service='Engineering Surveying'
          img='./img/landing-icons/mapping (1).png'
          servicepage='engineering-surveying'
        />
        <Service 
          service='3D Laser Scanning'
          img='./img/laser.png'
          servicepage='lasers-canning'
        />
        <Service 
          service='GIS Consulting & Surveying'
          img='./img/landing-icons/globe.png'
          servicepage='gis'
        />
        <Service 
          service='Utility Mapping'
          img='./img/neural.png'
          servicepage='utility-mapping'
        />
        <Service 
          service='UAV Lidar Scanning & Aerial Mapping'
          img='./img/landing-icons/drone.png'
          servicepage='uav-lidar'
        />
        <Service 
          service='Land Development Services'
          img='./img/houses.png'
          servicepage='land-development'
        />
      </div>
    </div>
  )
}

export default Services