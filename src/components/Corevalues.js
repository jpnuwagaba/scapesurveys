import React from 'react'
import Corevalue from './Corevalue'

const Corevalues = () => {
  return (
    <>
      <div className="core-values">
        <div>
          <Corevalue
            img='./img/handshake1.png'
            corevalue='Integrity'
            corevalueDesc='Service delivery, character and honesty'
          />
        </div>
        <div>
          <Corevalue
            img='./img/managers.png'
            corevalue='Professionalism'
            corevalueDesc='Effective communication and productivity'
          />
        </div>
        <div>
          <Corevalue
            img='./img/quality.png'
            corevalue='Quality'
            corevalueDesc='Fast data, technology and Excellence'
          />
        </div>
        <div>
          <Corevalue
            img='./img/landing-icons/mapping (2).png'
            corevalue='Experience'
            corevalueDesc='10 years of workmanship - guaranteed success.'
          />
        </div>
      </div>
    </>
  )
}

export default Corevalues