import useDetermineDevice from '../hooks/useDetermineDevice';
import '../scss/Hero.scss'
import CTA from './CTA'
import { scrollToElement } from '../utils/utils'


export default function Hero() {
  const deviceType = useDetermineDevice()

  return (
    <div className='hero' id='hero'>
      <div className="hero-container | wrapper flexbox-container-column">
        {(deviceType == 'mobile') &&
          <div className="hero-image-container | flexbox-container-column">
            <img className='hero-image' src={process.env.PUBLIC_URL + "/images/hero-mobile.png"} alt="image of a wall painter" />
          </div>
        }

        <div className="hero-text-content | flexbox-container-column">
          <h1 className='hero-heading | font-weight-medium'>Professional paintwork services</h1>
          <p className='hero-subheading | font-weight-regular'>High-quality interior and commercial paintwork services and wallpaper installation services from a local contractor based in Fort Lee, NJ</p>
          {(deviceType == 'desktop') && <CTA className="hero-cta" innerText={"Get a free quote!"} onClick={() => {scrollToElement('contact-us')}}  />}
        </div>

        {(deviceType != 'desktop') && <CTA className="hero-cta" innerText={"Get a free quote!"} onClick={() => {scrollToElement('contact-us')}} />}
      </div>
    </div>
  )
}