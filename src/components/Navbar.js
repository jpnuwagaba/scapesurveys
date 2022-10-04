import {useState} from 'react'
import React from 'react'
import Hamburger from './Hamburger'
import Logo from './Logo'
import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  const [menu, showMenu] = useState()

  

  return (
    <div className='navbar'>
      <div className="navbar-container container">
        <Logo />
        <div className="navbar-list hide-on-small">
          <ul>
            <li className='bold nav-item'><NavLink activeClassName="blue-color" to="/">Home</NavLink></li>
            <li className='bold nav-item'><NavLink activeClassName="blue-color" to="/about">About Us</NavLink></li>
            <li className='bold nav-item'><NavLink activeClassName="blue-color" to="/services">Services</NavLink></li>
            <li className='bold nav-item'><NavLink activeClassName="blue-color" to="/projects">Projects</NavLink></li>
            <li className='bold nav-item'><NavLink activeClassName="blue-color" to="/careers">Careers</NavLink></li>
          </ul>
        </div>
        <div onClick={() => showMenu(!menu)} className="hamburger-menu-main show-on-small"><Hamburger /></div>
      </div>
      <div style={{display: 'none'}} className="menu">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, dignissimos reiciendis voluptatum repellat ipsa corrupti, eos quibusdam odit temporibus animi iste doloremque quis saepe amet fuga excepturi sint nam? Maxime unde quia illo! Alias, ex architecto voluptates nihil soluta vitae deserunt cupiditate placeat animi, consequuntur id quae atque dolore nisi!
      </div>
    </div>
  )
}

export default Navbar