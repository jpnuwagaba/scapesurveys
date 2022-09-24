import React from 'react'
import Career from './Career'


const Careers = () => {
  return (
    <div className='careers container'>
        <h2>Current Opportunities</h2>
        <div className="careers-grid">
        <Career 
            career='Cadastral Surveyor'
            careerImg='map.png'
            workingHours='Full time'
            location='Kampala, Uganda'
            duration='Since January 2021'
        />
        <Career 
            career='Engineering Surveyor'
            careerImg='total-station.png'
            workingHours='Full time'
            location='Kampala, Uganda'
            duration='Since January 2021'
        />
        <Career 
            career='GIS Analyst'
            careerImg='/landing-icons/gis.png'
            workingHours='Full time'
            location='Kampala, Uganda'
            duration='Since May 2022'
        />
        <Career 
            career='Internship Trainee'
            careerImg='internship.png'
            workingHours='Full time'
            location='Kampala, Uganda'
            duration='Since January 2021'
        />
        <Career 
            career='Cartographer'
            careerImg='map (1).png'
            workingHours='Full time'
            location='Kampala, Uganda'
            duration='Since January 2021'
        />
        </div>
    </div>
  )
}

export default Careers