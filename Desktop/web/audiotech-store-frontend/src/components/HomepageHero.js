import '../scss/components/HomepageHero.scss'
import Button from './Button'

export default function HomepageHero() {
  return (
    <header className='homepage-hero | flexbox-container text-color-white'>
      <div className="homepage-hero-grid | wrapper">
        <div className="homepage-hero-text-content | flexbox-container">
          <p className='paragraph-1 | text-overline opacity-05'>NEW PRODUCT</p>
          <h1 className='heading | text-H1'>XX99 MARK II HEADPHONES</h1>
          <p className='paragraph-2 | text-body-text opacity-075'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <Button buttonType={'type-1'} textContent={'SEE PRODUCT'} className="button" />
        </div>
      </div>
    </header>

  )
}