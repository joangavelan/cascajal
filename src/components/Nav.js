import React from 'react'
import './Nav.scss'
import HomeIcon from '../assets/images/home-icon.png'
import FbIcon from '../assets/images/fb-icon.png'
import InstIcon from '../assets/images/inst-icon.png'
import { navItems } from '../data/NavItems'

const Nav = () => {
  return (
    <div className="Nav-container">
      <nav className="Nav">
        {/* home icon */}
        <img src={HomeIcon} alt="home-icon" />
        {/* nav links */}
        <ul className="Nav__links">
          {navItems.map((item, index) => 
            <li key={index}>
              <a className="Nav__link" href={item.url}>{item.name}</a>
            </li>)}
        </ul>
        {/* social icons */}
        <div className="Nav__social-icons">
          <img src={FbIcon} alt="fb-icon" />
          <img src={InstIcon} alt="instagram-icon" />
        </div>
      </nav>
    </div>
  )
}

export default Nav