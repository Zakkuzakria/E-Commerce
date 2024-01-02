import React from 'react'
import './DescriptionBox.css';
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorum molestiae harum accusantium recusandae est deleniti! Excepturi explicabo dolorum deleniti perspiciatis neque repudiandae necessitatibus voluptatem voluptatibus ad! Minus, consequuntur sint.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem mollitia voluptatem similique magnam adipisci eaque architecto iusto animi exercitationem sunt.</p>
        </div>
    </div>
  )
}

export default DescriptionBox