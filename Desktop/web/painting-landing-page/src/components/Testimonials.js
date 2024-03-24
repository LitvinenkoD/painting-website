import '../scss/Testimonials.scss'

export default function Testimonials() {
  return (
    <div className='testimonials-section | flexbox-container-column wrapper' id='testimonials'>
      <h2 className='testimonials-section-title | section-title-text font-weight-regular'>Testimonials</h2>
      <div className="testimonials-container | flexbox-container-column">

        <div className="testimonial">
          <p className='testimonial-text | testimonial-paragraph text-color-black-75'>Bair painted my apartment and did some repairs on my front door. He did a great job! He is very reliable and trustworthy, which is very hard to find with contractors. He was punctual, gave me an honest estimate of what he thought needed to be done, even did a few extra things! Very diligent and takes pride in his work. Highly recommend and would definitely hire him again if I need any work done in the apartment.</p>
          <div className="testimonial-author-section | flexbox-container">
            <h6 className='testimonial-author-name | testimonial-author-name-heading font-weight-regular'>Yoana k.</h6>
            <div className="testimonial-rating-container | flexbox-container">
              <img src={process.env.PUBLIC_URL + "/images/testimonials/five-stars.png"} alt="image of a 5-star rating" />
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className='testimonial-text | testimonial-paragraph text-color-black-75'>Bair painted my apartment on a short timeline and could not have done a better job. I’m very happy with his work and will definitely hire him for all of my future jobs. He’s extremely professional and courteous and I look forward to working together again. Thanks Bair.</p>
          <div className="testimonial-author-section | flexbox-container">
            <h6 className='testimonial-author-name | testimonial-author-name-heading font-weight-regular'>Jonathan K.</h6>
            <div className="testimonial-rating-container | flexbox-container">
              <img src={process.env.PUBLIC_URL + "/images/testimonials/five-stars.png"} alt="image of a 5-star rating" />
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className='testimonial-text | testimonial-paragraph text-color-black-75'>I was very pleased with the quality and professionalism of Bair. He was very responsive to my inquiries and he also showed up on time and ready to tackle the project, which he did quite well !!! I am hoping to use his services again in the near future. I would definitely recommend him to anyone that is looking for an interior painter !!!</p>
          <div className="testimonial-author-section | flexbox-container">
            <h6 className='testimonial-author-name | testimonial-author-name-heading font-weight-regular'>Eric-Keith E.</h6>
            <div className="testimonial-rating-container | flexbox-container">
              <img src={process.env.PUBLIC_URL + "/images/testimonials/five-stars.png"} alt="image of a 5-star rating" />
            </div>
          </div>
        </div>

      </div>

      <a className='testimonials-link | testimonial-paragraph text-color-black' target="_blank" href="https://www.thumbtack.com/nj/fort-lee/handyman/sbv86/service/474418093323231257?utm_medium=android&referrer_pk=474415396231528473&surface=sp" >View more</a>

      <div className="testimonials-message-from-bair | flexbox-container-column">
        <span className="message-image-container"><img src={process.env.PUBLIC_URL + "/images/testimonials/bair-img.png"} alt="" /></span>
        <div className="message-text-container | flexbox-container-column">
          <p className="message-text | testimonial-paragraph">It’s not only about getting the job done. With responsibility, respect and professionalism, we strive to deliver lasting and high-quality service to New Jersey families. Client satisfaction in the prime goal.</p>
          <p className="bair-name-text | testimonial-message-text">Bair Sodnomov, founder</p>
        </div>
      </div>
    </div>
  )
}
