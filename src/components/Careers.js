import React from 'react'
import Career from './Career'


const Careers = () => {
  return (
    <div className='careers container'>
        <h2>Current Opportunities</h2>
        <div className="careers-grid">
        <Career 
            career='Cadastral Surveyor'
            careerDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium culpa excepturi accusantium blanditiis. Possimus neque numquam reprehenderit doloremque explicabo dolore veritatis deserunt odit consectetur? Necessitatibus deleniti sunt officia, provident quaerat quod quo. Modi amet mollitia voluptatibus error! Perspiciatis, exercitationem vitae?'
            img='land-surveying.jpg'
            workingHours='Full time'
        />
        <Career 
            career='Engineering Surveyor'
            careerDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium culpa excepturi accusantium blanditiis. Possimus neque numquam reprehenderit doloremque explicabo dolore veritatis deserunt odit consectetur? Necessitatibus deleniti sunt officia, provident quaerat quod quo. Modi amet mollitia voluptatibus error! Perspiciatis, exercitationem vitae?'
            img='engineering.jpg'
            workingHours='Full time'
        />
        <Career 
            career='GIS Analyst'
            careerDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium culpa excepturi accusantium blanditiis. Possimus neque numquam reprehenderit doloremque explicabo dolore veritatis deserunt odit consectetur? Necessitatibus deleniti sunt officia, provident quaerat quod quo. Modi amet mollitia voluptatibus error! Perspiciatis, exercitationem vitae?'
            img='gis.png'
            workingHours='Full time'
        />
        <Career 
            career='Internship Trainee'
            careerDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium culpa excepturi accusantium blanditiis. Possimus neque numquam reprehenderit doloremque explicabo dolore veritatis deserunt odit consectetur? Necessitatibus deleniti sunt officia, provident quaerat quod quo. Modi amet mollitia voluptatibus error! Perspiciatis, exercitationem vitae?'
            img='land-surveying.jpg'
            workingHours='Full time'
        />
        <Career 
            career='Cartographer'
            careerDesc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium culpa excepturi accusantium blanditiis. Possimus neque numquam reprehenderit doloremque explicabo dolore veritatis deserunt odit consectetur? Necessitatibus deleniti sunt officia, provident quaerat quod quo. Modi amet mollitia voluptatibus error! Perspiciatis, exercitationem vitae?'
            img='land-surveying.jpg'
            workingHours='Full time'
        />
        </div>
    </div>
  )
}

export default Careers