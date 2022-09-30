import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className='aboutUs container'>
            <div className="aboutUs-left">
                <div className="aboutUs-left-img"></div>
                <div className="aboutUs-left-text">
                    <h1>AboutUs</h1>
                    <p>
                        Scapes and Surveys is a survey firm based in Kampala Uganda with competencies in fields of Geomatics and Land
                        Management. Established in 2010, and is now providing precise and reliable solutions pertaining to
                        the field through hands-on skills of over twenty five qualified office and field men. We are an
                        inclusive working society and interested in making the future better for everyone.
                    </p>
                    <Link to="/about">
                        <button className="btn white-btn">SEE MORE</button>
                    </Link>
                </div>
            </div>
            {/* <div className="aboutUs-right">
                <div className="mission">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cum neque, id adipisci dolorem corrupti.
                    </p>
                    <h2>Mission</h2>
                </div>
                <div className="vision">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fugiat recusandae. Non at pariatur temporibus.
                    </p>
                    <h2>Vision</h2>
                </div>
            </div> */}
        </div>
    )
}

export default AboutUs