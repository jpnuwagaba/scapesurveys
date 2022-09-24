import {useState} from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

  const [showMenu, setShowmenu] = useState()

  return (
    <div className='menu-inner'>
      <div>
        <ul>
          <li><Link className='bold' to="/">Home</Link></li>
          <li><Link className='bold' to="/about">About Us</Link></li>
          <li><Link className='bold' to="/services">Services</Link></li>
          <li><Link className='bold' to="/projects">Projects</Link></li>
          <li><Link onClick={() => setShowmenu()}  className='bold' to="careers">Careers</Link></li>
        </ul>
      </div>
      <div class=" mini-txt minor-list">
        <div>
          <li>&copy; Scapes And Surveys Associates</li>
        </div>
      </div>
    </div>
  )
}

export default Menu