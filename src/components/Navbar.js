import {useState} from 'react'
import React from 'react'
import Hamburger from './Hamburger'
// import Logo from 'Logo'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
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
          {/* <Hamburger /> */}
          {menu ? `MENU` : `CLOSE`}
          </div>
      </div>
      <div style={menu ? {display: 'none'} : {display: 'block'}} className="menu">
      <ul>
            <li onClick={() => showMenu(true)} className='bold nav-item'><NavLink to="/">Home</NavLink></li>
            <li onClick={() => showMenu(true)} className='bold nav-item'><NavLink to="/about">About Us</NavLink></li>
            <li onClick={() => showMenu(true)} className='bold nav-item'><NavLink to="/services">Services</NavLink></li>
            <li onClick={() => showMenu(true)} className='bold nav-item'><NavLink to="/projects">Projects</NavLink></li>
            <li onClick={() => showMenu(true)} className='bold nav-item'><NavLink to="/careers">Careers</NavLink></li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar