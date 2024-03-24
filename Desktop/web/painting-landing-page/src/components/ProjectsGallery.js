import { useState } from 'react';
import '../scss/ProjectsGallery.scss'
import Button from './Button';

export default function ProjectsGallery() {

  const [viewMore, setViewMore] = useState(false)

  function handleViewMoreClick(){
    setViewMore(!viewMore)
  }
  return (
    <div className='projets-gallery | flexbox-container-column wrapper' id='projects-gallery'>
      <h2 className='projects-gallery-section-title | section-title-text font-weight-regular'>Project Gallery</h2>
      <div className="projets-gallery-image-container | flexbox-container-column">
        <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-1.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-2.png"} alt="" />
        <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-3.png"} alt="" />
        {viewMore && 
        <>
          <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-4.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-5.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-6.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-7.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-8.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-9.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-10.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-11.jpg"} alt="" />
          <img src={process.env.PUBLIC_URL + "/images/projects-gallery/image-12.jpg"} alt="" />
        </>}
      </div>

      {!viewMore && <Button className="view-more-button" onClick={e => {handleViewMoreClick()}} innerText={'View more'} buttonType={'type-2'} />}
      {viewMore  && <Button className="view-more-button" onClick={e => {handleViewMoreClick()}} innerText={'Show less'} buttonType={'type-2'} />}
      

      
    </div>
  )
}
 