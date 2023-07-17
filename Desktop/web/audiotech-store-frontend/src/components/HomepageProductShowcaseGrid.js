import Button from "./Button";
import '../scss/components/HomepageProductShowcaseGrid.scss'

import ZX9SpeakerMobile from '../component-file-dependencies/HomepageProductShowcaseGrid/mobile/image-speaker-zx9.png'
import ZX9SpeakerTablet from '../component-file-dependencies/HomepageProductShowcaseGrid/tablet/image-speaker-zx9.png'
import ZX9SpeakerDesktop from '../component-file-dependencies/HomepageProductShowcaseGrid/desktop/image-speaker-zx9.png'

import { useReturnDeviceType } from "../hooks/DeviceTypeContext";
import {determineImageSize} from '../utils/utils'


const imageArray = [ZX9SpeakerMobile, ZX9SpeakerTablet, ZX9SpeakerDesktop]
export default function HomepageProductShowcaseGrid() {

  const deviceType = useReturnDeviceType()
  
  return (
    <div className="homepage-product-showcase-grid | wrapper">
      <div className="grid-element grid-element-1 | text-color-white flexbox-container">
        <div className="grid-element-image-container">
          <img className="grid-element-img" src={determineImageSize(deviceType, imageArray)} alt="" />
        </div>

        <div className="grid-element-text-container | flexbox-container">
          <h1 className="grid-element-h1 | text-H1">ZX9 SPEAKER</h1>
          <p className="grid-element-p | text-body-text opacity-075">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <Button buttonType={'type-2-alt'} textContent={'SEE PRODUCT'} className='button' />
        </div>
        

      </div>

      <div className="grid-element grid-element-2 | flexbox-container">
        <div className="grid-element-content-container | flexbox-container">
          <h4 className="grid-element-h4 | text-H4">ZX7 SPEAKER</h4>
          <Button buttonType={'type-2'} textContent={'SEE PRODUCT'} className='button' />
        </div>
      </div>

      <div className="grid-element grid-element-3"></div>

      <div className="grid-element grid-element-4 | flexbox-container">
        <h4 className="grid-element-h4  | text-H4">YX1 EARPHONES</h4>
        <Button buttonType={'type-2'} textContent={'SEE PRODUCT'} className='button'/>
      </div>
    </div>
  )
}
