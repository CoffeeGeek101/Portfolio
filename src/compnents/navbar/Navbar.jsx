import { Box } from '@chakra-ui/react'
import React from 'react'
import './navbar.css'
export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-links">
          <p className='nav-link a'>About me</p>
          <p className='nav-link b'>My Projects</p>
          <p className='nav-link c'>Contact me</p>
        </div>
        <div className="nav-signature">
          <p>Shoumyadeep</p>
        </div>
      </div>
    </div>
  )
}
