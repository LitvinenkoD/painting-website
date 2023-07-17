
import '../scss/components/Navbar.scss'

import {useLocation } from 'react-router-dom'

import NavLinks from './NavLinks'

import hamburgerIcon from '../component-file-dependencies/Navbar/icon-hamburger.svg'
import audiophileLogo from '../component-file-dependencies/shared/logo.svg'

function conditionallyShowUnderline(url) {
  if (url == '/' || url == '/headphones' || url == '/speakers' || url == '/earphones') {
    return ''
  }
  return 'navbar-underline-hidden'
}

export default function Navbar() {
  const currenturl = useLocation().pathname
  
  
  return (
    <nav className="navbar">
      <div className="navbar-content | flexbox-container wrapper">
        <div className='navber-menu-and-logo-container | flexbox-container'>
          <p className='navbar-hamburger-icon' >///</p>
          <p className='navbar-logo' >audiosomething</p>
          {/* <img className='navbar-hamburger-icon' src={hamburgerIcon} alt="" />
          <img className='navbar-logo' src={audiophileLogo} alt="" /> */}
        </div>
        <NavLinks className="navbar-navlinks | flexbox-container" />
        <img className='navbar-shopping-cart' src="/assets/shared/desktop/icon-cart.svg" alt="" />
      </div>
      <div className={`navbar-underline ${conditionallyShowUnderline(currenturl)} | `}></div>
    </nav>
  )
}
