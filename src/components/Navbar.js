import React from 'react'
import NavbarSmallMenu from './NavbarSmallMenu'
import {Link} from 'react-router-dom'

const Navbar = () => {
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
            <li><Link className='bold' to="/services">Services</Link></li>
            <li><Link className='bold' to="/projects">Projects</Link></li>
            <li><Link className='bold' to="careers">Careers</Link></li>
          </ul>
        </div>
        <div className="nav-right hide-on-small">
          <ul>
            <li className='mini-txt'><span>+256 782388113</span></li>
            <li className='mini-txt'>Plot 50/60 Kampala Road</li>
          </ul>
        </div>        
        <div className="menu-icon show-on-small" onclick="openMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">                    
                    <path
                        d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
                </svg>
            </div>
      </div>
    <NavbarSmallMenu />
    </nav>
  )
}

export default Navbar