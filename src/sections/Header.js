import React from 'react'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import backgroundURL from '../assets/images/desktop/header-bg-desktop.jpg';

const Header = () => {
  return (
    <header id="header" className="Header" style={{backgroundImage: `url(${backgroundURL})`, height: '240rem'}}>
      <Nav />
      <Logo />
    </header>
  )
}

export default Header