
import '../scss/AboutUs.scss'
 
export default function AboutUs() {
  return (
    <div className="about-us | flexbox-container-column wrapper" id='about-us'>
      <div className="about-us-text-container | flexbox-container-column">
        <h2 className='about-us-section-title | section-title-text font-weight-medium'>WHO WE ARE</h2>
        <p className='about-us-section-paragraph | common-paragraph-text'>We are a small local business headquartered in Fort Lee. Our journey began in 2016 within a design organization, where we specialized in creating designs for houses and apartments. After five years of experience, we realized that we were equipped to establish our own painting business focusing on houses and apartments.<br/><br/>In our operations, we prioritize the integration of the latest painting technologies and techniques. Our commitment extends to utilizing only tested and safe materials that are both beneficial to your health and environmentally friendly. Whether you seek minor enhancements to your home or a complete repainting project, our team of specialists is dedicated to assisting you.<br/><br/>We provide apartment painting services in Manhattan, Edgewater, Fort Lee, Hoboken.</p>
        <div className="about-us-links-container | flexbox-container-column">
          <a className='text-color-black' target="_blank" href="https://www.thumbtack.com/nj/fort-lee/handyman/sbv86/service/474418093323231257?utm_medium=android&referrer_pk=474415396231528473&surface=sp">Our profile on Thumbtack</a>
          <a className='text-color-black' target="_blank" href="https://www.yelp.com/biz/sbv86-fort-lee">Our profile on Yelp</a>
        </div>
      </div>
      <div className="about-us-image-and-logo-container | flexbox-container-column">
        {/* <div className="about-us-img-placeholder"></div> */}
        <img className='about-us-image' src={process.env.PUBLIC_URL + "/images/about-us/about-us-img.jpg"} alt="" />
        <div className="about-us-partners-container">
          <p className='about-us-partners-text | diminished-text'>Proud to be official partners of</p>
          <div className="about-us-logos | flexbox-container">
            <img src={process.env.PUBLIC_URL + "/images/sherwin-logo.png"} alt="" />
            <img src={process.env.PUBLIC_URL + "/images/moore-logo.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
