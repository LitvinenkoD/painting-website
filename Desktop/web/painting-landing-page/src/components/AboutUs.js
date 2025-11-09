
import '../scss/AboutUs.scss'
 
export default function AboutUs() {
  return (
    <div className="about-us | flexbox-container-column wrapper" id='about-us'>
      <div className="about-us-text-container | flexbox-container-column flow">
        <h2 className='about-us-section-title | section-title-text font-weight-medium'>WHO WE ARE</h2>
        <p className='about-us-section-paragraph | common-paragraph-text'>&emsp;We are a small local business headquartered in Midtown Manhattan. Our journey began in 2016 within a design organization, where we specialized in creating designs for houses and apartments. After five years of experience, we realized that we were equipped to establish our own painting business focusing on houses and apartments.</p>
        <p className='about-us-section-paragraph | common-paragraph-text'>&emsp;In our operations, we prioritize the integration of the latest painting technologies and techniques. Our commitment extends to utilizing only tested and safe materials that are both beneficial to your health and environmentally friendly. Whether you seek minor enhancements to your home or a complete repainting project, our team of specialists is dedicated to assisting you.</p>
        <p className='about-us-section-paragraph | common-paragraph-text'>&emsp;We provide apartment painting services in Midtown, Upper West and East side, as well as the Bergen county of New Jersey (Fort Lee, Hoboken, North Bergen, and the neighboring townships)</p>
        <div className="about-us-links-container | flexbox-container-column">
          <a className='text-color-black' target="_blank" href="https://maps.app.goo.gl/y3Gbxwqen1XkE6aSA">Google Maps link</a>
          <a className='text-color-black' target="_blank" href="https://www.thumbtack.com/nj/fort-lee/handyman/sbv86/service/474418093323231257?utm_medium=android&referrer_pk=474415396231528473&surface=sp">Thumbtack profile</a>
          <a className='text-color-black' target="_blank" href="https://www.yelp.com/biz/sbv86-fort-lee">Yelp profile</a>
        </div>
      </div>
      <div className="about-us-image-and-logo-container | flexbox-container-column">
        {/* <div className="about-us-img-placeholder"></div> */}
        <img className='about-us-image' src={process.env.PUBLIC_URL + "/images/about-us/about-us-img.jpg"} alt="" />
        <div className="about-us-partners-container">
          {/* <p className='about-us-partners-text | diminished-text'>Official partners of</p> */}
          <div className="about-us-logos | flexbox-container">
            <img src={process.env.PUBLIC_URL + "/images/Benjamin_Moore_logo.svg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
