import '../scss/Testimonials.scss'

export default function Testimonials() {
  return (
    <div className='testimonials-section | flexbox-container-column wrapper' id='testimonials'>
      <h2 className='testimonials-section-title | section-title-text font-weight-regular'>Testimonials</h2>
      <div className="testimonials-container | flexbox-container-column">

        <div className="testimonial">
          <p className='testimonial-text | testimonial-paragraph text-color-black-75'>Bair and his team did a terrific job repainting my whole studio apartment. He came to see the project and gave me a very reasonable quote (by far the most affordable) within 24 hours. He was incredibly communicative throughout the process, and always on time. The paint and repairs turned out perfectly, and were done within two days. His recommendation on colors and finishes were great. He left the apartment clean and neat! Highly recommend.</p>
          <div className="testimonial-author-section | flexbox-container">
            <h6 className='testimonial-author-name | testimonial-author-name-heading font-weight-regular'>Michael I.</h6>
            <div className="testimonial-rating-container | flexbox-container">
              <img src={process.env.PUBLIC_URL + "/images/testimonials/five-stars.png"} alt="image of a 5-star rating" />
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className='testimonial-text | testimonial-paragraph text-color-black-75'>I recently had the pleasure of hiring Paint Lab to transform my apartment, and I couldn't be more delighted with the results. From start to finish, the experience was nothing short of exceptional.Bair, the owner, was  professional and considerate throughout the entire process. He took the time to understand my needs and provided valuable insights to enhance it further. His attention to detail and commitment to customer satisfaction were evident from the beginning until the end.One of the aspects that truly stood out was the competitiveness of the pricing. Despite offering top-notch quality and service, Bair's quote was significantly more competitive than others I had received. This combination of affordability and excellence is a rare find in today's market.The transformation of my apartment is truly remarkable. Bair's team used high-quality paints that have brought new life and vibrancy to every room. Their hard work and efficiency were evident in every brushstroke, and they went above and beyond to ensure that every detail was just right.Overall, I couldn't be happier with the outcome. Thanks to Bair and his team, my apartment now looks amazing, and I couldn't recommend Bair's Painting Company highly enough to anyone in need of professional painting services.</p>
          <div className="testimonial-author-section | flexbox-container">
            <h6 className='testimonial-author-name | testimonial-author-name-heading font-weight-regular'>Nathalie L. D.</h6>
            <div className="testimonial-rating-container | flexbox-container">
              <img src={process.env.PUBLIC_URL + "/images/testimonials/five-stars.png"} alt="image of a 5-star rating" />
            </div>
          </div>
        </div>

        <div className="testimonial">
          <p className='testimonial-text | testimonial-paragraph text-color-black-75'>It is a rarity in today's workforce to find workers who will take the time to do a superb job for a customer at a competitive price.   Bair and his team genuinely care about the quality of their work and they take enormous pride in producing an exceptional outcome.  Bair and his team have a keen, discerning eye and pay a tremendous amount of attention to detail.  Anyone can slap paint on a wall.  That was our previous experience.   These painters are artists that treat the wall as their canvas.  We had a delightfully positive experience and we are extremely grateful to have found such quality, professional painters at great value.</p>
          <div className="testimonial-author-section | flexbox-container">
            <h6 className='testimonial-author-name | testimonial-author-name-heading font-weight-regular'>Amy H.</h6>
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
          <p className="message-text | testimonial-paragraph">It’s not only about getting the job done. With responsibility, respect and professionalism, we strive to deliver lasting and high-quality service to New York and New Jersey families. Client satisfaction is the prime goal.</p>
          <p className="bair-name-text | testimonial-message-text">Bair Sodnomov, founder</p>
        </div>
      </div>
    </div>
  )
}
