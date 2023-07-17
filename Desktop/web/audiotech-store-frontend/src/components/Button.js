
import '../scss/components/Button.scss'

import shopButtonArrowImg from '../component-file-dependencies/Button/icon-arrow-right.svg'

export default function Button({buttonType, textContent, className}) {
  return (
    <>
      {buttonType === 'type-1' && 
        <button className='button | general-button-1'>
          <p className='general-button-text'>{textContent}</p>
        </button>
      }
      
      {(buttonType === 'type-2' || buttonType === 'type-2-alt') && 
        <button className={`button | ${buttonType == 'type-2' ? 'general-button-2' : 'general-button-2-alt'}`}>
          <p className='general-button-text'>{textContent}</p>
        </button>
      }

      {buttonType === 'type-3' && 
        <div className={`shop-button ${className} | flexbox-container`}>
          <p className=" shop-button-text | text-subtitle opacity-05">{textContent}</p>
          <img className='shop-button-image' src={shopButtonArrowImg} alt="" />
        </div>
      }


    </>
  )
}
