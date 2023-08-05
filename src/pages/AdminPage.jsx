import React from 'react'

const AdminPage = () => {
  const openSanityStudio = () => {
    window.open('/studio', '_blank');
  };

  return (
    <div className='h-screen'>
      <h1>Admin Page</h1>
      <button className='bg-companyBlue' onClick={openSanityStudio}>Open Sanity Studio</button>
    </div>
  )
}

export default AdminPage