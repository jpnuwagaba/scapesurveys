import React from 'react'

const FetchingTextSection = (props) => {
  return (
    <div className='container text-section'>
      <div className="text-section-grid">
      <div style={{ backgroundImage: `url(${props.img}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className="text-section-img"></div>
        <div className="text-section-text">
          <h2 className='text-section-head'>{props.textSectionHead}</h2>
          <p>{props.textSectionDesc}</p>
          <div className="text-section-list">
            <div className="bold list-head">{props.listHead}</div>
            <ul>
              <li>{props.listItem1}</li>
              <li>{props.listItem2}</li>
              <li>{props.listItem3}</li>
              <li>{props.listItem4}</li> 
              <li>{props.listItem5}</li>
              <li>{props.listItem6}</li>
              <li>{props.listItem7}</li>
              <li>{props.listItem8}</li>
              <li>{props.listItem9}</li>
              <li>{props.listItem10}</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default FetchingTextSection