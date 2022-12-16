import React from 'react'
import { Link } from 'react-router-dom'
import second from '..'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/">
        <img className='navbar-logo' src="./img/logo.png" alt="Scapes & Surveys" />
        {/* <h1>SCAPES AND SURVEYS</h1> */}
      </Link>
    </div>
  )
}

export default Logo