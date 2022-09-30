import React from 'react'

const PageHeader = (props) => {
  return (
    <div className='page-header container'>
      <div className="page-header-inner">
        <div className='page-heading'>
          <h1>{props.pageHeading}</h1>
        </div>
        <div className='page-brief-desc'>
          {/* <p>{props.briefDesc}</p> */}
        </div>
      </div>
      {/* <div style={{ backgroundImage: `url(../img/${props.img}`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className="page-header-img"></div> */}
    </div>
  )
}

export default PageHeader