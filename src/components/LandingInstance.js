import React from 'react'
import { Link } from 'react-router-dom'

const LandingInstance = (props) => {

  // const landingStyles = {
  //   backgroundImage: `url(../img/${props.bgImg})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'center/cover'
  // };

  return (
    <div style={ {backgroundImage: `url(../img/${props.bgImg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'} } className="landing">
      <div className='landing-inner'>
        <div className="container landing-caption">
          <h3>{props.preHeader}</h3>
          <h1>{props.landingCaptionHeader}</h1>
          <p>{props.landingDescription}</p>
          <div className="link info-section-link-name bold">
            <a className='link' href={props.link} target='_blank'>
              <div>{props.InfoSectionLinkName} </div>
              <div className="link-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg> </div>
            </a>
          </div>
        </div>
      </div>
      <div className="dark-overlay"></div>
    </div>
  )
}

export default LandingInstance