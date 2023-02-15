import { Box } from '@chakra-ui/react'
import React from 'react'
import './navbar.css'
export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-links">
          <p>About me</p>
          <p>My Projects</p>
          <p>Contact me</p>
        </div>
        <div className="nav-signature">
          <p>Shoumyadeep</p>
        </div>
      </div>
    </div>
  )
}
