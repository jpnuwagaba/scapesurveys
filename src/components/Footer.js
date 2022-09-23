import React from 'react'
import Contact from './Contact'
import {Link} from 'react-router-dom'


const Footer = () => {
    return (
        <footer>
            <Contact />
            <div className="footer-container container">
                <div className="footer-left">
                    <Link to="/">
                        <img src="./img/svg-without-bg.svg" alt="Logo" srcset="" />
                    </Link>
                </div>
                <div className="footer-right">
                    <div className="main-list">
                        <div>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                        </div>
                    </div>                    
                    <div class="mini-txt">
                        <div class="minor-list">
                            <div>
                                <li>&copy; Scapes And Surveys Associates</li>
                                <li>Site map</li>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fugit, vitae reprehenderit
                            nulla ex deleniti voluptate natus ratione, ut, sit minima! Itaque, iure repellat accusamus ex
                            similique ut aspernatur omnis tempore nulla, nemo quasi natus?</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer