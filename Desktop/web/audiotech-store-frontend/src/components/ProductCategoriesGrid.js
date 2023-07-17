import '../scss/components/ProductCategoriesGrid.scss'

import headphonesThumbnail from  '../component-file-dependencies/ProductCategoriesGrid/image-category-thumbnail-headphones.png'
import speakersThumbnail from '../component-file-dependencies/ProductCategoriesGrid/image-category-thumbnail-speakers.png'
import earphonesThumbnail from '../component-file-dependencies/ProductCategoriesGrid/image-category-thumbnail-earphones.png'

import Button from './Button'

export default function ProductCategoriesGrid() {

  const gridContent = [
    {
      id: 1,
      imageSrc: headphonesThumbnail,
      title: 'HEADPHONES',
      redirectLink: '/headphones'
    },

    {
      id: 2,
      imageSrc: speakersThumbnail,
      title: 'SPEAKERS',
      redirectLink: '/speakers'
    },

    {
      id: 3,
      imageSrc: earphonesThumbnail,
      title: 'EARPHONES',
      redirectLink: '/earphones'
    }
  ]

  return (
    <div className="product-categories-grid | flexbox-container wrapper">
      {gridContent.map(category => {
        return(
          <a key={category.id} className='category-card-link-wrapper' href="#">
            <div className="category-card | flexbox-container text-color-black">
              <img className='category-card-thumbnail' src={category.imageSrc} alt="" />
              <h6 className='category-card-title | text-H6'>{category.title}</h6>
              <Button buttonType={'type-3'} textContent={'SHOP'} className="category-card-shop-container" />
            </div>

          </a>
        )
      })}
    </div>
  )
}
