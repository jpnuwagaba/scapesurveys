import { useState } from 'react'
import React from 'react'



const ProjectPage = () => {
  const [service, setService] = useState('3D Laser Scanning')

  return (
    <>
      <h1>Our First service is {service}</h1>
      <button onClick={() => setService('Engineering Surveying')}>Enginering Surveying</button>
    </>
  )
}

export default ProjectPage