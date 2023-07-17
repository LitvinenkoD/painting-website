
import mainImageMobile from '../component-file-dependencies/AboutUsInsert/mobile/image-best-gear.jpg'
import mainImageTablet from '../component-file-dependencies/AboutUsInsert/tablet/image-best-gear.jpg'
import mainImageDesktop from '../component-file-dependencies/AboutUsInsert/desktop/image-best-gear.jpg'

import { useReturnDeviceType } from '../hooks/DeviceTypeContext'
import {determineImageSize} from '../utils/utils'

import '../scss/components/AboutUsInsert.scss'

const imageArray = [mainImageMobile, mainImageTablet, mainImageDesktop]

export default function AboutUsInsert() {
  const deviceType = useReturnDeviceType()

  return (
    <div className="about-us-insert | wrapper">
      <img className="about-us-insert-image" src={determineImageSize(deviceType, imageArray)}></img>
      <div className="about-us-insert-text-container | flexbox-container">
        <h2 className='about-us-insert-h2 | text-H2'>BRINGING YOU THE <span className='text-color-orangebrown'>BEST</span> AUDIO GEAR</h2>
        <p className='about-us-insert-p | text-body-text opacity-05'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
    </div>
  )
}
