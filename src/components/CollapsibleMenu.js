import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'
import { Link } from 'react-router-dom'

const Collapsible = () => {
  const [show, setShow] = useState()
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div ref={parent}>
    <strong className="dropdown-label" onClick={reveal}>MENU</strong>
    {show && <p className="dropdown-content" >
      <div>
        <ul>
          <li><Link onClick={reveal} className='bold' to="/">Home</Link></li>
          <li><Link onClick={reveal} className='bold' to="/about">About Us</Link></li>
          <li><Link onClick={reveal} className='bold' to="/services">Services</Link></li>
          <li><Link onClick={reveal} className='bold' to="/projects">Projects</Link></li>
          <li><Link onClick={reveal} className='bold' to="careers">Careers</Link></li>
        </ul>
      </div>
      <div class="menu-footer mini-txt">
        <div>
          <li>&copy; Scapes And Surveys Associates</li>
        </div>
      </div>
    </p>}
  </div>
}

export default Collapsible