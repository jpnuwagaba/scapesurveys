import React from 'react'

const SectionInstance1 = ({theme, briefText, right}) => {
  return (
    <div>
      <div className="container section-instance section-instance-1">
        <div className="section-instance-1-left">
          <h1 className="section-theme">{theme}</h1>
          <div className="section-brief-text">{briefText}</div>
        </div>
        <div className="section-instance-1-right">{right}</div>
      </div>
    </div>
  )
}

export default SectionInstance1