import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import autoAnimate from '@formkit/auto-animate'

const ServicesDropdown = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div ref={parent}>
    <strong className="servicesDropdown-label" onClick={reveal}>Services</strong>
    { show && <p className="servicesDropdown-content" >
    <div>
        <ul>
          <li><Link onClick={reveal}  className='bold' to="/services">All Services</Link></li>
          <li><Link onClick={reveal}  className='bold' to="/engineeringcadastral">Cadastral & Engineering Surveying</Link></li>
          <li><Link onClick={reveal}  className='bold' to="/gis">GIS Consulting & Surveying</Link></li>
          <li><Link onClick={reveal}  className='bold' to="/landdevelopment">Land Development serveices</Link></li>
          <li><Link onClick={reveal}  className='bold' to="/utilitymapping">Utiltiy Mapping</Link></li>
          <li><Link onClick={reveal}  className='bold' to="/uav">UAV Lidar Scanning & Aerial Mapping</Link></li>
          <li><Link onClick={reveal}  className='bold' to="/laserscanning">3D Laser Scanning</Link></li>
        </ul>
      </div>
    </p> }
  </div>
}

export default ServicesDropdown