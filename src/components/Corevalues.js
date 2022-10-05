import React from 'react'
import Corevalue from './Corevalue'

const Corevalues = () => {
  return (
    <>
      <div className="container core-values">
        <div>
          <Corevalue
            img='./img/handshake1.png'
            corevalue='Integrity'
            corevalueDesc='Delivering the right services the right way through character and honesty'
          />
        </div>
        <div>
          <Corevalue
            img='./img/managers.png'
            corevalue='Professionalism'
            corevalueDesc='Communicating effectively and appropriately and always finding a way to be productive.'
          />
        </div>
        <div>
          <Corevalue
            img='./img/quality.png'
            corevalue='Quality'
            corevalueDesc='Using both old unbiased data sources and the new advancing and reliable technology to ensure excellence in service delivery.'
          />
        </div>
        <div>
          <Corevalue
            img='./img/landing-icons/mapping (2).png'
            corevalue='Experience'
            corevalueDesc='Our industry age of 10 years and still counting guarantees the best workmanship from us.'
          />
        </div>
      </div>
    </>
  )
}

export default Corevalues