import React from 'react'
import Social from './Social'

const TeamMember = (props) => {
  return (
    <div>
      <div className="rounded-lg grid grid-cols-1">
        <div
          style={{
            background: `url(../Pics/${props.img})`,
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          className="aspect-square rounded-t-lg"></div>
        <div className="flex flex-col items-center gap-2 bg-companyBlue rounded-b-lg text-white text-center py-4">
          <div className="font-bold">{props.name}</div>
          <div className="text-xs uppercase">{props.position}</div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember