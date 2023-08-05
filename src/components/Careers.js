import React from 'react'
import Career from './Career'


const Careers = () => {
  return (
    <div className='careers container'>
        <h2 className='font-bold uppercase'>roles and positions</h2>
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
            careerImg='/landing-icons/mapping (1).png'
            workingHours='Full time'
            location='Kampala, Uganda'
            duration='Since January 2021'
        />
        <Career 
            career='GIS Analyst'
            careerImg='/landing-icons/globe.png'
            workingHours='Full time'
            location='Kampala, Uganda'
            duration='Since May 2022'
        />
        <Career 
            career='Internships'
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