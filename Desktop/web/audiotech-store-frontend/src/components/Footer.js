
import NavLinks from './NavLinks'
import '../scss/components/Footer.scss'

import audiophileLogo from '../component-file-dependencies/shared/logo.svg'
import facebookSVG from '../component-file-dependencies/Footer/icon-facebook.svg'
import twitterSVG from '../component-file-dependencies/Footer/icon-twitter.svg'
import instagramSVG from '../component-file-dependencies/Footer/icon-instagram.svg'




export default function Footer() {
  return (
    <footer>
      <div className="footer-content-container | wrapper flexbox-container">
        <div className="footer-decoration-line"></div>
        <img className='footer-logo' src={audiophileLogo} alt="" />
        <NavLinks className='footer-nav-links | flexbox-container'/>
        <p className='about-us-paragraph | text-body-text opacity-05 text-color-white'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <p className='copyright-paragraph | text-body-text opacity-05 text-color-white font-bold'>Copyright 2021. All Rights Reserved</p>
        <div className="social-links-container | flexbox-container">
          <img src={facebookSVG} alt="" />
          <img src={twitterSVG} alt="" />
          <img src={instagramSVG} alt="" />
        </div>
      </div>
    </footer>
  )
}
