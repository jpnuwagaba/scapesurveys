import { useState } from 'react'
import React from 'react'
import Hamburger from './Hamburger'
// import Logo from 'Logo'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {

  const [menu, showMenu] = useState(true)



  return (
    <div className='navbar'>
      <div className="navbar-container container">
        <Logo />
        <div className="navbar-list hide-on-small">
          <ul>
            <li className='bold nav-item'><NavLink to="/">Home</NavLink></li>
            <li className='bold nav-item'><NavLink to="/about">About Us</NavLink></li>
            <li className='bold nav-item'><NavLink to="/services">Services</NavLink></li>
            <li className='bold nav-item'><NavLink to="/projects">Projects</NavLink></li>
            <li className='bold nav-item'><NavLink to="/careers">Careers</NavLink></li>
          </ul>
        </div>
        <div onClick={() => showMenu(!menu)} className="bold hamburger-menu-main show-on-small">
          {menu ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>}
        </div>
        <div className='hide-on-small'>
          <a href="mailto:info@scapesurveys.com "><button className="btn blue-btn">info@scapesurveys.com</button></a>
        </div>
      </div>
      <div style={menu ? { display: 'none' } : { display: 'block' }} className="menu">
        <ul>
          <li onClick={() => showMenu(true)} className='bold nav-item'><NavLink to="/">Home</NavLink></li>
          <li onClick={() => showMenu(true)} className='bold nav-item'><NavLink to="/about">About Us</NavLink></li>
          <li onClick={() => showMenu(true)} className='bold nav-item'><NavLink to="/services">Services</NavLink></li>
          <li onClick={() => showMenu(true)} className='bold nav-item'><NavLink to="/projects">Projects</NavLink></li>
          <li onClick={() => showMenu(true)} className='bold nav-item'><NavLink to="/careers">Careers</NavLink></li>
        </ul>
        <div>
          <a href="mailto:info@scapesurveys.com "><button className="btn blue-btn menu-mail-btn">info@scapesurveys.com</button></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar