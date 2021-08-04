import React from 'react'
import Nav from '../components/Nav'
import Logo from '../components/Logo'
import backgroundURL from '../assets/images/desktop/header-bg-desktop.jpg';

const styles = {
  background: `url(${backgroundURL}) no-repeat center`,
  backgroundSize: 'cover',
  height: '240rem'
}

const Header = () => {
  return (
    <header className="header" style={styles}>
      <Nav />
      <Logo />
    </header>
  )
}

export default Header