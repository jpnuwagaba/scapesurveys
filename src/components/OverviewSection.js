import React from 'react'
import {Link} from 'react-router-dom'

const OverviewSection = ({miniHeader, header, desc, link, linkName}) => {
  return (
    <div className='overview-section container'>
      <div className="overview-mini-header">{miniHeader}</div>
      <div><h1 className="overview-header">{header}</h1></div>
      <div><p className="overview-desc">{desc}</p></div>
      <div><Link to={`/${link}`}><button className="btn blue-btn">{linkName}</button></Link></div>
    </div>
  )
}

export default OverviewSection