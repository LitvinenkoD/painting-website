
import '../scss/CTA.scss'

export default function CTA({ innerText, className, linkTo, onClick }) {
  return (
    <a className={`${className} cta-component | common-button`} href={linkTo} onClick={onClick}> <p className='button-inner-text-style | text-color-black'>{innerText}</p></a>
  )
}
