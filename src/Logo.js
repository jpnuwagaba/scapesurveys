import React from 'react'
import { Link } from 'react-router-dom'
import second from '.'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/">
        <img className='navbar-logo' src="./img/svg-without-bg.svg" alt="" />
      </Link>
    </div>
  )
}

export default Logo