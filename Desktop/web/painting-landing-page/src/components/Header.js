import '../scss/Header.scss'
import useMobileHeaderMenu from '../hooks/useMobileHeaderMenu'
import { scrollToElement } from '../utils/utils'
import useDetermineDevice from '../hooks/useDetermineDevice'


export default function Header(className) {
  const [closeMenuImmediately, controlMenuOperation, menuIsOpen, menuAnimation] = useMobileHeaderMenu()
  const deviceType = useDetermineDevice()

  function hanldeMenuLinkClick(){
    closeMenuImmediately()
  }

  function handleMenuIconClick(){
    controlMenuOperation()
  }

  return (
    <nav className={className}>
      <div className="header-content | flexbox-container wrapper">
        <div className="header-logo-container">
          {deviceType != 'mobile' && <h1 className='font-weight-regular' onClick={() => {scrollToElement('hero')}}>Paintlab</h1>}
          {deviceType == 'mobile' && <h1 className='font-weight-regular' onClick={() => {scrollToElement('hero')}}>Paintlab</h1>}
        </div>

        <div className="header-links-container | flexbox-container">
          <a className='header-link' onClick={() => {scrollToElement('about-us')}}>About us</a>
          <a className='header-link' onClick={() => {scrollToElement('services')}}>Services</a>
          <a className='header-link' onClick={() => {scrollToElement('testimonials')}}>Testimonials</a>
          <a className='header-link' onClick={() => {scrollToElement('projects-gallery')}}>Projects Gallery</a>
          <a className='header-link' onClick={() => {scrollToElement('contact-us')}}>Contact Us</a>
        </div>

        {menuIsOpen && <div className={`header-menu-container ${menuAnimation} | flexbox-container-column`}>
          <a className='header-link' onClick={() => {hanldeMenuLinkClick(); scrollToElement('about-us')}}>About us</a>
          <a className='header-link' onClick={() => {hanldeMenuLinkClick(); scrollToElement('services')}}>Services</a>
          <a className='header-link' onClick={() => {hanldeMenuLinkClick(); scrollToElement('testimonials')}}>Testimonials</a>
          <a className='header-link' onClick={() => {hanldeMenuLinkClick(); scrollToElement('projects-gallery')}}>Projects Gallery</a>
          <a className='header-link' onClick={() => {hanldeMenuLinkClick(); scrollToElement('contact-us')}}>Contact Us</a>
        </div>}

        <div className="header-hamburger-icon" onClick={handleMenuIconClick}>
          <img src={process.env.PUBLIC_URL + "/images/hamburger-menu.svg"} alt="" />
        </div>

      </div>
    </nav>
  )
}
