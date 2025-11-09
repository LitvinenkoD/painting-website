import useDetermineDevice from '../hooks/useDetermineDevice'
import '../scss/Footer.scss'
import { scrollToElement } from '../utils/utils'

export default function Footer() {
  const deviceType = useDetermineDevice()

  return (
    <footer className='footer-section flexbox-container-column'>
      {deviceType != 'mobile' && <h1 className=' footer-logo | footer-heading text-color-white font-weight-regular' onClick={() => {scrollToElement('hero')}}>Paintlab interior painting</h1>}
      {deviceType == 'mobile' && <h1 className=' footer-logo | footer-heading text-color-white font-weight-regular' onClick={() => {scrollToElement('hero')}}>Paintlab</h1>}
      <div className="footer-site-nav | flexbox-container-column">
        <p className=' | footer-paragraph text-color-white' onClick={() => {scrollToElement('about-us')}}>About us</p>
        <p className=' | footer-paragraph text-color-white' onClick={() => {scrollToElement('services')}}>Services</p>
        <p className=' | footer-paragraph text-color-white' onClick={() => {scrollToElement('testimonials')}}>Testimonials</p>
        <p className=' | footer-paragraph text-color-white' onClick={() => {scrollToElement('projects-gallery')}}>Projects Gallery</p>
        <p className=' | footer-paragraph text-color-white' onClick={() => {scrollToElement('contact-us')}}>Contact us</p>
      </div>

      <div className="footer-platform-links | flexbox-container">
        <a className=' | footer-paragraph text-color-white' target="_blank" href="https://maps.app.goo.gl/y3Gbxwqen1XkE6aSA">Google Maps</a>
        <a className=' | footer-paragraph text-color-white' target="_blank" href="https://www.thumbtack.com/nj/fort-lee/handyman/sbv86/service/474418093323231257?utm_medium=android&referrer_pk=474415396231528473&surface=sp">Thumbtack</a>
        <a className=' | footer-paragraph text-color-white' target="_blank" href="https://www.yelp.com/biz/sbv86-fort-lee">Yelp</a>
      </div>

      <div className="footer-additional-contact | flexbox-container-column">
        <p className=' | footer-paragraph text-color-white'>Additional contact methods</p>
        <div className="footer-additional-contact-links | flexbox-container-column">
          <a className=' | footer-paragraph text-color-white' href="tel:+15513161004">551-316-1004</a>
          <a className=' | footer-paragraph text-color-white' href="mailto:sbv8612@gmail.com">sbv8612@gmail.com</a>
        </div>
        <p className=' | footer-paragraph text-color-white'>57 W 57th St, Office 322, New York, NY 10019</p>
      </div>

      <div className="footer-website-author-contact">
        <p className=' | footer-paragraph text-color-white'>Designed and developed by Daniil Litvinenko</p>
        <span className='footer-paragraph text-color-white'>Contact Email: <a className=' | footer-paragraph text-color-white' href="mailto:daniil.litvinenko1920@gmail.com">daniil.litvinenko1920@gmail.com</a></span>
      </div>



    </footer>
  )
}
