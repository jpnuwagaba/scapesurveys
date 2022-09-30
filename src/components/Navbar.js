import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import CollapsibleMenu from '../components/CollapsibleMenu'
import CollapsibleServices from './CollapsibleServices'

const Navbar = () => {

  const [showMenu, setShowmenu] = useState()

  return (
    <nav className='navbar'>
      <div className="navbar-container container">
        <div className="nav-left">
          <Link to="/"><img className='navbar-logo' src="./img/svg-without-bg.svg" alt="" /></Link>
        </div>
        <div className="nav-middle hide-on-small">
          <ul>
            <li><Link className='bold' to="/">Home</Link></li>
            <li><Link className='bold' to="/about">About Us</Link></li>
            <li className='collapsibleServices-flex'>
              <div><CollapsibleServices /></div> <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg></div></li>
            <li><Link className='bold' to="/projects">Projects</Link></li>
            <li><Link className='bold' to="careers">Careers</Link></li>
          </ul>
        </div>
        <div className="menu-icon show-on-small">
          <CollapsibleMenu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar