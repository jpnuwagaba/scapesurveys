import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import MenuBtn from './MenuBtn'

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
            <li><Link className='bold' to="/services">Services</Link></li>
            <li><Link className='bold' to="/projects">Projects</Link></li>
            <li><Link onClick={() => setShowmenu(!showMenu)}  className='bold' to="careers">Careers</Link></li>
          </ul>
        </div>
        <div className="nav-right hide-on-small">
          <ul>
            <li className='mini-txt'><span>+256 782388113</span></li>
            <li className='mini-txt'>Plot 50/60 Kampala Road</li>
          </ul>
        </div>
        <div onClick={() => setShowmenu(!showMenu)} className="menu-icon show-on-small">
          <MenuBtn />
        </div>
        <div style={{display: showMenu ? 'initial' : 'none'}}  className='menu'>
          <Menu />
        </div>
      </div>
    </nav>
  )
}

export default Navbar