import '../scss/ContactForm.scss'
import emailjs from '@emailjs/browser'
import Button from './Button';
import { useRef } from 'react';
import { useState } from 'react';

export default function ContactForm() {

  function sendEmail([name, phone, email, requestCase, describe]){
    const templateParams = {
      from_name: name,
      client_phone_number: phone,
      client_email: email,
      message_case: requestCase,
      message: describe
    };

    emailjs.send('service_qm8hm4k','template_bk7ajti', templateParams, 'MOHeoP761M3eOCKJB')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
    
  }

  function resetForm(){
    nameInput.current.value = ('')
    phoneInput.current.value = ('')
    emailInput.current.value = ('')
    caseInput.current.value = ('')
    describeInput.current.value = ('')
  }

  function processForm(){

    const name = nameInput.current.value
    const phone = phoneInput.current.value
    const email = emailInput.current.value
    const requestCase = caseInput.current.value
    const describe = describeInput.current.value

    const values = [name, phone, email, requestCase, describe]


    checkFormInput(values)
      if (!formInvalid){
        sendEmail(values)
        resetForm()
      }
  }

  function checkFormInput([name, phone, email, requestCase, describe]){
    if(!name || !phone || !isValidEmailAddress(email) || !requestCase || !describe){
      setFormInvalid(true)
    }

    else{
      setFormInvalid(false)
      setFormSubmitted(true)
    }

  }

  function isValidEmailAddress(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
  }
  

  const nameInput = useRef()
  const phoneInput = useRef()
  const emailInput = useRef()
  const caseInput = useRef()
  const describeInput = useRef()

  const [formInvalid, setFormInvalid] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className='contact-us-section | flexbox-container-column wrapper' id='contact-us'>

    <h2 className='contact-us-section-title | section-title-text font-weight-regular'>Get a free estimate</h2>
    <p className='contact-us-section-subtitle | common-paragraph-text'>All fields are required</p>

      <form className='flexbox-container-column'>
      
        <label className='form-label | flexbox-container-column' htmlFor="name">
          Name
          <input ref={nameInput} type="text" id='name' />
        </label>
        
        <label className='form-label | flexbox-container-column' htmlFor="phone number">
          Phone number
          <input ref={phoneInput} type="text" id='phone number' />
        </label>

        <label className='form-label | flexbox-container-column' htmlFor="email">
          Email
          <input ref={emailInput} type="text" id='email' />
        </label>
        
        <label className='form-label | flexbox-container-column' htmlFor="case">
          Select case
          <select ref={caseInput} id="case">
            <option value="Interior painting">Interior painting</option>
            <option value="Exterior painting">Exterior painting</option>
            <option value="Commercial painting">Commercial painting</option>
            <option value="Wallpaper installation">Wallpaper installation</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className='form-label | flexbox-container-column' htmlFor="describe">
          What can we help you with?
          <textarea ref={describeInput} type="text" id='describe' />
        </label>

        {formInvalid && <p className='text-color-error'>Please check your input correctness</p>}
        <Button className='contact-us-form-submit-button' onClick={e => {e.preventDefault(); processForm();}} innerText={'Submit'} buttonType={'type-1'} />
        {formSubmitted && <p className='text-color-success'>Your inquiry has been sent, thank you. You should hear back from us in 1 business day.</p>}
      </form>
    </div>
  )
}
