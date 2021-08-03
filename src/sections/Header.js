import React from 'react'
import './Header.scss';
import Nav from '../components/Nav'
import Logo from '../components/Logo'

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <Logo />
    </header>
  )
}

export default Header