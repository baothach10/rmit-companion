import {React, useState} from 'react'
import './navbar.css'
import { FaBars,FaTimes } from "react-icons/fa";
const Navbar = () => {

  const[isMobile, setIsMobile] = useState(false)
   
  return (
    <div className='rise_navbar'>
      <div className='rise_navbar-links_logo'>RISE</div>
      <div className='rise_navbar-links'>
        <ul className={ isMobile ?'nav-links-mobile' : 'rise_navbar-links_container'}
        onClick={() => setIsMobile(false)}>
          <li><a href="#TEAMPROFILE">TEAM PROFILE</a></li>
          <li><a href="#ABOUTCAMPUS">ABOUT CAMPUS</a></li>
          <li><a href="#EVENT">EVENT</a></li>
          <li><a href="#OURGAME">OUR GAME</a></li>
        </ul>
        <button id='mobile-menu' onClick={()=> setIsMobile(!isMobile)}>
          {isMobile ? <i className='mobile-menu-icons'><FaTimes/></i>: <i className='mobile-menu-icons'><FaBars/></i>}
        </button>
                 
      </div>
    </div>
    
  )
}

export default Navbar
