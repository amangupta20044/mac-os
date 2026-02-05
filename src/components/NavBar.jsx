import React from 'react'
import "./nav.scss";
import DateTime from './DateTime';
const NavBar = () => {
  return (
    <nav>
        <div className='left'>
            <div className="apple_icon">
                <img src="./nav-icon/Icon-Mac.svg" alt="" />
            </div>
            <div className="nav-item">
                <p>Aman</p>
            </div>
            <div className="nav-item">
                <p>file</p>
            </div>
            <div className="nav-item">
                <p>window</p>
            </div>
            <div className="nav-item">
                <p>terminal</p>
            </div>
        </div>
        <div className='right'>
            <div className="wifi-icon">
                <img src="./nav-icon/wifi.svg" alt="" />
            </div>
            <div className="nav-item">
                <DateTime />
            </div>
        </div>
    </nav>
  )
}

export default NavBar