import React from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <Contact />
      <div className="footer-container container">
      <div className="footer-list-1">
        <ul>
          <li><Link className='light mini-txt' to="/">Home</Link></li>
          <li><Link className='light mini-txt' to="/about">About Us</Link></li>
          <li><Link className='light mini-txt' to="/services">Services</Link></li>
          <li><Link className='light mini-txt' to="/projects">Projects</Link></li>
          <li><Link className='light mini-txt' to="careers">Careers</Link></li>
        </ul>
      </div>
      <div className="footer-list-2 mini-txt"><li>&copy; Scapes And Surveys Associates | 2022</li></div>
      </div>
    </footer>
  )
}

export default Footer