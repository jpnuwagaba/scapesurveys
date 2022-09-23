import React from 'react'

const NavbarSmallMenu = () => {
  return (
    <div className="menu">
            <div className="menu-box">
                <div className="menu-body">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="aboutUs.html">About</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </div>
                <div className="menu-footer">
                    <li>All Rights Reserved Copyrigt&copy; 2022</li>
                    <li><a href="#">Sitemap</a></li>
                    <li>Made by John Peter</li>
                </div>
                <div className="close" onclick="closeMenu()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path
                            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                    </svg>
                </div>
            </div>
        </div>
  )
}

export default NavbarSmallMenu