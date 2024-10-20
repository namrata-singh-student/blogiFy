import React from 'react'
import logo from '../../public/images/logo.png'

function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={logo} alt="Logo" className=' w-full h-12' />
    </div>
  )
}

export default Logo