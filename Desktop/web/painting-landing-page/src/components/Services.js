import '../scss/Services.scss'
import CTA from './CTA'
import { scrollToElement } from '../utils/utils'

export default function Services() { 
  return (
    <div className='services-section | wrapper flexbox-container-column' id='services'>
       <h2 className='services-section-title | section-title-text font-weight-regular'>Our Services</h2>
        <div className="services-container | flexbox-container-column">

          <div className="services-group-1 services-group">
            <div className="service service-1">
              <h3 className='service-heading | font-weight-regular'>Interior paintwork</h3>
              <p className='service-paragraph'>Full-scale property repaints, living rooms, wallpaper installation, ceilings, kitchen cabinets, children rooms...</p>
            </div>

            <div className="service-image-container service-image-container-1"><img src={process.env.PUBLIC_URL + "/images/services/interior-img.png"} alt="image of a freshly painted wall" /></div>
          </div>


          <div className="services-group-2 services-group">
            <div className="service service-2">
              <h3 className='service-heading | font-weight-regular'>Move-in move-out painting</h3>
              <p className='service-paragraph'>Fast and reliable move-in move-out painting for your property or property you rent</p>
            </div>

            <div className="service service-3 | text-color-white">
              <h3 className='service-heading | font-weight-regular'>Commercial paintwork</h3>
              <p className='service-paragraph'>Office spaces, stores, art installations, large long-term projects and contracts...</p>
            </div>            
          </div>


          <div className="services-group-3 services-group"> 
            <div className="service service-4 | text-color-white">
              <h3 className='service-heading | font-weight-regular'>Wallpaper installation</h3>
              <p className='service-paragraph'>Large and small scale jobs, apartments, commercial spaces...</p>
            </div>

            <div className="service-image-container service-image-container-2"><img src={process.env.PUBLIC_URL + "/images/services/wallpaper-img.png"} alt="image of a colorful wallpaper" /></div>
          </div>

        </div>
        <CTA className='services-cta' innerText={'Get a free estimate'} onClick={() => {scrollToElement('contact-us')}}/>
    </div>
  )
}
 