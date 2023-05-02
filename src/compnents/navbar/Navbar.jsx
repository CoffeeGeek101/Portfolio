import React from 'react'
import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-links">
          <AnchorLink href='#aboutme' className='nav-link'>About me.</AnchorLink>
          <AnchorLink href='#project' className='nav-link'>My projects.</AnchorLink>
          <AnchorLink href='#connect' className='nav-link'>Contact me.</AnchorLink>
        </div>
        <div className="nav-signature">
          <p>Shoumyadeep</p>
        </div>
      </div>
    </div>
  )
}
