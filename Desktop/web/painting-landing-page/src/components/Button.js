import '../scss/Button.scss'

export default function Button({ className, innerText, buttonType, onClick }) {
  return (
    <>
      {buttonType == 'type-1' && 
      <button onClick={onClick} className={` ${className} button-component | button-1 common-button`}><p className='button-inner-text-style text-color-black'>{innerText}</p></button>}
      {buttonType == 'type-2' && 
      <button onClick={onClick} className={` ${className} button-component | button-2 common-button`}><p className='button-inner-text-style text-color-white'>{innerText}</p></button>}
    </>
  )
}
